class NightSiegeEngine {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.timeLeft = 60;
        this.score = 0;
        this.timerInterval = null;
        this.isRunning = false;
        this.m3 = null;

        this.onFinish = options.onFinish || null;
    }

    startSiege(onScoreUpdate, onTimeUpdate) {
        this.timeLeft = 60;
        this.score = 0;
        this.isRunning = true;

        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            if (!this.isRunning) return;
            this.timeLeft--;
            if (onTimeUpdate) onTimeUpdate(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.finishSiege();
            }
        }, 1000);
    }

    finishSiege() {
        this.isRunning = false;
        if (this.timerInterval) clearInterval(this.timerInterval);
        if (window.gameAudio) window.gameAudio.playWin();

        const rewardGold = Math.max(100, Math.floor(this.score * 0.5));
        const rewardWood = Math.max(20, Math.floor(this.score * 0.1));
        const rewardResin = Math.max(5, Math.floor(this.score * 0.05));

        if (this.onFinish) {
            this.onFinish({
                score: this.score,
                gold: rewardGold,
                wood: rewardWood,
                resin: rewardResin
            });
        }
    }

    stop() {
        this.isRunning = false;
        if (this.timerInterval) clearInterval(this.timerInterval);
    }
}

window.NightSiegeEngine = NightSiegeEngine;
