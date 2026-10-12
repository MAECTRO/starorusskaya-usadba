class VelesWheel {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onReward = options.onReward || null;

        this.segments = [
            { label: '500 🪙', type: 'gold', val: 500, color: '#FFD700', textCol: '#2C1810' },
            { label: '50 🪵', type: 'wood', val: 50, color: '#8D6E63', textCol: '#FFFFFF' },
            { label: '⚡ +5 Энергии', type: 'energy', val: 5, color: '#00B4D8', textCol: '#FFFFFF' },
            { label: '25 💧 Смолы', type: 'resin', val: 25, color: '#7209B7', textCol: '#FFFFFF' },
            { label: '🔨 Молот', type: 'hammer', val: 1, color: '#E63946', textCol: '#FFFFFF' },
            { label: '1000 🪙 Джекпот', type: 'gold', val: 1000, color: '#FFAA00', textCol: '#2C1810' },
            { label: '🔀 Мельница', type: 'shuffle', val: 1, color: '#2A9D8F', textCol: '#FFFFFF' },
            { label: '100 🪵 Брус', type: 'wood', val: 100, color: '#5C3A21', textCol: '#FFFFFF' }
        ];

        this.currentAngle = 0;
        this.isSpinning = false;
        this.render();
    }

    render() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        if (!w || !h) return;

        this.ctx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h / 2;
        const radius = Math.min(w, h) * 0.44;

        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(this.currentAngle);

        const segAngle = (Math.PI * 2) / this.segments.length;

        // Draw Segments
        this.segments.forEach((seg, i) => {
            const startA = i * segAngle;
            const endA = startA + segAngle;

            this.ctx.fillStyle = seg.color;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.arc(0, 0, radius, startA, endA);
            this.ctx.closePath();
            this.ctx.fill();

            // Segment Border
            this.ctx.strokeStyle = '#D4AF37';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Text Label
            this.ctx.save();
            this.ctx.rotate(startA + segAngle / 2);
            this.ctx.textAlign = 'right';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = seg.textCol;
            this.ctx.font = 'bold 13px "Russo One", sans-serif';
            this.ctx.fillText(seg.label, radius * 0.88, 0);
            this.ctx.restore();
        });

        // Golden Outer Rim
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
        this.ctx.stroke();

        this.ctx.restore();

        // Center Cap
        this.ctx.fillStyle = '#8B0000';
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.font = '16px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('☀️', cx, cy);

        // Top Pointer
        this.ctx.fillStyle = '#FFD700';
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - radius - 8);
        this.ctx.lineTo(cx - 12, cy - radius + 16);
        this.ctx.lineTo(cx + 12, cy - radius + 16);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    spin() {
        if (this.isSpinning) return;
        this.isSpinning = true;

        const winningIdx = Math.floor(Math.random() * this.segments.length);
        const segAngle = (Math.PI * 2) / this.segments.length;
        const targetRot = (Math.PI * 2 * 6) + ((Math.PI * 1.5) - (winningIdx * segAngle + segAngle / 2));
        
        let startAngle = this.currentAngle;
        let delta = targetRot - (startAngle % (Math.PI * 2));
        let duration = 4000;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1.0);
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            this.currentAngle = startAngle + delta * easeOut;
            this.render();

            if (progress < 1.0) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                window.gameAudio.playWin();
                const prize = this.segments[winningIdx];
                if (this.onReward) this.onReward(prize);
            }
        };

        requestAnimationFrame(animate);
    }
}

window.VelesWheel = VelesWheel;
