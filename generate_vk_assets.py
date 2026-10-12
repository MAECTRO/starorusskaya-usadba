#!/usr/bin/env python3
"""
Generate strictly compliant graphics assets for VK Mini Apps / VK Games console (dev.vk.com)
Specifications:
- Universal icon: 576x576 px
- Catalog icon: 278x278 px
- Small icon: 150x150 px
- Big snippet (banner / cover): 1120x630 px
- 4 Gameplay screenshots: 1200x600 px
"""

import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(BASE_DIR, 'vk_assets')
os.makedirs(OUT_DIR, exist_ok=True)

ICON_SRC = os.path.join(BASE_DIR, 'assets', 'icon.jpg')
if not os.path.exists(ICON_SRC):
    ICON_SRC = os.path.join(BASE_DIR, 'Icon_512x512.png')

COVER_SRC = os.path.join(BASE_DIR, 'assets', 'cover_1920x1080.jpg')
if not os.path.exists(COVER_SRC):
    COVER_SRC = os.path.join(BASE_DIR, 'assets', 'cover.jpg')

SCREENSHOTS_SRC = [
    (os.path.join(BASE_DIR, '1_Desktop_Screenshots_16x9', 'Screenshot_1_Match3_1920x1080.png'), 'screenshot_1_match3_1200x600.png'),
    (os.path.join(BASE_DIR, '1_Desktop_Screenshots_16x9', 'Screenshot_2_BossBattle_1920x1080.png'), 'screenshot_2_boss_battle_1200x600.png'),
    (os.path.join(BASE_DIR, '1_Desktop_Screenshots_16x9', 'Screenshot_3_ManorVillage_1920x1080.png'), 'screenshot_3_manor_village_1200x600.png'),
    (os.path.join(BASE_DIR, '1_Desktop_Screenshots_16x9', 'Screenshot_4_HeroesSquad_1920x1080.png'), 'screenshot_4_heroes_squad_1200x600.png'),
]

print("=== Generating VK Console Graphic Assets ===")

# 1. Icons
with Image.open(ICON_SRC) as icon:
    icon_rgb = icon.convert('RGB')
    
    # 576x576 Universal
    i576 = icon_rgb.resize((576, 576), Image.Resampling.LANCZOS)
    p576 = os.path.join(OUT_DIR, 'icon_576x576.png')
    i576.save(p576, 'PNG', optimize=True)
    print(f"Generated: {p576} ({i576.size})")

    # 278x278 Catalog
    i278 = icon_rgb.resize((278, 278), Image.Resampling.LANCZOS)
    p278 = os.path.join(OUT_DIR, 'icon_278x278.png')
    i278.save(p278, 'PNG', optimize=True)
    print(f"Generated: {p278} ({i278.size})")

    # 150x150 Small
    i150 = icon_rgb.resize((150, 150), Image.Resampling.LANCZOS)
    p150 = os.path.join(OUT_DIR, 'icon_150x150.png')
    i150.save(p150, 'PNG', optimize=True)
    print(f"Generated: {p150} ({i150.size})")

# 2. Big Snippet (1120x630 px)
with Image.open(COVER_SRC) as cover:
    cover_rgb = cover.convert('RGB')
    # 1920x1080 is exactly 16:9, matching 1120x630
    snippet = cover_rgb.resize((1120, 630), Image.Resampling.LANCZOS)
    psnippet = os.path.join(OUT_DIR, 'snippet_1120x630.png')
    snippet.save(psnippet, 'PNG', optimize=True)
    print(f"Generated: {psnippet} ({snippet.size})")

# 3. 4 Gameplay Screenshots (1200x600 px)
for src_path, out_name in SCREENSHOTS_SRC:
    if os.path.exists(src_path):
        with Image.open(src_path) as shot:
            shot_rgb = shot.convert('RGB')
            w, h = shot_rgb.size
            # Source 1920x1080 -> crop to 2:1 aspect ratio (1920x960) centered
            crop_h = int(w / 2.0)
            top = max(0, (h - crop_h) // 2)
            bottom = top + crop_h
            cropped = shot_rgb.crop((0, top, w, bottom))
            scaled = cropped.resize((1200, 600), Image.Resampling.LANCZOS)
            pout = os.path.join(OUT_DIR, out_name)
            scaled.save(pout, 'PNG', optimize=True)
            print(f"Generated: {pout} ({scaled.size})")
    else:
        print(f"Warning: Screenshot source missing: {src_path}")

print("=== Assets Generation Complete ===")
