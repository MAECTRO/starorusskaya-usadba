const SlavicArt = {
    palette: {
        woodDark: '#2C1810',
        woodMedium: '#5C3A21',
        woodLight: '#8B5A2B',
        roofRed: '#9E2A2B',
        goldBright: '#FFD700',
        goldDark: '#B8860B',
        stoneDark: '#3A3A3A',
        stoneLight: '#787878',
        waterBlue: '#2A9D8F',
        grassGreen: '#386641',
        grassLight: '#6A994E'
    },

    cache: {},
    cachedTileSize: 0,

    prepareTileCache(size) {
        if (this.cachedTileSize === Math.round(size)) return;
        this.cachedTileSize = Math.round(size);
        this.cache = {};

        const types = ['berry', 'grain', 'gem', 'wood', 'fire', 'gold'];
        types.forEach(typeId => {
            const offCanvas = document.createElement('canvas');
            offCanvas.width = this.cachedTileSize;
            offCanvas.height = this.cachedTileSize;
            const octx = offCanvas.getContext('2d');

            const cx = this.cachedTileSize / 2;
            const cy = this.cachedTileSize / 2;
            const radius = this.cachedTileSize * 0.44;

            switch (typeId) {
                case 'berry': this.drawBerryTile(octx, cx, cy, radius, false); break;
                case 'grain': this.drawWheatTile(octx, cx, cy, radius, false); break;
                case 'gem': this.drawSapphireTile(octx, cx, cy, radius, false); break;
                case 'wood': this.drawForestShieldTile(octx, cx, cy, radius, false); break;
                case 'fire': this.drawFireTile(octx, cx, cy, radius, false); break;
                case 'gold': this.drawRoyalCoinTile(octx, cx, cy, radius, false); break;
            }

            this.cache[typeId] = offCanvas;
        });
    },

    drawTile(ctx, typeId, x, y, size, isSelected = false, special = null, bramble = false) {
        if (!this.cache[typeId] || this.cachedTileSize !== Math.round(size)) {
            this.prepareTileCache(size);
        }

        const cx = x + size / 2;
        const cy = y + size / 2;
        const radius = size * 0.44;

        if (isSelected) {
            ctx.save();
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3.5;
            ctx.strokeRect(x + 2, y + 2, size - 4, size - 4);
            ctx.restore();
        }

        const cached = this.cache[typeId];
        if (cached) {
            ctx.drawImage(cached, x, y);
        }

        if (special === 'bomb') this.drawBombRune(ctx, cx, cy, radius);
        else if (special === 'lightning') this.drawLightningRune(ctx, cx, cy, radius);
        else if (special === 'sun') this.drawSunRune(ctx, cx, cy, radius);

        if (bramble) this.drawBrambleVines(ctx, x, y, size);
    },

    drawBerryTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#FF4D6D');
        baseGrad.addColorStop(0.5, '#C9184A');
        baseGrad.addColorStop(1, '#590D22');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy + r * 0.85);
        ctx.bezierCurveTo(cx - r * 1.0, cy + r * 0.3, cx - r * 0.85, cy - r * 0.65, cx, cy - r * 0.5);
        ctx.bezierCurveTo(cx + r * 0.85, cy - r * 0.65, cx + r * 1.0, cy + r * 0.3, cx, cy + r * 0.85);
        ctx.fill();

        ctx.strokeStyle = '#FFB3C1';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.beginPath();
        ctx.ellipse(cx - r * 0.3, cy - r * 0.15, r * 0.2, r * 0.1, -0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFE66D';
        const seedPos = [[-0.2, 0.1], [0.2, 0.1], [0, 0.3], [-0.25, 0.45], [0.25, 0.45]];
        seedPos.forEach(([ox, oy]) => {
            ctx.beginPath();
            ctx.ellipse(cx + ox * r, cy + oy * r, r * 0.05, r * 0.08, 0.2, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.fillStyle = '#38B000';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.45);
        ctx.lineTo(cx - r * 0.45, cy - r * 0.8);
        ctx.lineTo(cx - r * 0.15, cy - r * 0.6);
        ctx.lineTo(cx, cy - r * 0.85);
        ctx.lineTo(cx + r * 0.15, cy - r * 0.6);
        ctx.lineTo(cx + r * 0.45, cy - r * 0.8);
        ctx.closePath();
        ctx.fill();
    },

    drawWheatTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#FFF3B0');
        baseGrad.addColorStop(0.4, '#FFB703');
        baseGrad.addColorStop(1, '#B8860B');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
            const px = cx + Math.cos(a) * r * 0.95;
            const py = cy + Math.sin(a) * r * 0.95;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.strokeStyle = '#D48B00';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy + r * 0.65);
        ctx.quadraticCurveTo(cx - r * 0.1, cy, cx, cy - r * 0.55);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 3; i++) {
            const gy = cy + r * 0.25 - i * r * 0.25;
            ctx.beginPath();
            ctx.ellipse(cx - r * 0.2, gy, r * 0.16, r * 0.09, -0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(cx + r * 0.2, gy, r * 0.16, r * 0.09, 0.4, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    drawSapphireTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.3, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#CAF0F8');
        baseGrad.addColorStop(0.3, '#00B4D8');
        baseGrad.addColorStop(0.8, '#0077B6');
        baseGrad.addColorStop(1, '#03045E');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.95);
        ctx.lineTo(cx + r * 0.85, cy);
        ctx.lineTo(cx, cy + r * 0.95);
        ctx.lineTo(cx - r * 0.85, cy);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#90E0EF';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.95);
        ctx.lineTo(cx, cy + r * 0.95);
        ctx.moveTo(cx - r * 0.85, cy);
        ctx.lineTo(cx + r * 0.85, cy);
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx - r * 0.25, cy - r * 0.25, r * 0.12, 0, Math.PI * 2);
        ctx.fill();
    },

    drawForestShieldTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#B7E4C7');
        baseGrad.addColorStop(0.4, '#40916C');
        baseGrad.addColorStop(1, '#081C15');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx - r * 0.75, cy - r * 0.75);
        ctx.lineTo(cx + r * 0.75, cy - r * 0.75);
        ctx.lineTo(cx + r * 0.75, cy + r * 0.2);
        ctx.quadraticCurveTo(cx + r * 0.4, cy + r * 0.75, cx, cy + r * 0.9);
        ctx.quadraticCurveTo(cx - r * 0.4, cy + r * 0.75, cx - r * 0.75, cy + r * 0.2);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#D8F3DC';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.5);
        ctx.bezierCurveTo(cx + r * 0.4, cy - r * 0.2, cx + r * 0.3, cy + r * 0.3, cx, cy + r * 0.5);
        ctx.bezierCurveTo(cx - r * 0.3, cy + r * 0.3, cx - r * 0.4, cy - r * 0.2, cx, cy - r * 0.5);
        ctx.fill();
    },

    drawFireTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx, cy + r * 0.1, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#FFFFFF');
        baseGrad.addColorStop(0.2, '#FFE66D');
        baseGrad.addColorStop(0.5, '#FF6B35');
        baseGrad.addColorStop(1, '#D00000');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.95);
        ctx.quadraticCurveTo(cx + r * 0.85, cy - r * 0.2, cx + r * 0.55, cy + r * 0.65);
        ctx.quadraticCurveTo(cx, cy + r * 0.95, cx - r * 0.55, cy + r * 0.65);
        ctx.quadraticCurveTo(cx - r * 0.85, cy - r * 0.2, cx, cy - r * 0.95);
        ctx.fill();

        ctx.strokeStyle = '#FFB703';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.45);
        ctx.quadraticCurveTo(cx + r * 0.3, cy, cx + r * 0.18, cy + r * 0.4);
        ctx.quadraticCurveTo(cx, cy + r * 0.55, cx - r * 0.18, cy + r * 0.4);
        ctx.quadraticCurveTo(cx - r * 0.3, cy, cx, cy - r * 0.45);
        ctx.fill();
    },

    drawRoyalCoinTile(ctx, cx, cy, r, isSelected) {
        const baseGrad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r);
        baseGrad.addColorStop(0, '#E0AAFF');
        baseGrad.addColorStop(0.4, '#7B2CBF');
        baseGrad.addColorStop(1, '#240046');

        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.92, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - r * 0.5);
        ctx.lineTo(cx, cy + r * 0.4);
        ctx.moveTo(cx - r * 0.35, cy - r * 0.25);
        ctx.quadraticCurveTo(cx - r * 0.35, cy + r * 0.3, cx, cy + r * 0.4);
        ctx.moveTo(cx + r * 0.35, cy - r * 0.25);
        ctx.quadraticCurveTo(cx + r * 0.35, cy + r * 0.3, cx, cy + r * 0.4);
        ctx.stroke();
    },

    drawBombRune(ctx, cx, cy, radius) {
        ctx.save();
        ctx.fillStyle = 'rgba(230, 57, 70, 0.85)';
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `bold ${radius * 0.65}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('💣', cx, cy);
        ctx.restore();
    },

    drawLightningRune(ctx, cx, cy, radius) {
        ctx.save();
        ctx.fillStyle = 'rgba(0, 180, 216, 0.85)';
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `bold ${radius * 0.65}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⚡', cx, cy);
        ctx.restore();
    },

    drawSunRune(ctx, cx, cy, radius) {
        ctx.save();
        ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = `bold ${radius * 0.7}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('☀️', cx, cy);
        ctx.restore();
    },

    drawBrambleVines(ctx, x, y, size) {
        ctx.save();
        ctx.fillStyle = 'rgba(10, 25, 15, 0.55)';
        ctx.fillRect(x + 2, y + 2, size - 4, size - 4);

        ctx.strokeStyle = '#2D6A4F';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(x + 4, y + 4);
        ctx.quadraticCurveTo(x + size * 0.5, y + size * 0.35, x + size - 4, y + size - 4);
        ctx.moveTo(x + size - 4, y + 4);
        ctx.quadraticCurveTo(x + size * 0.5, y + size * 0.65, x + 4, y + size - 4);
        ctx.stroke();

        ctx.fillStyle = '#D8F3DC';
        const thornCoords = [
            [x + size * 0.3, y + size * 0.25],
            [x + size * 0.7, y + size * 0.75],
            [x + size * 0.7, y + size * 0.25],
            [x + size * 0.3, y + size * 0.75]
        ];
        thornCoords.forEach(([tx, ty]) => {
            ctx.beginPath();
            ctx.arc(tx, ty, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.font = '14px sans-serif';
        ctx.fillText('🔒', x + size - 16, y + 16);
        ctx.restore();
    },

    drawPeasantMan(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir, 1);

        const legSwing = isWalking ? Math.sin(t * 0.01) * 4 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;

        ctx.translate(0, -bodyBob);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 16 + bodyBob, 12, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#D4A373';
        ctx.fillRect(-6 + legSwing, 8, 4, 9);
        ctx.fillRect(2 - legSwing, 8, 4, 9);

        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.moveTo(-9, -4);
        ctx.lineTo(9, -4);
        ctx.lineTo(11, 9);
        ctx.lineTo(-11, 9);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-10, 2, 20, 2.5);

        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -10, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#780000';
        ctx.beginPath();
        ctx.arc(0, -13, 6.5, Math.PI, 0);
        ctx.fill();

        ctx.restore();
    },

    drawPeasantMaiden(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir, 1);

        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;
        const skirtSway = isWalking ? Math.sin(t * 0.01) * 2 : 0;

        ctx.translate(0, -bodyBob);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 16 + bodyBob, 12, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0077B6';
        ctx.beginPath();
        ctx.moveTo(-6, -4);
        ctx.lineTo(6, -4);
        ctx.lineTo(12 + skirtSway, 15);
        ctx.lineTo(-12 + skirtSway, 15);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-2, -4, 4, 19);

        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -10, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.moveTo(-7, -10);
        ctx.lineTo(0, -18);
        ctx.lineTo(7, -10);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFB703';
        ctx.fillRect(4, -8, 3, 16);

        ctx.restore();
    },

    drawIlya(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.05, 1.05);

        const legSwing = isWalking ? Math.sin(t * 0.011) * 5 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.011)) * 2.5 : 0;
        const capeWave = Math.sin(t * 0.008) * 3;

        ctx.translate(0, -bodyBob);

        // 1. Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 18 + bodyBob, 15, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. Flowing Red Cape
        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.moveTo(-9, -6);
        ctx.lineTo(9, -6);
        ctx.lineTo(13 + capeWave, 16);
        ctx.lineTo(-13 - capeWave, 16);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#780000';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 3. Legs & Leather Boots
        ctx.fillStyle = '#1D3557';
        ctx.fillRect(-8 + legSwing, 6, 5, 8);
        ctx.fillRect(3 - legSwing, 6, 5, 8);

        ctx.fillStyle = '#5C3A21';
        ctx.beginPath();
        ctx.roundRect(-9 + legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.roundRect(2 - legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.fill();

        // 4. Steel Chainmail Body & Breastplate
        ctx.fillStyle = '#90A4AE';
        ctx.beginPath();
        ctx.roundRect(-10, -6, 20, 15, [4]);
        ctx.fill();
        ctx.strokeStyle = '#37474F';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Golden Bear Crest Plate
        ctx.fillStyle = '#B8860B';
        ctx.beginPath();
        ctx.roundRect(-6, -3, 12, 8, [3]);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(0, 1, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Golden Belt
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-10, 6, 20, 3);
        ctx.fillStyle = '#B8860B';
        ctx.fillRect(-2.5, 5.5, 5, 4);

        // Bogatyr Sword on Belt
        ctx.save();
        ctx.rotate(-0.35);
        ctx.fillStyle = '#78909C';
        ctx.fillRect(-13, 5, 3, 16);
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-15, 4, 7, 2);
        ctx.beginPath();
        ctx.arc(-11.5, 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 5. Head & Friendly Face
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -12, 6.5, 0, Math.PI * 2);
        ctx.fill();

        // Warm Brown Beard & Moustache
        ctx.fillStyle = '#6D4C41';
        ctx.beginPath();
        ctx.arc(0, -9, 6.8, 0, Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(0, -10, 4, 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Cheerful Eyes & Smile
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.arc(-2, -13, 1, 0, Math.PI * 2);
        ctx.arc(2, -13, 1, 0, Math.PI * 2);
        ctx.fill();

        // 6. Conical Steel Helmet (Шлем-Шишак)
        ctx.fillStyle = '#B0BEC5';
        ctx.beginPath();
        ctx.moveTo(-7.5, -13);
        ctx.quadraticCurveTo(-6, -21, 0, -25);
        ctx.quadraticCurveTo(6, -21, 7.5, -13);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Golden Spire on Top of Helmet
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-1.5, -24);
        ctx.lineTo(0, -28);
        ctx.lineTo(1.5, -24);
        ctx.closePath();
        ctx.fill();

        // Red Pauldron Shoulders
        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.arc(-10, -5, 3.5, 0, Math.PI * 2);
        ctx.arc(10, -5, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawBogatyr(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        this.drawIlya(ctx, x, y, dir, isWalking, t);
    },

    drawDobrynya(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.05, 1.05);

        const legSwing = isWalking ? Math.sin(t * 0.011) * 5 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.011)) * 2.5 : 0;
        const capeWave = Math.sin(t * 0.008) * 3;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 18 + bodyBob, 15, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Royal Blue Cape
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.moveTo(-9, -6);
        ctx.lineTo(9, -6);
        ctx.lineTo(13 + capeWave, 16);
        ctx.lineTo(-13 - capeWave, 16);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Legs & Boots
        ctx.fillStyle = '#457B9D';
        ctx.fillRect(-8 + legSwing, 6, 5, 8);
        ctx.fillRect(3 - legSwing, 6, 5, 8);

        ctx.fillStyle = '#795548';
        ctx.beginPath();
        ctx.roundRect(-9 + legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.roundRect(2 - legSwing, 12, 7, 7, [2, 2, 4, 4]);
        ctx.fill();

        // Silver Scale Armor Body
        ctx.fillStyle = '#CFD8DC';
        ctx.beginPath();
        ctx.roundRect(-10, -6, 20, 15, [4]);
        ctx.fill();
        ctx.strokeStyle = '#90A4AE';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Golden Sun Belt
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-10, 6, 20, 3);

        // Golden Round Sun Shield on arm
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(8, 2, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#E63946';
        ctx.beginPath();
        ctx.arc(8, 2, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Head & Blond Beard
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -12, 6.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E9C46A';
        ctx.beginPath();
        ctx.arc(0, -9, 6.5, 0, Math.PI);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.arc(-2, -13, 1, 0, Math.PI * 2);
        ctx.arc(2, -13, 1, 0, Math.PI * 2);
        ctx.fill();

        // Golden Helmet
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-7.5, -13);
        ctx.quadraticCurveTo(-6, -21, 0, -25);
        ctx.quadraticCurveTo(6, -21, 7.5, -13);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
    },

    drawAlesha(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.0, 1.0);

        const legSwing = isWalking ? Math.sin(t * 0.013) * 5.5 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.013)) * 2.2 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 13, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Forest Green Brigandine Tunic
        ctx.fillStyle = '#2D6A4F';
        ctx.beginPath();
        ctx.moveTo(-8, -5);
        ctx.lineTo(8, -5);
        ctx.lineTo(10, 10);
        ctx.lineTo(-10, 10);
        ctx.closePath();
        ctx.fill();

        // Belt
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-9, 3, 18, 2.5);

        // Legs & Green Boots
        ctx.fillStyle = '#52B788';
        ctx.fillRect(-7 + legSwing, 7, 4, 7);
        ctx.fillRect(2 - legSwing, 7, 4, 7);

        ctx.fillStyle = '#1B4332';
        ctx.beginPath();
        ctx.roundRect(-8 + legSwing, 12, 6, 6, [2]);
        ctx.roundRect(1 - legSwing, 12, 6, 6, [2]);
        ctx.fill();

        // Wooden Bow over Shoulder
        ctx.strokeStyle = '#8D6E63';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(-8, -4, 12, 0.4, 2.8);
        ctx.stroke();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-16, -1);
        ctx.lineTo(-4, -13);
        ctx.stroke();

        // Head & Youthful Face
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 6, 0, Math.PI * 2);
        ctx.fill();

        // Cheerful Smile
        ctx.fillStyle = '#1D3557';
        ctx.beginPath();
        ctx.arc(-2, -12, 1, 0, Math.PI * 2);
        ctx.arc(2, -12, 1, 0, Math.PI * 2);
        ctx.fill();

        // Red Archer Cap with Golden Feather
        ctx.fillStyle = '#C1121F';
        ctx.beginPath();
        ctx.arc(0, -13, 6.5, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(3, -15);
        ctx.lineTo(8, -22);
        ctx.lineTo(5, -14);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawVasilisa(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.0, 1.0);

        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;
        const skirtSway = isWalking ? Math.sin(t * 0.01) * 2.5 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Emerald & Gold Sarafan Dress
        ctx.fillStyle = '#2A9D8F';
        ctx.beginPath();
        ctx.moveTo(-7, -5);
        ctx.lineTo(7, -5);
        ctx.lineTo(13 + skirtSway, 16);
        ctx.lineTo(-13 + skirtSway, 16);
        ctx.closePath();
        ctx.fill();

        // Golden Central Embroidery
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-2, -5, 4, 21);

        // Ruby Collar
        ctx.fillStyle = '#C1121F';
        ctx.fillRect(-7, -5, 14, 3);

        // Head & Beautiful Face
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 5.5, 0, Math.PI * 2);
        ctx.fill();

        // Long Golden Braid
        ctx.fillStyle = '#FFB703';
        ctx.beginPath();
        ctx.roundRect(4, -8, 3.5, 18, [2]);
        ctx.fill();

        // Crown Kokoshnik with Pearls
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-8, -11);
        ctx.lineTo(0, -22);
        ctx.lineTo(8, -11);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#9E2A2B';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Magic Glowing Crystal in hand
        const glow = Math.sin(t * 0.01) * 2;
        ctx.fillStyle = 'rgba(255, 215, 0, 0.7)';
        ctx.beginPath();
        ctx.arc(-8, 2, 4 + glow, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-8, 2, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawVakula(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.05, 1.05);

        const legSwing = isWalking ? Math.sin(t * 0.01) * 4 : 0;
        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.01)) * 2 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Dark Trousers & Heavy Boots
        ctx.fillStyle = '#3E2723';
        ctx.fillRect(-7 + legSwing, 6, 4, 8);
        ctx.fillRect(2 - legSwing, 6, 4, 8);

        ctx.fillStyle = '#212121';
        ctx.beginPath();
        ctx.roundRect(-8 + legSwing, 12, 6, 6, [2]);
        ctx.roundRect(1 - legSwing, 12, 6, 6, [2]);
        ctx.fill();

        // Strong Torso & Leather Blacksmith Apron
        ctx.fillStyle = '#5C3A21';
        ctx.fillRect(-9, -5, 18, 14);

        ctx.fillStyle = '#8D6E63';
        ctx.fillRect(-6, -3, 12, 12);

        // Sledgehammer in Hand
        ctx.fillStyle = '#795548';
        ctx.fillRect(8, -8, 3, 20);
        ctx.fillStyle = '#546E7A';
        ctx.beginPath();
        ctx.roundRect(5, -12, 9, 6, [1]);
        ctx.fill();

        // Head & Dark Curly Beard
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#212121';
        ctx.beginPath();
        ctx.arc(0, -8, 6.5, 0, Math.PI);
        ctx.fill();

        // Red Headband
        ctx.fillStyle = '#C1121F';
        ctx.fillRect(-6.5, -14, 13, 2.5);

        ctx.restore();
    },

    drawRadogor(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.0, 1.0);

        const bodyBob = isWalking ? Math.abs(Math.sin(t * 0.008)) * 1.5 : 0;
        const robeSway = isWalking ? Math.sin(t * 0.008) * 2 : 0;

        ctx.translate(0, -bodyBob);

        // Ground Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 17 + bodyBob, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Long Starry Mage Robe
        ctx.fillStyle = '#03045E';
        ctx.beginPath();
        ctx.moveTo(-7, -6);
        ctx.lineTo(7, -6);
        ctx.lineTo(13 + robeSway, 16);
        ctx.lineTo(-13 + robeSway, 16);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.fillRect(-2, -6, 4, 22);

        // Wooden Staff with Glowing Crystal
        ctx.fillStyle = '#6D4C41';
        ctx.fillRect(8, -16, 2.5, 32);

        const gemPulse = Math.sin(t * 0.008) * 2;
        ctx.fillStyle = 'rgba(255, 183, 3, 0.7)';
        ctx.beginPath();
        ctx.arc(9, -17, 5 + gemPulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(9, -17, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Head & Flowing Snow-White Beard
        ctx.fillStyle = '#E8C5A5';
        ctx.beginPath();
        ctx.arc(0, -11, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ECEFF1';
        ctx.beginPath();
        ctx.moveTo(-5, -9);
        ctx.quadraticCurveTo(0, 4, 5, -9);
        ctx.closePath();
        ctx.fill();

        // Magi Hood
        ctx.fillStyle = '#023E8A';
        ctx.beginPath();
        ctx.moveTo(-7, -10);
        ctx.lineTo(0, -20);
        ctx.lineTo(7, -10);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawHorse(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 1.1, 1.1);

        const legSwing = isWalking ? Math.sin(t * 0.012) * 5 : 0;

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 18, 20, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#5C3A21';
        ctx.fillRect(-14 + legSwing, 4, 4, 14);
        ctx.fillRect(-8 - legSwing, 4, 4, 14);
        ctx.fillRect(8 + legSwing, 4, 4, 14);
        ctx.fillRect(14 - legSwing, 4, 4, 14);

        ctx.fillStyle = '#795548';
        ctx.beginPath();
        ctx.ellipse(0, 2, 18, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(20, -16);
        ctx.lineTo(26, -10);
        ctx.lineTo(16, 6);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#2C1810';
        ctx.fillRect(12, -16, 4, 14);

        ctx.fillRect(-20, -2, 5, 14);

        ctx.restore();
    },

    drawSheep(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir, 1);

        const legSwing = isWalking ? Math.sin(t * 0.01) * 3 : 0;

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 12, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#3E2723';
        ctx.fillRect(-8 + legSwing, 4, 3, 8);
        ctx.fillRect(-3 - legSwing, 4, 3, 8);
        ctx.fillRect(3 + legSwing, 4, 3, 8);
        ctx.fillRect(8 - legSwing, 4, 3, 8);

        ctx.fillStyle = '#F5EBE0';
        ctx.beginPath();
        ctx.arc(-6, -2, 8, 0, Math.PI * 2);
        ctx.arc(0, -3, 9, 0, Math.PI * 2);
        ctx.arc(6, -2, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#3E2723';
        ctx.beginPath();
        ctx.arc(11, -4, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawDog(ctx, x, y, dir = 1, isWalking = true, t = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(dir * 0.9, 0.9);

        const legSwing = isWalking ? Math.sin(t * 0.015) * 4 : 0;
        const tailWag = Math.sin(t * 0.02) * 6;

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 12, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#D4A373';
        ctx.fillRect(-8 + legSwing, 4, 3, 8);
        ctx.fillRect(-3 - legSwing, 4, 3, 8);
        ctx.fillRect(4 + legSwing, 4, 3, 8);
        ctx.fillRect(9 - legSwing, 4, 3, 8);

        ctx.fillStyle = '#E76F51';
        ctx.beginPath();
        ctx.ellipse(0, 0, 12, 7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(10, -5, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#264653';
        ctx.beginPath();
        ctx.arc(14, -4, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#E76F51';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-11, -2);
        ctx.lineTo(-17, -10 + tailWag);
        ctx.stroke();

        ctx.restore();
    },

    drawCatBayun(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 10, 12, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#F4A261';
        ctx.beginPath();
        ctx.ellipse(0, 0, 11, 8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(9, -6, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E76F51';
        ctx.beginPath();
        ctx.moveTo(6, -11); ctx.lineTo(9, -15); ctx.lineTo(11, -11);
        ctx.moveTo(11, -11); ctx.lineTo(13, -15); ctx.lineTo(15, -11);
        ctx.fill();

        const tailAngle = Math.sin(t * 0.005) * 0.3;
        ctx.strokeStyle = '#F4A261';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.quadraticCurveTo(-16, -8 + tailAngle * 8, -14, -14);
        ctx.stroke();

        ctx.restore();
    },

    drawBonfire(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = '#4A2A0C';
        ctx.fillRect(-14, 4, 28, 6);
        ctx.fillRect(-10, 8, 20, 5);

        ctx.fillStyle = '#FF4D6D';
        ctx.beginPath();
        ctx.arc(0, 4, 8, 0, Math.PI * 2);
        ctx.fill();

        const flicker = Math.sin(t * 0.015) * 4;
        ctx.fillStyle = '#FB8500';
        ctx.beginPath();
        ctx.moveTo(-10, 4);
        ctx.quadraticCurveTo(-4, -16 + flicker, 0, -26 + flicker);
        ctx.quadraticCurveTo(4, -16 - flicker, 10, 4);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(-5, 4);
        ctx.quadraticCurveTo(-2, -8 + flicker, 0, -16 + flicker);
        ctx.quadraticCurveTo(2, -8 - flicker, 5, 4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawJumpingPike(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        const jumpY = Math.sin(t * 0.004) * 12;
        ctx.translate(0, jumpY);

        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 12 - jumpY, 14, 4, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#52B788';
        ctx.beginPath();
        ctx.ellipse(0, 0, 14, 5, -0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#E76F51';
        ctx.beginPath();
        ctx.moveTo(-12, 0); ctx.lineTo(-18, -4); ctx.lineTo(-18, 4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    },

    drawHeroPortrait(ctx, heroId, size = 64) {
        ctx.save();
        const cx = size / 2;
        const cy = size / 2;

        const bgGrad = ctx.createRadialGradient(cx, cy, size * 0.1, cx, cy, size * 0.48);
        bgGrad.addColorStop(0, '#5C3A21');
        bgGrad.addColorStop(1, '#2C1810');
        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.46, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        switch (heroId) {
            case 'ilya':
                // Red Cloak Shoulders
                ctx.fillStyle = '#C1121F';
                ctx.beginPath();
                ctx.arc(cx - size * 0.22, cy + 2, size * 0.14, 0, Math.PI * 2);
                ctx.arc(cx + size * 0.22, cy + 2, size * 0.14, 0, Math.PI * 2);
                ctx.fill();

                // Steel Chainmail & Bear Crest
                ctx.fillStyle = '#90A4AE';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.26, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(cx, cy + 6, size * 0.08, 0, Math.PI * 2);
                ctx.fill();

                // Friendly Face & Beard
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 2, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#6D4C41';
                ctx.beginPath();
                ctx.arc(cx, cy + 3, size * 0.17, 0, Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(cx, cy - 1, size * 0.1, size * 0.04, 0, 0, Math.PI * 2);
                ctx.fill();

                // Conical Steel Helmet with Golden Spire
                ctx.fillStyle = '#B0BEC5';
                ctx.beginPath();
                ctx.moveTo(cx - size * 0.18, cy - 6);
                ctx.quadraticCurveTo(cx - size * 0.12, cy - size * 0.32, cx, cy - size * 0.38);
                ctx.quadraticCurveTo(cx + size * 0.12, cy - size * 0.32, cx + size * 0.18, cy - 6);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.moveTo(cx - 2, cy - size * 0.38);
                ctx.lineTo(cx, cy - size * 0.44);
                ctx.lineTo(cx + 2, cy - size * 0.38);
                ctx.closePath();
                ctx.fill();
                break;

            case 'dobrynya':
                ctx.fillStyle = '#1D3557';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.25, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.moveTo(cx - size * 0.18, cy - 6);
                ctx.lineTo(cx, cy - size * 0.36);
                ctx.lineTo(cx + size * 0.18, cy - 6);
                ctx.closePath();
                ctx.fill();
                break;

            case 'alesha':
                ctx.fillStyle = '#2D6A4F';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.25, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#C1121F';
                ctx.beginPath();
                ctx.arc(cx, cy - 8, size * 0.18, Math.PI, 0);
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(cx + size * 0.12, cy - 12);
                ctx.lineTo(cx + size * 0.24, cy - size * 0.35);
                ctx.stroke();
                break;

            case 'radogor':
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#ECEFF1';
                ctx.beginPath();
                ctx.arc(cx, cy + 6, size * 0.22, 0, Math.PI);
                ctx.fill();
                ctx.fillStyle = '#457B9D';
                ctx.beginPath();
                ctx.arc(cx, cy - 8, size * 0.2, Math.PI, 0);
                ctx.fill();
                break;

            case 'vasilisa':
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 2, size * 0.16, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#C1121F';
                ctx.beginPath();
                ctx.moveTo(cx - size * 0.2, cy - 4);
                ctx.lineTo(cx, cy - size * 0.38);
                ctx.lineTo(cx + size * 0.2, cy - 4);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#FFD700';
                ctx.stroke();
                break;

            case 'vakula':
                ctx.fillStyle = '#4A2810';
                ctx.beginPath();
                ctx.arc(cx, cy + 4, size * 0.25, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#E8C5A5';
                ctx.beginPath();
                ctx.arc(cx, cy - 4, size * 0.18, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#212121';
                ctx.beginPath();
                ctx.arc(cx, cy + 3, size * 0.16, 0, Math.PI);
                ctx.fill();
                break;
        }

        ctx.restore();
    },

    drawBuilding(ctx, bldgId, cx, cy, width, height, level = 0, animTime = 0, season = 'autumn') {
        ctx.save();
        ctx.translate(cx, cy);

        this.drawBuildingBase(ctx, width, height, level);

        switch (bldgId) {
            case 'terem': this.drawTerem(ctx, width, height, level, animTime); break;
            case 'mill': this.drawMill(ctx, width, height, level, animTime); break;
            case 'watermill': this.drawWaterMill(ctx, width, height, level, animTime); break;
            case 'forge': this.drawForge(ctx, width, height, level, animTime); break;
            case 'apiary': this.drawApiary(ctx, width, height, level, animTime); break;
            case 'granary': this.drawGranary(ctx, width, height, level, animTime); break;
            case 'banya': this.drawBanya(ctx, width, height, level, animTime); break;
            case 'stables': this.drawStables(ctx, width, height, level, animTime); break;
            case 'chapel': this.drawChapel(ctx, width, height, level, animTime); break;
            case 'pier': this.drawPier(ctx, width, height, level, animTime); break;
            case 'watchtower': this.drawWatchtower(ctx, width, height, level, animTime); break;
            case 'garden': this.drawGarden(ctx, width, height, level, animTime); break;
            case 'sawmill': this.drawSawmill(ctx, width, height, level, animTime); break;
            case 'fisherman': this.drawFisherman(ctx, width, height, level, animTime); break;
            default: this.drawTerem(ctx, width, height, level, animTime);
        }

        ctx.restore();
    },

    drawBuildingBase(ctx, w, h, level) {
        ctx.fillStyle = level > 0 ? 'rgba(212, 175, 55, 0.25)' : 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(0, h * 0.35, w * 0.5, h * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();
    },

    drawTerem(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.7;
        const bh = h * 0.55;

        ctx.fillStyle = isRuined ? '#3E2723' : '#795548';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.5);

        ctx.fillStyle = isRuined ? '#1A0C05' : '#FFD166';
        ctx.fillRect(-bw * 0.28, -bh * 0.1, bw * 0.2, bh * 0.25);
        ctx.fillRect(bw * 0.08, -bh * 0.1, bw * 0.2, bh * 0.25);

        const tw = bw * 0.65;
        ctx.fillStyle = isRuined ? '#4E342E' : '#8D6E63';
        ctx.fillRect(-tw / 2, -bh * 0.6, tw, bh * 0.45);

        ctx.fillStyle = isRuined ? '#37474F' : '#9E2A2B';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.95);
        ctx.lineTo(-tw * 0.65, -bh * 0.6);
        ctx.lineTo(tw * 0.65, -bh * 0.6);
        ctx.closePath();
        ctx.fill();

        if (level >= 1) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(0, -bh * 1.02, bw * 0.09, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    drawMill(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.55;

        ctx.fillStyle = isRuined ? '#3E2723' : '#6D4C41';
        ctx.beginPath();
        ctx.moveTo(-bw * 0.35, -bh * 0.4);
        ctx.lineTo(bw * 0.35, -bh * 0.4);
        ctx.lineTo(bw * 0.45, bh * 0.3);
        ctx.lineTo(-bw * 0.45, bh * 0.3);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = isRuined ? '#263238' : '#2A9D8F';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.75);
        ctx.lineTo(-bw * 0.45, -bh * 0.4);
        ctx.lineTo(bw * 0.45, -bh * 0.4);
        ctx.closePath();
        ctx.fill();

        const bladeAngle = isRuined ? 0.3 : (t * 0.0015);
        const bladeLen = w * 0.44;

        ctx.save();
        ctx.translate(0, -bh * 0.35);
        ctx.rotate(bladeAngle);

        for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.strokeStyle = '#4E342E';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, bladeLen);
            ctx.stroke();

            ctx.fillStyle = isRuined ? 'rgba(120, 100, 80, 0.4)' : '#F5EBE0';
            ctx.fillRect(2, bladeLen * 0.25, bw * 0.16, bladeLen * 0.7);
        }
        ctx.restore();
    },

    drawWaterMill(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.5;

        ctx.fillStyle = isRuined ? '#3E2723' : '#795548';
        ctx.fillRect(-bw * 0.3, -bh * 0.3, bw * 0.7, bh * 0.55);

        ctx.fillStyle = '#9E2A2B';
        ctx.beginPath();
        ctx.moveTo(bw * 0.05, -bh * 0.65);
        ctx.lineTo(-bw * 0.35, -bh * 0.3);
        ctx.lineTo(bw * 0.45, -bh * 0.3);
        ctx.closePath();
        ctx.fill();

        const wheelAngle = isRuined ? 0.2 : (t * 0.002);
        ctx.save();
        ctx.translate(-bw * 0.32, bh * 0.1);
        ctx.rotate(wheelAngle);

        ctx.strokeStyle = '#4E342E';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(0, 0, bw * 0.3, 0, Math.PI * 2);
        ctx.stroke();

        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(a) * bw * 0.3, Math.sin(a) * bw * 0.3);
            ctx.stroke();
        }
        ctx.restore();
    },

    drawForge(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.65;
        const bh = h * 0.5;

        ctx.fillStyle = isRuined ? '#37474F' : '#546E7A';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = '#263238';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = isRuined ? '#212121' : '#FB8500';
        ctx.beginPath();
        ctx.arc(0, bh * 0.05, bw * 0.16, 0, Math.PI * 2);
        ctx.fill();
    },

    drawApiary(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.45;

        const hiveX = [-bw * 0.28, 0, bw * 0.28];
        hiveX.forEach((hx, idx) => {
            ctx.fillStyle = isRuined ? '#4E342E' : '#A06E3B';
            ctx.fillRect(hx - bw * 0.12, -bh * 0.2 + (idx % 2) * 6, bw * 0.24, bh * 0.45);
        });
    },

    drawGranary(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.65;
        const bh = h * 0.5;

        ctx.fillStyle = isRuined ? '#3E2723' : '#8D6E63';
        ctx.fillRect(-bw * 0.45, -bh * 0.35, bw * 0.9, bh * 0.45);

        ctx.fillStyle = isRuined ? '#263238' : '#C1121F';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.7);
        ctx.lineTo(-bw * 0.55, -bh * 0.35);
        ctx.lineTo(bw * 0.55, -bh * 0.35);
        ctx.closePath();
        ctx.fill();
    },

    drawBanya(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.6;
        const bh = h * 0.45;

        ctx.fillStyle = isRuined ? '#3E2723' : '#8D6E63';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = isRuined ? '#263238' : '#5C3A21';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawStables(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.7;
        const bh = h * 0.45;

        ctx.fillStyle = isRuined ? '#3E2723' : '#6D4C41';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = isRuined ? '#263238' : '#795548';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawChapel(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.55;
        const bh = h * 0.6;

        ctx.fillStyle = isRuined ? '#3E2723' : '#A06E3B';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.5);

        ctx.fillStyle = isRuined ? '#263238' : '#2A9D8F';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.95);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();

        if (!isRuined) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(0, -bh * 1.0, bw * 0.15, 0, Math.PI * 2);
            ctx.fill();
        }
    },

    drawPier(ctx, w, h, level, t) {
        const bw = w * 0.7;
        const bh = h * 0.4;

        ctx.fillStyle = '#3E2723';
        ctx.fillRect(-bw * 0.4, bh * 0.1, bw * 0.8, bh * 0.2);

        if (level > 0) {
            ctx.fillStyle = '#795548';
            ctx.beginPath();
            ctx.moveTo(-bw * 0.35, bh * 0.2);
            ctx.lineTo(bw * 0.35, bh * 0.2);
            ctx.lineTo(bw * 0.25, bh * 0.4);
            ctx.lineTo(-bw * 0.25, bh * 0.4);
            ctx.closePath();
            ctx.fill();
        }
    },

    drawWatchtower(ctx, w, h, level, t) {
        const isRuined = level === 0;
        const bw = w * 0.5;
        const bh = h * 0.7;

        ctx.fillStyle = isRuined ? '#3E2723' : '#5C3A21';
        ctx.fillRect(-bw * 0.35, -bh * 0.5, bw * 0.7, bh * 0.8);

        ctx.fillStyle = isRuined ? '#1A0C05' : '#9E2A2B';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.95);
        ctx.lineTo(-bw * 0.55, -bh * 0.65);
        ctx.lineTo(bw * 0.55, -bh * 0.65);
        ctx.closePath();
        ctx.fill();
    },

    drawGarden(ctx, w, h, level, t) {
        const bw = w * 0.7;
        const bh = h * 0.45;

        ctx.fillStyle = '#4A2A0C';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.5);

        ctx.fillStyle = '#FB8500';
        ctx.beginPath();
        ctx.arc(-bw * 0.25, bh * 0.1, 10, 0, Math.PI * 2);
        ctx.arc(bw * 0.15, bh * 0.05, 12, 0, Math.PI * 2);
        ctx.fill();
    },

    drawSawmill(ctx, w, h, level, t) {
        const bw = w * 0.65;
        const bh = h * 0.5;

        ctx.fillStyle = '#5C3A21';
        ctx.fillRect(-bw / 2, -bh * 0.2, bw, bh * 0.45);

        ctx.fillStyle = '#795548';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.55);
        ctx.lineTo(-bw * 0.55, -bh * 0.2);
        ctx.lineTo(bw * 0.55, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawFisherman(ctx, w, h, level, t) {
        const bw = w * 0.6;
        const bh = h * 0.45;

        ctx.fillStyle = '#6D4C41';
        ctx.fillRect(-bw * 0.3, -bh * 0.2, bw * 0.6, bh * 0.4);

        ctx.fillStyle = '#263238';
        ctx.beginPath();
        ctx.moveTo(0, -bh * 0.5);
        ctx.lineTo(-bw * 0.35, -bh * 0.2);
        ctx.lineTo(bw * 0.35, -bh * 0.2);
        ctx.closePath();
        ctx.fill();
    },

    drawBirchTree(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        // Ground shadow
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.35, size * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();

        // White Birch Trunk with black bark stripes
        ctx.strokeStyle = '#F8F9FA';
        ctx.lineWidth = size * 0.12;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(size * 0.05, -size * 0.3, 0, -size * 0.65);
        ctx.stroke();

        ctx.strokeStyle = '#212529';
        ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
            const by = -size * 0.15 - i * size * 0.12;
            ctx.beginPath();
            ctx.moveTo(-size * 0.05, by);
            ctx.lineTo(size * 0.05, by - 2);
            ctx.stroke();
        }

        // Lush Leaf Crown
        let foliageCol1 = '#52B788', foliageCol2 = '#40916C';
        if (season === 'autumn') { foliageCol1 = '#F4A261'; foliageCol2 = '#E76F51'; }
        else if (season === 'winter') { foliageCol1 = '#ECEFF1'; foliageCol2 = '#CFD8DC'; }
        else if (season === 'spring') { foliageCol1 = '#74C69D'; foliageCol2 = '#52B788'; }

        ctx.fillStyle = foliageCol2;
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.72, size * 0.38, size * 0.44, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = foliageCol1;
        ctx.beginPath();
        ctx.ellipse(-size * 0.08, -size * 0.76, size * 0.32, size * 0.36, -0.1, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    },

    drawPineTree(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.42, size * 0.14, 0, 0, Math.PI * 2);
        ctx.fill();

        // Brown trunk
        ctx.fillStyle = '#4A2810';
        ctx.fillRect(-size * 0.08, -size * 0.3, size * 0.16, size * 0.3);

        // 4 Tier Spreading Fir Needles
        let c1 = '#1B4332', c2 = '#2D6A4F';
        if (season === 'winter') { c1 = '#2D6A4F'; c2 = '#B7E4C7'; }
        else if (season === 'autumn') { c1 = '#1B4332'; c2 = '#386641'; }

        for (let i = 0; i < 4; i++) {
            const py = -size * 0.25 - i * size * 0.2;
            const pw = size * (0.5 - i * 0.09);
            const ph = size * 0.32;

            ctx.fillStyle = c1;
            ctx.beginPath();
            ctx.moveTo(0, py - ph);
            ctx.lineTo(-pw, py);
            ctx.lineTo(pw, py);
            ctx.closePath();
            ctx.fill();

            // Layer highlight
            ctx.fillStyle = c2;
            ctx.beginPath();
            ctx.moveTo(0, py - ph);
            ctx.lineTo(0, py);
            ctx.lineTo(pw, py);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    },

    drawOakTree(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        // Large Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.55, size * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();

        // Massive Ancient Gnarled Oak Trunk
        ctx.fillStyle = '#3E2723';
        ctx.beginPath();
        ctx.moveTo(-size * 0.15, 0);
        ctx.lineTo(-size * 0.08, -size * 0.45);
        ctx.lineTo(size * 0.08, -size * 0.45);
        ctx.lineTo(size * 0.15, 0);
        ctx.closePath();
        ctx.fill();

        // Spreading Oak Branches & Foliage Clouds
        let col = '#2D6A4F';
        if (season === 'autumn') col = '#D97706';
        else if (season === 'winter') col = '#94A3B8';

        ctx.fillStyle = col;
        const clouds = [
            [-size * 0.25, -size * 0.6, size * 0.28],
            [size * 0.25, -size * 0.6, size * 0.28],
            [0, -size * 0.78, size * 0.35],
            [-size * 0.15, -size * 0.9, size * 0.24],
            [size * 0.15, -size * 0.9, size * 0.24]
        ];
        clouds.forEach(([cx, cy, cr]) => {
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.restore();
    },

    drawBush(ctx, x, y, size, season) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = 'rgba(0,0,0,0.18)';
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.5, size * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();

        let bcol = '#40916C';
        if (season === 'autumn') bcol = '#E76F51';
        else if (season === 'winter') bcol = '#CFD8DC';

        ctx.fillStyle = bcol;
        ctx.beginPath();
        ctx.arc(-size * 0.22, -size * 0.25, size * 0.26, 0, Math.PI * 2);
        ctx.arc(size * 0.22, -size * 0.25, size * 0.26, 0, Math.PI * 2);
        ctx.arc(0, -size * 0.38, size * 0.32, 0, Math.PI * 2);
        ctx.fill();

        // Red wild berries on bush
        if (season !== 'winter') {
            ctx.fillStyle = '#E63946';
            const berries = [[-size * 0.15, -size * 0.3], [size * 0.18, -size * 0.28], [0, -size * 0.45]];
            berries.forEach(([bx, by]) => {
                ctx.beginPath();
                ctx.arc(bx, by, 3, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        ctx.restore();
    },

    drawLogPile(ctx, x, y, size = 30) {
        ctx.save();
        ctx.translate(x, y);

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, size * 0.2, size * 0.7, size * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();

        const logPos = [
            [-size * 0.35, 0], [0, 0], [size * 0.35, 0],
            [-size * 0.18, -size * 0.32], [size * 0.18, -size * 0.32],
            [0, -size * 0.62]
        ];

        logPos.forEach(([lx, ly]) => {
            // Wood log end
            ctx.fillStyle = '#D4A373';
            ctx.beginPath();
            ctx.arc(lx, ly, size * 0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#5C3A21';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Tree annual ring
            ctx.beginPath();
            ctx.arc(lx, ly, size * 0.1, 0, Math.PI * 2);
            ctx.stroke();
        });

        ctx.restore();
    },

    drawMushroom(ctx, x, y, size = 12) {
        ctx.save();
        ctx.translate(x, y);

        // White stem
        ctx.fillStyle = '#F8F9FA';
        ctx.fillRect(-size * 0.2, -size * 0.6, size * 0.4, size * 0.6);

        // Cap (Porcini brown or Amanita red)
        ctx.fillStyle = (x % 2 === 0) ? '#8D6E63' : '#E63946';
        ctx.beginPath();
        ctx.arc(0, -size * 0.6, size * 0.55, Math.PI, 0);
        ctx.fill();

        if (x % 2 !== 0) {
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(-size * 0.2, -size * 0.8, 1.5, 0, Math.PI * 2);
            ctx.arc(size * 0.18, -size * 0.85, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    },

    drawReeds(ctx, x, y, t = 0) {
        ctx.save();
        ctx.translate(x, y);

        const sway = Math.sin(t * 0.003 + x) * 4;

        ctx.strokeStyle = '#588157';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';

        // 3 stalks
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 5, 0);
            ctx.quadraticCurveTo(i * 3 + sway, -14, i * 4 + sway * 1.5, -28);
            ctx.stroke();

            // Cattail brown head
            ctx.fillStyle = '#3E2723';
            ctx.beginPath();
            ctx.roundRect(i * 4 + sway * 1.5 - 2, -26, 4, 10, [2]);
            ctx.fill();
        }

        ctx.restore();
    }
};

window.SlavicArt = SlavicArt;
