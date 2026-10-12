class SlavicAudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.isUserMuted = false;
        this.musicPlaying = false;
        this.currentTrackIdx = 0;
        this.musicInterval = null;
        this.unlocked = false;

        this.tracks = [
            {
                id: 'gusli',
                name: '«Былинные Гусли»',
                scale: [220, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25], // Pentatonic Folk A/C
                tempo: 450
            },
            {
                id: 'fair',
                name: '«Ярмарочная Сказка»',
                scale: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25], // C Folk Pentatonic
                tempo: 360
            },
            {
                id: 'evening',
                name: '«Вечерний Посад»',
                scale: [196.00, 220.00, 261.63, 293.66, 329.63, 392.00], // G Soft Folk
                tempo: 520
            }
        ];

        this.bindMobileUnlock();
    }

    bindMobileUnlock() {
        const unlock = () => {
            this.unlockAudio();
            if (this.unlocked) {
                ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click'].forEach(evt => {
                    window.removeEventListener(evt, unlock, true);
                    document.removeEventListener(evt, unlock, true);
                });
            }
        };

        ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click'].forEach(evt => {
            window.addEventListener(evt, unlock, { passive: true, capture: true });
            document.addEventListener(evt, unlock, { passive: true, capture: true });
        });
    }

    initContext() {
        if (!this.unlocked) return;
        if (!this.ctx) {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            } catch (e) {}
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume().catch(() => {});
        }
    }

    unlockAudio() {
        this.unlocked = true;
        try {
            if (!this.ctx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    this.ctx = new AudioCtx();
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
            }
            if (this.ctx) {
                const buffer = this.ctx.createBuffer(1, 1, 22050);
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                source.connect(this.ctx.destination);
                source.start(0);
            }
        } catch (e) {}

        if (!this.isUserMuted && !this.musicPlaying) {
            this.startMusic();
        }
    }

    startMusic() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.musicPlaying || this.isMuted) return;
        this.musicPlaying = true;
        this.playMelodyLoop();
    }

    stopMusic() {
        this.musicPlaying = false;
        if (this.musicInterval) {
            clearInterval(this.musicInterval);
            this.musicInterval = null;
        }
    }

    nextTrack() {
        this.currentTrackIdx = (this.currentTrackIdx + 1) % this.tracks.length;
        if (this.musicInterval) clearInterval(this.musicInterval);
        if (this.musicPlaying) this.playMelodyLoop();
        return this.tracks[this.currentTrackIdx];
    }

    playMelodyLoop() {
        if (this.musicInterval) clearInterval(this.musicInterval);
        const track = this.tracks[this.currentTrackIdx];
        let step = 0;

        this.musicInterval = setInterval(() => {
            if (this.isMuted || !this.musicPlaying || !this.ctx) return;
            const melodyPattern = [0, 2, 4, 3, 5, 4, 2, 1, 3, 2, 0, 4];
            const noteIdx = melodyPattern[step % melodyPattern.length];
            const freq = track.scale[noteIdx % track.scale.length];
            
            // Soft warm plucked gusli sound
            this.playGusliPluck(freq, 0.045);
            step++;
        }, track.tempo);
    }

    playGusliPluck(freq, vol = 0.06) {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            gain.gain.setValueAtTime(vol, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.9);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.9);
        } catch (e) {}
    }

    playSwap() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.08);
        } catch (e) {}
    }

    playMatch() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1046.5, this.ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.15);
        } catch (e) {}
    }

    playSpecial() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.25);
        } catch (e) {}
    }

    playWin() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                try {
                    if (this.isMuted || !this.ctx) return;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start();
                    osc.stop(this.ctx.currentTime + 0.2);
                } catch (e) {}
            }, i * 70);
        });
    }

    playUpgrade() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(330, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(660, this.ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.2);
        } catch (e) {}
    }

    playExplosion() {
        if (!this.unlocked) return;
        this.initContext();
        if (this.isMuted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.35);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.35);
        } catch (e) {}
    }

    playBomb() {
        this.playExplosion();
    }

    playSpecial() {
        this.playExplosion();
    }

    mute() {
        this.isMuted = true;
        if (this.ctx && this.ctx.state === 'running') {
            try { this.ctx.suspend(); } catch (e) {}
        }
    }

    unmute() {
        this.isMuted = false;
        if (!this.isUserMuted) {
            if (this.ctx && this.ctx.state === 'suspended') {
                try { this.ctx.resume(); } catch (e) {}
            }
            if (this.unlocked && !this.musicPlaying) {
                this.startMusic();
            }
        }
    }

    toggleSound() {
        return this.toggleUserMute();
    }

    toggleUserMute() {
        this.isUserMuted = !this.isUserMuted;
        if (this.isUserMuted) {
            this.mute();
            this.stopMusic();
        } else {
            const isAdShowing = (window.vkSDK && window.vkSDK.isShowingAd) || false;
            if (!isAdShowing) {
                this.unmute();
                if (this.unlocked) {
                    this.startMusic();
                }
            }
        }
        return !this.isUserMuted;
    }
}

window.SlavicAudioEngine = SlavicAudioEngine;
window.gameAudio = new SlavicAudioEngine();

// Rule 2.2.5 VK Moderation: Immediate sound muting on view hide and visibility change
if (typeof window !== 'undefined') {
    const handleAudioHide = () => {
        if (window.gameAudio) window.gameAudio.mute();
    };

    const handleAudioRestore = () => {
        const isAdShowing = (window.vkSDK && window.vkSDK.isShowingAd) || false;
        if (window.gameAudio && !isAdShowing && !window.gameAudio.isUserMuted) {
            window.gameAudio.unmute();
        }
    };

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) handleAudioHide();
        else handleAudioRestore();
    });

    window.addEventListener('blur', handleAudioHide);
    window.addEventListener('focus', handleAudioRestore);
    window.addEventListener('pagehide', handleAudioHide);
    window.addEventListener('pageshow', handleAudioRestore);

    if (window.vkBridge && typeof window.vkBridge.subscribe === 'function') {
        window.vkBridge.subscribe((e) => {
            if (!e || !e.detail) return;
            if (e.detail.type === 'VKWebAppViewHide') handleAudioHide();
            else if (e.detail.type === 'VKWebAppViewRestore') handleAudioRestore();
        });
    }

    window.addEventListener('game-mute-toggle', (e) => {
        if (window.gameAudio) {
            if (e && e.detail && e.detail.muted) {
                window.gameAudio.mute();
            } else {
                handleAudioRestore();
            }
        }
    });
}

