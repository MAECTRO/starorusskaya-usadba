class SlavicFishing {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onCatch = options.onCatch || null;

        this.state = 'idle'; // idle, waiting, bite, success, escaped
        this.bobberX = 220;
        this.bobberY = 130;
        this.bobberBaseY = 130;
        this.biteTimer = null;
        this.biteWindowTimer = null;
        this.ripples = [];
        this.animTime = 0;

        this.lootTable = [
            { id: 'carp', name: 'Речной Карасик 🐟', gold: 50, wood: 0, resin: 0, rarity: 'common' },
            { id: 'pike', name: 'Царь-Щука 🎣', gold: 120, wood: 20, resin: 0, rarity: 'uncommon' },
            { id: 'goldfish', name: 'Золотая Рыбка 🐠', gold: 300, wood: 0, resin: 15, rarity: 'rare' },
            { id: 'chest', name: 'Затонувший Сундук 👑', gold: 600, wood: 50, resin: 30, rarity: 'legendary' }
        ];

        this.isRunning = false;
        this.animFrameId = null;
        this.retryTimers = [];
    }

    scheduleRetry(fn, delay) {
        const id = setTimeout(() => {
            if (this.retryTimers) {
                this.retryTimers = this.retryTimers.filter(t => t !== id);
            }
            fn();
        }, delay);
        if (!this.retryTimers) this.retryTimers = [];
        this.retryTimers.push(id);
        return id;
    }

    resize() {
        const parent = this.canvas.parentElement;
        if (!parent) return;
        this.canvas.width = parent.clientWidth || 440;
        this.canvas.height = parent.clientHeight || 240;
        this.bobberX = this.canvas.width / 2;
        this.bobberBaseY = this.canvas.height * 0.55;
        this.bobberY = this.bobberBaseY;
        this.castRod();
    }

    castRod() {
        if (!this.isRunning) return;
        this.state = 'waiting';
        this.ripples = [];
        if (this.biteTimer) clearTimeout(this.biteTimer);
        if (this.biteWindowTimer) clearTimeout(this.biteWindowTimer);
        if (this.retryTimers && this.retryTimers.length > 0) {
            this.retryTimers.forEach(id => clearTimeout(id));
            this.retryTimers = [];
        }

        // Fish bites in 2.5 to 5.5 seconds
        const delay = Math.floor(Math.random() * 3000) + 2500;
        this.biteTimer = setTimeout(() => {
            this.triggerBite();
        }, delay);
    }

    triggerBite() {
        this.state = 'bite';
        if (window.gameAudio) window.gameAudio.playMatch();
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            try { navigator.vibrate([40, 30, 40]); } catch (e) {}
        }

        for (let i = 0; i < 4; i++) {
            this.ripples.push({ r: 5 + i * 8, alpha: 1.0 });
        }

        // 1.4s window to strike!
        this.biteWindowTimer = setTimeout(() => {
            if (this.state === 'bite') {
                this.state = 'escaped';
                this.scheduleRetry(() => this.castRod(), 1500);
            }
        }, 1400);
    }

    strike() {
        if (this.state === 'bite') {
            this.state = 'success';
            if (this.biteWindowTimer) clearTimeout(this.biteWindowTimer);
            if (window.gameAudio) window.gameAudio.playWin();
            if (navigator.vibrate) navigator.vibrate([60, 40, 80]);

            const rand = Math.random();
            let loot;
            if (rand < 0.5) loot = this.lootTable[0];
            else if (rand < 0.8) loot = this.lootTable[1];
            else if (rand < 0.95) loot = this.lootTable[2];
            else loot = this.lootTable[3];

            if (this.onCatch) this.onCatch(loot);

            this.scheduleRetry(() => this.castRod(), 2000);
        } else if (this.state === 'waiting') {
            this.state = 'escaped';
            window.showToast && window.showToast('Рано подсекли! Рыба испугалась и уплыла.');
            this.scheduleRetry(() => this.castRod(), 1200);
        }
    }

    startLoop() {
        if (this.isRunning) return;
        this.isRunning = true;
        const loop = (time) => {
            if (!this.isRunning) return;
            this.animTime = time;
            this.render();
            this.animFrameId = requestAnimationFrame(loop);
        };
        this.animFrameId = requestAnimationFrame(loop);
    }

    stopLoop() {
        this.isRunning = false;
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
        if (this.biteTimer) {
            clearTimeout(this.biteTimer);
            this.biteTimer = null;
        }
        if (this.biteWindowTimer) {
            clearTimeout(this.biteWindowTimer);
            this.biteWindowTimer = null;
        }
        if (this.retryTimers && this.retryTimers.length > 0) {
            this.retryTimers.forEach(id => clearTimeout(id));
            this.retryTimers = [];
        }
        this.state = 'idle';
    }

    render() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        if (!w || !h) return;

        this.ctx.clearRect(0, 0, w, h);

        // Water Gradient
        const grad = this.ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#1D6F66');
        grad.addColorStop(0.5, '#2A9D8F');
        grad.addColorStop(1, '#0E443F');
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, w, h);

        // Gentle River Waves
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
            const wy = h * 0.3 + i * 35;
            this.ctx.beginPath();
            for (let x = 0; x < w; x += 15) {
                const y = wy + Math.sin(x * 0.04 + this.animTime * 0.003 + i) * 4;
                if (x === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
        }

        // Float / Bobber Motion
        let bobberY = this.bobberBaseY + Math.sin(this.animTime * 0.005) * 5;
        if (this.state === 'bite') {
            bobberY += Math.sin(this.animTime * 0.03) * 14 + 10;
        }

        // Ripples
        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const rip = this.ripples[i];
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${rip.alpha})`;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(this.bobberX, this.bobberBaseY + 6, rip.r * 1.6, rip.r * 0.6, 0, 0, Math.PI * 2);
            this.ctx.stroke();

            rip.r += 0.8;
            rip.alpha -= 0.015;
            if (rip.alpha <= 0) this.ripples.splice(i, 1);
        }

        // Fishing Line
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(w * 0.1, 0);
        this.ctx.quadraticCurveTo(w * 0.3, h * 0.3, this.bobberX, bobberY - 14);
        this.ctx.stroke();

        // Wooden Bobber / Поплавок
        this.ctx.save();
        this.ctx.translate(this.bobberX, bobberY);

        // Top Quill
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillRect(-2, -22, 4, 12);

        // Red & White Body
        this.ctx.fillStyle = '#E63946';
        this.ctx.beginPath();
        this.ctx.ellipse(0, -6, 9, 12, 0, 0, Math.PI);
        this.ctx.fill();

        this.ctx.fillStyle = '#F5EBE0';
        this.ctx.beginPath();
        this.ctx.ellipse(0, -6, 9, 12, 0, Math.PI, Math.PI * 2);
        this.ctx.fill();

        this.ctx.restore();

        // Status Text
        this.ctx.font = 'bold 18px "Russo One", sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.shadowColor = '#000';
        this.ctx.shadowBlur = 6;

        if (this.state === 'waiting') {
            this.ctx.fillStyle = '#F5EBE0';
            this.ctx.fillText('⏳ Ждем поклевки...', w / 2, 40);
        } else if (this.state === 'bite') {
            this.ctx.fillStyle = '#FFD700';
            this.ctx.font = 'bold 22px "Russo One", sans-serif';
            this.ctx.fillText('⚡ КЛЮЁТ! ПОДСЕКАЙ! ⚡', w / 2, 40);
        } else if (this.state === 'success') {
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.fillText('🎉 ПОЙМАЛИ РЫБУ!', w / 2, 40);
        } else if (this.state === 'escaped') {
            this.ctx.fillStyle = '#FF4D6D';
            this.ctx.fillText('🐟 Сорвалась!', w / 2, 40);
        }
    }
}

window.SlavicFishing = SlavicFishing;
