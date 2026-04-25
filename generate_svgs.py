#!/usr/bin/env python3
"""Generate SVG icon files for the spelling bee app."""

import os

OUT = "/Users/glenkelley/code/spellingbee/public/images"

def write(name, body):
    content = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n{body}\n</svg>\n'
    path = os.path.join(OUT, f"{name}.svg")
    with open(path, "w") as f:
        f.write(content)
    print(f"  wrote {name}.svg")

svgs = {}

# missing – grey rounded rect + question mark path
svgs["missing"] = """\
  <rect x="10" y="10" width="80" height="80" rx="12" ry="12" fill="#cccccc"/>
  <circle cx="50" cy="70" r="4" fill="#555"/>
  <path d="M38 38 Q38 28 50 28 Q62 28 62 38 Q62 46 50 52 L50 60" fill="none" stroke="#555" stroke-width="6" stroke-linecap="round"/>"""

# antler
svgs["antler"] = """\
  <path d="M50 90 L50 50 M50 50 L30 25 M30 25 L18 10 M30 25 L22 38 M50 50 L70 25 M70 25 L82 10 M70 25 L78 38" fill="none" stroke="#6B3A00" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>"""

# bang – gold 5-pointed star
svgs["bang"] = """\
  <polygon points="50,8 61,35 90,35 67,54 76,82 50,63 24,82 33,54 10,35 39,35" fill="#FFD700" stroke="#FF8C00" stroke-width="2"/>"""

# barn
svgs["barn"] = """\
  <rect x="18" y="45" width="64" height="42" fill="#CC2200"/>
  <polygon points="50,12 82,45 18,45" fill="#CC2200"/>
  <rect x="38" y="62" width="24" height="25" fill="#6B3A00"/>"""

# basket
svgs["basket"] = """\
  <ellipse cx="50" cy="65" rx="34" ry="22" fill="none" stroke="#C8A96E" stroke-width="5"/>
  <rect x="16" y="56" width="68" height="8" fill="#C8A96E" opacity="0.6"/>
  <path d="M22 65 Q50 30 78 65" fill="none" stroke="#C8A96E" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="50" cy="65" rx="34" ry="22" fill="#E8C98E" opacity="0.3"/>"""

# black
svgs["black"] = """\
  <circle cx="50" cy="50" r="40" fill="#111111"/>"""

# broad
svgs["broad"] = """\
  <rect x="10" y="42" width="80" height="16" fill="#4A90D9"/>
  <polygon points="10,50 22,38 22,62" fill="#1A5A99"/>
  <polygon points="90,50 78,38 78,62" fill="#1A5A99"/>"""

# cabin
svgs["cabin"] = """\
  <rect x="18" y="48" width="64" height="40" fill="#8B5E3C"/>
  <polygon points="50,14 82,48 18,48" fill="#5C3A1E"/>
  <rect x="26" y="56" width="14" height="14" fill="#AED6F1"/>
  <rect x="60" y="56" width="14" height="14" fill="#AED6F1"/>
  <rect x="40" y="68" width="20" height="20" fill="#4A2800"/>"""

# chess – 4×4 checkerboard
svgs["chess"] = """\
  <rect x="15" y="15" width="70" height="70" fill="#F0D9B5"/>
  <rect x="15" y="15" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="50" y="15" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="32.5" y="32.5" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="67.5" y="32.5" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="15" y="50" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="50" y="50" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="32.5" y="67.5" width="17.5" height="17.5" fill="#B58863"/>
  <rect x="67.5" y="67.5" width="17.5" height="17.5" fill="#B58863"/>"""

# chin
svgs["chin"] = """\
  <circle cx="50" cy="42" r="28" fill="#FDBCB4"/>
  <ellipse cx="50" cy="68" rx="18" ry="12" fill="#FDBCB4"/>
  <circle cx="40" cy="38" r="3" fill="#333"/>
  <circle cx="60" cy="38" r="3" fill="#333"/>"""

# creek
svgs["creek"] = """\
  <rect x="0" y="0" width="100" height="100" fill="#5A8A3C"/>
  <path d="M5 60 Q20 40 35 55 Q50 70 65 50 Q80 30 95 50" fill="none" stroke="#4A90D9" stroke-width="12" stroke-linecap="round"/>"""

# damper
svgs["damper"] = """\
  <circle cx="50" cy="45" r="35" fill="#C8860A"/>
  <path d="M50 15 L50 75 M20 45 L80 45" stroke="#8B5E00" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="32" cy="82" rx="7" ry="4" fill="#FF6600" opacity="0.8"/>
  <ellipse cx="50" cy="86" rx="7" ry="4" fill="#FF4400" opacity="0.8"/>
  <ellipse cx="68" cy="82" rx="7" ry="4" fill="#FF6600" opacity="0.8"/>"""

# dance
svgs["dance"] = """\
  <circle cx="50" cy="18" r="8" fill="#333"/>
  <line x1="50" y1="26" x2="50" y2="55" stroke="#333" stroke-width="4"/>
  <line x1="50" y1="35" x2="30" y2="22" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <line x1="50" y1="35" x2="68" y2="48" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <line x1="50" y1="55" x2="32" y2="75" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <line x1="50" y1="55" x2="65" y2="78" stroke="#333" stroke-width="4" stroke-linecap="round"/>"""

# data – 3 ascending bars
svgs["data"] = """\
  <rect x="15" y="60" width="18" height="25" fill="#4A90D9"/>
  <rect x="41" y="40" width="18" height="45" fill="#2A70B9"/>
  <rect x="67" y="20" width="18" height="65" fill="#1A50A0"/>
  <line x1="10" y1="85" x2="90" y2="85" stroke="#333" stroke-width="2"/>"""

# dawn
svgs["dawn"] = """\
  <line x1="10" y1="65" x2="90" y2="65" stroke="#888" stroke-width="3"/>
  <path d="M20 65 A30 30 0 0 1 80 65" fill="#FF8C00" opacity="0.9"/>
  <line x1="50" y1="30" x2="50" y2="15" stroke="#FF8C00" stroke-width="3"/>
  <line x1="28" y1="38" x2="18" y2="28" stroke="#FF8C00" stroke-width="3"/>
  <line x1="72" y1="38" x2="82" y2="28" stroke="#FF8C00" stroke-width="3"/>
  <line x1="20" y1="55" x2="8" y2="52" stroke="#FF8C00" stroke-width="3"/>
  <line x1="80" y1="55" x2="92" y2="52" stroke="#FF8C00" stroke-width="3"/>"""

# dine
svgs["dine"] = """\
  <circle cx="50" cy="52" r="32" fill="none" stroke="#888" stroke-width="4"/>
  <circle cx="50" cy="52" r="20" fill="none" stroke="#ccc" stroke-width="2"/>
  <line x1="22" y1="20" x2="22" y2="80" stroke="#555" stroke-width="4" stroke-linecap="round"/>
  <path d="M18 20 L18 42 Q22 48 26 42 L26 20" fill="none" stroke="#555" stroke-width="3"/>
  <line x1="78" y1="20" x2="78" y2="80" stroke="#555" stroke-width="5" stroke-linecap="round"/>
  <path d="M74 20 L74 35 Q78 42 82 35 L82 20" fill="#555"/>"""

# fair – ferris wheel
svgs["fair"] = """\
  <circle cx="50" cy="46" r="32" fill="none" stroke="#888" stroke-width="3"/>
  <circle cx="50" cy="46" r="5" fill="#666"/>
  <line x1="50" y1="46" x2="50" y2="14" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="50" y2="78" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="18" y2="46" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="82" y2="46" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="27" y2="23" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="73" y2="69" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="73" y2="23" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="46" x2="27" y2="69" stroke="#888" stroke-width="2"/>
  <circle cx="50" cy="14" r="5" fill="#E44"/>
  <circle cx="50" cy="78" r="5" fill="#4A4"/>
  <circle cx="18" cy="46" r="5" fill="#44E"/>
  <circle cx="82" cy="46" r="5" fill="#E84"/>
  <circle cx="27" cy="23" r="5" fill="#A4E"/>
  <circle cx="73" cy="69" r="5" fill="#4EA"/>
  <circle cx="73" cy="23" r="5" fill="#EA4"/>
  <circle cx="27" cy="69" r="5" fill="#E4A"/>
  <line x1="50" y1="78" x2="50" y2="95" stroke="#666" stroke-width="3"/>"""

# fate – six-sided die
svgs["fate"] = """\
  <rect x="18" y="18" width="64" height="64" rx="10" ry="10" fill="white" stroke="#333" stroke-width="3"/>
  <circle cx="34" cy="34" r="5" fill="#333"/>
  <circle cx="66" cy="34" r="5" fill="#333"/>
  <circle cx="34" cy="66" r="5" fill="#333"/>
  <circle cx="66" cy="66" r="5" fill="#333"/>"""

# fleet – three sailboats
svgs["fleet"] = """\
  <polygon points="18,72 18,38 34,72" fill="#E8E8E8" stroke="#888" stroke-width="1.5"/>
  <rect x="14" y="72" width="24" height="6" rx="3" fill="#8B5E3C"/>
  <polygon points="50,72 50,30 68,72" fill="#E8E8E8" stroke="#888" stroke-width="1.5"/>
  <rect x="46" y="72" width="24" height="6" rx="3" fill="#8B5E3C"/>
  <polygon points="82,72 82,38 98,72" fill="#E8E8E8" stroke="#888" stroke-width="1.5"/>
  <rect x="78" y="72" width="24" height="6" rx="3" fill="#8B5E3C"/>"""

# fork
svgs["fork"] = """\
  <rect x="46" y="45" width="8" height="45" rx="3" fill="#888"/>
  <rect x="34" y="15" width="5" height="32" rx="2" fill="#888"/>
  <rect x="42" y="15" width="5" height="32" rx="2" fill="#888"/>
  <rect x="50" y="15" width="5" height="32" rx="2" fill="#888"/>
  <rect x="61" y="15" width="5" height="32" rx="2" fill="#888"/>
  <path d="M36 47 Q50 52 64 47" fill="none" stroke="#888" stroke-width="3"/>"""

# France – Eiffel Tower
svgs["France"] = """\
  <polygon points="50,10 65,50 35,50" fill="#555"/>
  <polygon points="35,50 65,50 72,80 28,80" fill="#555"/>
  <rect x="35" y="78" width="30" height="8" fill="#555"/>
  <rect x="30" y="48" width="40" height="5" fill="#444"/>
  <rect x="36" y="68" width="28" height="5" fill="#444"/>"""

# front
svgs["front"] = """\
  <polygon points="55,20 90,50 55,80" fill="#4A90D9"/>
  <rect x="10" y="38" width="50" height="24" fill="#4A90D9"/>"""

# goat
svgs["goat"] = """\
  <ellipse cx="52" cy="58" rx="28" ry="18" fill="#D4C5A9"/>
  <circle cx="24" cy="40" r="12" fill="#D4C5A9"/>
  <path d="M18 30 Q14 18 12 12" stroke="#D4C5A9" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M22 28 Q24 16 26 10" stroke="#D4C5A9" stroke-width="4" fill="none" stroke-linecap="round"/>
  <line x1="32" y1="74" x2="30" y2="90" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>
  <line x1="44" y1="76" x2="43" y2="90" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>
  <line x1="62" y1="76" x2="61" y2="90" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>
  <line x1="74" y1="74" x2="76" y2="90" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>"""

# golf
svgs["golf"] = """\
  <path d="M20 80 Q50 70 80 75" fill="none" stroke="#5A8A3C" stroke-width="4"/>
  <line x1="72" y1="20" x2="72" y2="74" stroke="#888" stroke-width="2.5"/>
  <polygon points="72,20 72,38 58,29" fill="#EE4444"/>
  <circle cx="38" cy="72" r="6" fill="white" stroke="#888" stroke-width="1.5"/>"""

# holy
svgs["holy"] = """\
  <rect x="42" y="12" width="16" height="76" rx="4" fill="#FFD700"/>
  <rect x="18" y="36" width="64" height="16" rx="4" fill="#FFD700"/>"""

# inlet
svgs["inlet"] = """\
  <rect x="0" y="0" width="100" height="100" fill="#4A90D9"/>
  <rect x="0" y="0" width="28" height="100" fill="#5A8A3C"/>
  <rect x="72" y="0" width="28" height="100" fill="#5A8A3C"/>
  <rect x="0" y="70" width="100" height="30" fill="#5A8A3C"/>"""

# jelly
svgs["jelly"] = """\
  <rect x="28" y="30" width="44" height="52" rx="6" fill="#E8607A"/>
  <rect x="32" y="22" width="36" height="12" rx="3" fill="#C0455A"/>
  <rect x="28" y="50" width="44" height="3" fill="#C0455A" opacity="0.5"/>"""

# left
svgs["left"] = """\
  <polygon points="45,20 10,50 45,80" fill="#4A90D9"/>
  <rect x="40" y="38" width="50" height="24" fill="#4A90D9"/>"""

# lemon
svgs["lemon"] = """\
  <ellipse cx="50" cy="50" rx="36" ry="24" fill="#FFE033"/>
  <ellipse cx="16" cy="50" rx="6" ry="5" fill="#FFE033"/>
  <ellipse cx="84" cy="50" rx="6" ry="5" fill="#FFE033"/>"""

# letter
svgs["letter"] = """\
  <rect x="12" y="25" width="76" height="52" rx="3" fill="white" stroke="#888" stroke-width="3"/>
  <path d="M12 27 L50 54 L88 27" fill="none" stroke="#888" stroke-width="3"/>"""

# lime
svgs["lime"] = """\
  <circle cx="50" cy="53" r="34" fill="#5CB85C"/>
  <ellipse cx="50" cy="21" rx="8" ry="5" fill="#3A8A3A"/>"""

# mail
svgs["mail"] = """\
  <rect x="10" y="25" width="80" height="55" rx="3" fill="white" stroke="#888" stroke-width="3"/>
  <path d="M10 27 L50 54 L90 27" fill="none" stroke="#888" stroke-width="3"/>
  <rect x="68" y="29" width="16" height="20" rx="2" fill="#E44" stroke="#888" stroke-width="1.5"/>"""

# marble
svgs["marble"] = """\
  <circle cx="50" cy="50" r="38" fill="#88CCEE"/>
  <path d="M20 35 Q35 50 25 65 Q35 80 55 75" fill="none" stroke="white" stroke-width="4" stroke-linecap="round"/>
  <path d="M50 18 Q70 35 60 55 Q75 65 78 80" fill="none" stroke="#2266AA" stroke-width="3" stroke-linecap="round"/>"""

# match
svgs["match"] = """\
  <rect x="47" y="32" width="6" height="58" rx="2" fill="#C8A96E"/>
  <ellipse cx="50" cy="30" rx="5" ry="7" fill="#CC2200"/>
  <path d="M46 22 Q50 14 54 22" fill="#FF8800" opacity="0.85"/>"""

# meat
svgs["meat"] = """\
  <path d="M20 70 Q18 40 38 28 Q50 20 60 25 Q75 22 78 35 Q85 50 75 65 Q65 80 50 82 Q30 84 20 70Z" fill="#C0392B"/>
  <path d="M42 38 L42 68 M36 53 L48 53" stroke="#F5E6C8" stroke-width="5" stroke-linecap="round"/>"""

# mince
svgs["mince"] = """\
  <circle cx="50" cy="56" r="30" fill="#555"/>
  <rect x="20" y="56" width="60" height="6" fill="#444"/>
  <rect x="50" y="56" width="6" height="32" rx="2" fill="#333"/>
  <rect x="20" y="74" width="60" height="6" rx="2" fill="#333"/>
  <circle cx="36" cy="48" r="5" fill="#A0522D"/>
  <circle cx="50" cy="42" r="5" fill="#A0522D"/>
  <circle cx="64" cy="48" r="5" fill="#A0522D"/>
  <circle cx="42" cy="57" r="4" fill="#A0522D"/>
  <circle cx="58" cy="57" r="4" fill="#A0522D"/>"""

# mint
svgs["mint"] = """\
  <line x1="50" y1="88" x2="50" y2="15" stroke="#3A8A3A" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="35" cy="65" rx="13" ry="8" fill="#5CB85C" transform="rotate(-30 35 65)"/>
  <ellipse cx="65" cy="65" rx="13" ry="8" fill="#5CB85C" transform="rotate(30 65 65)"/>
  <ellipse cx="32" cy="42" rx="13" ry="8" fill="#5CB85C" transform="rotate(-25 32 42)"/>
  <ellipse cx="68" cy="42" rx="13" ry="8" fill="#5CB85C" transform="rotate(25 68 42)"/>
  <ellipse cx="50" cy="22" rx="10" ry="7" fill="#5CB85C"/>"""

# monster
svgs["monster"] = """\
  <circle cx="50" cy="52" r="36" fill="#6ABE45"/>
  <path d="M32 32 Q36 18 30 12 Q34 18 40 22" fill="#6ABE45" stroke="#4A8A2A" stroke-width="2"/>
  <path d="M68 32 Q64 18 70 12 Q66 18 60 22" fill="#6ABE45" stroke="#4A8A2A" stroke-width="2"/>
  <circle cx="38" cy="46" r="6" fill="white"/>
  <circle cx="62" cy="46" r="6" fill="white"/>
  <circle cx="39" cy="47" r="3" fill="#222"/>
  <circle cx="63" cy="47" r="3" fill="#222"/>
  <path d="M30 68 L38 62 L44 68 L50 62 L56 68 L62 62 L70 68" fill="none" stroke="white" stroke-width="3" stroke-linejoin="round"/>"""

# mood
svgs["mood"] = """\
  <circle cx="50" cy="50" r="38" fill="#FFD700"/>
  <line x1="50" y1="12" x2="50" y2="88" stroke="#888" stroke-width="2"/>
  <path d="M18 62 Q34 76 50 62" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <path d="M50 62 Q66 48 82 62" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <circle cx="34" cy="40" r="4" fill="#333"/>
  <circle cx="66" cy="40" r="4" fill="#333"/>"""

# netball
svgs["netball"] = """\
  <rect x="44" y="20" width="12" height="68" fill="#888"/>
  <ellipse cx="50" cy="26" rx="18" ry="6" fill="none" stroke="#888" stroke-width="4"/>
  <circle cx="50" cy="14" r="9" fill="#FF8C00"/>"""

# Norway
svgs["Norway"] = """\
  <rect x="0" y="72" width="100" height="28" fill="#4A90D9"/>
  <polygon points="20,72 50,20 80,72" fill="#888"/>
  <polygon points="34,72 50,44 66,72" fill="white"/>
  <polygon points="60,72 80,28 100,72" fill="#777" opacity="0.7"/>"""

# orbit
svgs["orbit"] = """\
  <ellipse cx="50" cy="50" rx="42" ry="18" fill="none" stroke="#4A90D9" stroke-width="3" transform="rotate(-20 50 50)"/>
  <circle cx="50" cy="50" r="12" fill="#E8A020"/>"""

# pain
svgs["pain"] = """\
  <path d="M50 8 L60 35 L50 30 L58 58 L45 48 L54 75 L40 62 L50 92" fill="#DD2222" stroke="#AA0000" stroke-width="2"/>"""

# paint
svgs["paint"] = """\
  <rect x="44" y="12" width="12" height="48" rx="3" fill="#8B5E3C" transform="rotate(-20 50 36)"/>
  <rect x="44" y="52" width="12" height="14" rx="2" fill="#E8E8AA" transform="rotate(-20 50 59)"/>
  <path d="M28 68 Q40 62 55 72 Q68 78 78 70" fill="none" stroke="#E84" stroke-width="7" stroke-linecap="round"/>"""

# part – jigsaw piece
svgs["part"] = """\
  <path d="M20 20 L44 20 Q44 10 50 10 Q56 10 56 20 L80 20 L80 80 L20 80 Z" fill="#4A90D9" stroke="#2A60A0" stroke-width="2"/>
  <path d="M80 40 Q90 40 90 50 Q90 60 80 60" fill="#4A90D9" stroke="#2A60A0" stroke-width="2"/>"""

# party
svgs["party"] = """\
  <polygon points="50,10 30,75 70,75" fill="#FF6B9D"/>
  <circle cx="50" cy="10" r="7" fill="#FFD700"/>
  <circle cx="20" cy="25" r="4" fill="#FF4444"/>
  <circle cx="80" cy="35" r="3" fill="#44AAFF"/>
  <circle cx="15" cy="55" r="3" fill="#FFD700"/>
  <circle cx="85" cy="60" r="4" fill="#FF6B9D"/>
  <circle cx="30" cy="85" r="3" fill="#44FF44"/>
  <circle cx="70" cy="20" r="3" fill="#FF8800"/>"""

# path
svgs["path"] = """\
  <path d="M40 92 Q28 70 42 55 Q58 38 38 22 Q32 14 42 8" fill="none" stroke="#8B5E3C" stroke-width="6" stroke-linecap="round"/>
  <path d="M60 92 Q48 70 62 55 Q78 38 58 22 Q52 14 62 8" fill="none" stroke="#8B5E3C" stroke-width="6" stroke-linecap="round"/>"""

# Peru
svgs["Peru"] = """\
  <polygon points="20,80 45,28 70,80" fill="#888"/>
  <polygon points="40,80 60,38 80,80" fill="#777"/>
  <polygon points="55,80 70,50 85,80" fill="#666"/>
  <polygon points="20,80 45,46 70,80" fill="white" opacity="0.5"/>"""

# plate
svgs["plate"] = """\
  <circle cx="50" cy="50" r="40" fill="none" stroke="#CCC" stroke-width="4"/>
  <circle cx="50" cy="50" r="26" fill="none" stroke="#DDD" stroke-width="3"/>"""

# plot – 3×3 garden grid
svgs["plot"] = """\
  <rect x="12" y="12" width="76" height="76" fill="#C8A96E" rx="2"/>
  <line x1="38" y1="12" x2="38" y2="88" stroke="#8B6A3E" stroke-width="2"/>
  <line x1="62" y1="12" x2="62" y2="88" stroke="#8B6A3E" stroke-width="2"/>
  <line x1="12" y1="38" x2="88" y2="38" stroke="#8B6A3E" stroke-width="2"/>
  <line x1="12" y1="62" x2="88" y2="62" stroke="#8B6A3E" stroke-width="2"/>
  <circle cx="25" cy="25" r="4" fill="#5CB85C"/>
  <circle cx="50" cy="25" r="4" fill="#5CB85C"/>
  <circle cx="75" cy="25" r="4" fill="#5CB85C"/>
  <circle cx="25" cy="50" r="4" fill="#5CB85C"/>
  <circle cx="50" cy="50" r="4" fill="#5CB85C"/>
  <circle cx="75" cy="50" r="4" fill="#5CB85C"/>
  <circle cx="25" cy="75" r="4" fill="#5CB85C"/>
  <circle cx="50" cy="75" r="4" fill="#5CB85C"/>
  <circle cx="75" cy="75" r="4" fill="#5CB85C"/>"""

# point – cursor arrow
svgs["point"] = """\
  <polygon points="18,18 18,72 34,56 44,78 54,74 44,52 62,52" fill="#333"/>"""

# power – lightning bolt
svgs["power"] = """\
  <polygon points="58,8 32,52 50,52 42,92 68,48 50,48 58,8" fill="#FFD700"/>"""

# prove – green checkmark
svgs["prove"] = """\
  <polyline points="12,52 38,76 88,22" fill="none" stroke="#2ECC40" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>"""

# puck
svgs["puck"] = """\
  <ellipse cx="50" cy="58" rx="38" ry="20" fill="#222"/>
  <ellipse cx="50" cy="52" rx="38" ry="20" fill="#333"/>
  <path d="M14 52 Q50 44 86 52" fill="none" stroke="#555" stroke-width="2"/>"""

# race
svgs["race"] = """\
  <circle cx="38" cy="18" r="8" fill="#333"/>
  <path d="M38 26 L30 52 L18 70" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M38 26 L48 52 L62 68" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M30 38 L52 32" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/>
  <line x1="10" y1="15" x2="65" y2="35" stroke="#EE4444" stroke-width="4"/>
  <line x1="10" y1="25" x2="65" y2="45" stroke="#EE4444" stroke-width="4"/>
  <line x1="10" y1="35" x2="65" y2="55" stroke="#EE4444" stroke-width="4"/>"""

# rare – diamond gem
svgs["rare"] = """\
  <polygon points="50,10 80,38 80,42 50,90 20,42 20,38" fill="#88DDFF" stroke="#4488AA" stroke-width="2"/>
  <polygon points="50,10 80,38 50,38 20,38" fill="#BBEEFF" stroke="#4488AA" stroke-width="1.5"/>
  <line x1="50" y1="38" x2="50" y2="90" stroke="#4488AA" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="38" x2="20" y2="38" stroke="#4488AA" stroke-width="1" opacity="0.5"/>
  <line x1="50" y1="38" x2="80" y2="38" stroke="#4488AA" stroke-width="1" opacity="0.5"/>"""

# rash
svgs["rash"] = """\
  <ellipse cx="50" cy="54" rx="36" ry="24" fill="#FDBCB4"/>
  <circle cx="34" cy="44" r="5" fill="#EE4444"/>
  <circle cx="48" cy="38" r="4" fill="#EE4444"/>
  <circle cx="62" cy="44" r="5" fill="#EE4444"/>
  <circle cx="40" cy="56" r="4" fill="#EE4444"/>
  <circle cx="55" cy="58" r="5" fill="#EE4444"/>
  <circle cx="66" cy="54" r="4" fill="#EE4444"/>"""

# real – isometric cube
svgs["real"] = """\
  <polygon points="50,12 82,30 82,66 50,84 18,66 18,30" fill="none"/>
  <polygon points="50,12 82,30 50,48 18,30" fill="#7BA7D0"/>
  <polygon points="18,30 50,48 50,84 18,66" fill="#4A90D9"/>
  <polygon points="82,30 50,48 50,84 82,66" fill="#2A60A0"/>"""

# reap
svgs["reap"] = """\
  <path d="M75 10 Q90 30 82 55 Q74 78 50 88" fill="none" stroke="#8B5E3C" stroke-width="6" stroke-linecap="round"/>
  <path d="M75 10 Q42 8 28 28 Q16 48 50 88" fill="none" stroke="#8B5E3C" stroke-width="6" stroke-linecap="round"/>
  <line x1="75" y1="10" x2="78" y2="40" stroke="#555" stroke-width="4" stroke-linecap="round"/>"""

# record
svgs["record"] = """\
  <circle cx="50" cy="50" r="40" fill="#222"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#444" stroke-width="2"/>
  <circle cx="50" cy="50" r="18" fill="none" stroke="#444" stroke-width="2"/>
  <circle cx="50" cy="50" r="6" fill="#888"/>"""

# royal – crown
svgs["royal"] = """\
  <polygon points="10,75 10,45 28,60 50,20 72,60 90,45 90,75" fill="#FFD700" stroke="#CC9900" stroke-width="2"/>
  <rect x="10" y="72" width="80" height="10" fill="#FFD700" stroke="#CC9900" stroke-width="1.5"/>
  <circle cx="50" cy="25" r="5" fill="#EE4444"/>
  <circle cx="28" cy="60" r="4" fill="#4444EE"/>
  <circle cx="72" cy="60" r="4" fill="#44EE44"/>"""

# ruler
svgs["ruler"] = """\
  <rect x="10" y="32" width="80" height="36" rx="3" fill="#F5DEB3" stroke="#888" stroke-width="2"/>
  <line x1="20" y1="58" x2="20" y2="68" stroke="#666" stroke-width="2"/>
  <line x1="30" y1="58" x2="30" y2="64" stroke="#666" stroke-width="1.5"/>
  <line x1="40" y1="58" x2="40" y2="68" stroke="#666" stroke-width="2"/>
  <line x1="50" y1="58" x2="50" y2="64" stroke="#666" stroke-width="1.5"/>
  <line x1="60" y1="58" x2="60" y2="68" stroke="#666" stroke-width="2"/>
  <line x1="70" y1="58" x2="70" y2="64" stroke="#666" stroke-width="1.5"/>
  <line x1="80" y1="58" x2="80" y2="68" stroke="#666" stroke-width="2"/>"""

# salad
svgs["salad"] = """\
  <path d="M15 55 Q15 85 50 88 Q85 85 85 55 Z" fill="#E8E8C8" stroke="#888" stroke-width="2"/>
  <path d="M28 55 Q30 40 22 35 Q32 38 35 52" fill="#5CB85C"/>
  <path d="M45 55 Q42 36 50 28 Q58 36 55 55" fill="#3A8A3A"/>
  <path d="M62 55 Q68 38 78 35 Q70 42 72 55" fill="#5CB85C"/>"""

# sale – price tag
svgs["sale"] = """\
  <path d="M20 20 L75 20 Q88 20 88 55 Q88 80 65 88 Q42 96 22 78 Q12 65 20 45 Z" fill="#FFE033" stroke="#CC9900" stroke-width="2"/>
  <circle cx="30" cy="30" r="5" fill="none" stroke="#888" stroke-width="2.5"/>
  <path d="M70 20 L88 38" fill="none" stroke="#CC9900" stroke-width="3"/>"""

# scale
svgs["scale"] = """\
  <polygon points="50,20 56,40 44,40" fill="#888"/>
  <line x1="50" y1="40" x2="50" y2="80" stroke="#888" stroke-width="3"/>
  <line x1="18" y1="42" x2="82" y2="42" stroke="#888" stroke-width="3"/>
  <circle cx="18" cy="56" r="12" fill="none" stroke="#888" stroke-width="2.5"/>
  <circle cx="82" cy="56" r="12" fill="none" stroke="#888" stroke-width="2.5"/>
  <line x1="18" y1="42" x2="18" y2="44" stroke="#888" stroke-width="2"/>
  <line x1="82" y1="42" x2="82" y2="44" stroke="#888" stroke-width="2"/>
  <rect x="35" y="80" width="30" height="6" rx="2" fill="#888"/>"""

# scar
svgs["scar"] = """\
  <path d="M15 50 Q28 38 38 52 Q48 66 58 48 Q68 32 85 50" fill="none" stroke="#C05040" stroke-width="8" stroke-linecap="round"/>"""

# setting – gear
svgs["setting"] = """\
  <circle cx="50" cy="50" r="18" fill="#888"/>
  <circle cx="50" cy="50" r="8" fill="white"/>
  <rect x="46" y="10" width="8" height="18" rx="3" fill="#888"/>
  <rect x="46" y="72" width="8" height="18" rx="3" fill="#888"/>
  <rect x="10" y="46" width="18" height="8" rx="3" fill="#888"/>
  <rect x="72" y="46" width="18" height="8" rx="3" fill="#888"/>
  <rect x="20" y="20" width="8" height="18" rx="3" fill="#888" transform="rotate(45 24 29)"/>
  <rect x="72" y="20" width="8" height="18" rx="3" fill="#888" transform="rotate(-45 76 29)"/>
  <rect x="20" y="62" width="8" height="18" rx="3" fill="#888" transform="rotate(-45 24 71)"/>
  <rect x="72" y="62" width="8" height="18" rx="3" fill="#888" transform="rotate(45 76 71)"/>"""

# shake
svgs["shake"] = """\
  <path d="M10 30 Q25 24 40 30 Q55 36 70 30 Q85 24 90 30" fill="none" stroke="#555" stroke-width="4"/>
  <path d="M10 45 Q25 39 40 45 Q55 51 70 45 Q85 39 90 45" fill="none" stroke="#555" stroke-width="4"/>
  <path d="M10 60 Q25 54 40 60 Q55 66 70 60 Q85 54 90 60" fill="none" stroke="#555" stroke-width="4"/>
  <path d="M10 75 Q25 69 40 75 Q55 81 70 75 Q85 69 90 75" fill="none" stroke="#555" stroke-width="4"/>"""

# sharp
svgs["sharp"] = """\
  <polygon points="50,8 62,85 50,75 38,85" fill="#444"/>"""

# sheep
svgs["sheep"] = """\
  <ellipse cx="52" cy="54" rx="28" ry="22" fill="white" stroke="#CCC" stroke-width="2"/>
  <circle cx="52" cy="42" r="10" fill="white" stroke="#CCC" stroke-width="2"/>
  <circle cx="42" cy="46" r="10" fill="white" stroke="#CCC" stroke-width="2"/>
  <circle cx="62" cy="46" r="10" fill="white" stroke="#CCC" stroke-width="2"/>
  <circle cx="52" cy="34" r="8" fill="#D4C5A9"/>
  <circle cx="46" cy="30" r="4" fill="#D4C5A9"/>
  <circle cx="58" cy="30" r="4" fill="#D4C5A9"/>
  <line x1="36" y1="75" x2="34" y2="90" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>
  <line x1="46" y1="77" x2="45" y2="92" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>
  <line x1="58" y1="77" x2="59" y2="92" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>
  <line x1="68" y1="75" x2="70" y2="90" stroke="#D4C5A9" stroke-width="4" stroke-linecap="round"/>"""

# shine
svgs["shine"] = """\
  <circle cx="50" cy="50" r="20" fill="#FFD700"/>
  <line x1="50" y1="8" x2="50" y2="24" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="50" y1="76" x2="50" y2="92" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="8" y1="50" x2="24" y2="50" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="76" y1="50" x2="92" y2="50" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="20" y1="20" x2="31" y2="31" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="69" y1="69" x2="80" y2="80" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="80" y1="20" x2="69" y2="31" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
  <line x1="31" y1="69" x2="20" y2="80" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>"""

# shoe
svgs["shoe"] = """\
  <path d="M10 72 Q10 58 28 56 L44 56 Q48 42 58 36 Q68 32 74 36 Q80 40 76 50 L76 56 L88 56 Q94 56 94 62 Q94 72 88 72 Z" fill="#4A4A8A"/>
  <path d="M44 56 Q54 52 76 56" fill="none" stroke="#6A6AAA" stroke-width="2"/>"""

# since – timeline
svgs["since"] = """\
  <line x1="12" y1="50" x2="82" y2="50" stroke="#555" stroke-width="4"/>
  <circle cx="18" cy="50" r="7" fill="#4A90D9"/>
  <polygon points="82,50 70,42 70,58" fill="#4A90D9"/>"""

# skill – bullseye
svgs["skill"] = """\
  <circle cx="50" cy="50" r="40" fill="white" stroke="#CCC" stroke-width="2"/>
  <circle cx="50" cy="50" r="26" fill="white" stroke="#EE4444" stroke-width="2"/>
  <circle cx="50" cy="50" r="12" fill="#EE4444"/>"""

# skim
svgs["skim"] = """\
  <line x1="8" y1="62" x2="92" y2="62" stroke="#4A90D9" stroke-width="3"/>
  <ellipse cx="32" cy="54" rx="16" ry="8" fill="#C8A96E"/>
  <path d="M48 58 Q56 54 58 58" fill="none" stroke="#4A90D9" stroke-width="2"/>
  <path d="M60 60 Q68 54 72 60" fill="none" stroke="#4A90D9" stroke-width="2"/>
  <path d="M74 62 Q80 56 84 62" fill="none" stroke="#4A90D9" stroke-width="2"/>"""

# sky
svgs["sky"] = """\
  <rect x="0" y="0" width="100" height="100" fill="#87CEEB"/>
  <circle cx="38" cy="45" r="18" fill="white"/>
  <circle cx="55" cy="40" r="20" fill="white"/>
  <circle cx="70" cy="48" r="14" fill="white"/>
  <circle cx="28" cy="50" r="12" fill="white"/>"""

# smile
svgs["smile"] = """\
  <path d="M18 44 Q50 80 82 44" fill="none" stroke="#333" stroke-width="8" stroke-linecap="round"/>"""

# snore – crescent moon + zigzag Z-shapes
svgs["snore"] = """\
  <path d="M44 22 A24 24 0 1 0 44 62 A16 16 0 1 1 44 22" fill="#FFD700"/>
  <path d="M62 30 L74 30 L62 42 L74 42" fill="none" stroke="#888" stroke-width="3" stroke-linejoin="round"/>
  <path d="M70 50 L80 50 L70 60 L80 60" fill="none" stroke="#888" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M76 20 L84 20 L76 28 L84 28" fill="none" stroke="#888" stroke-width="2" stroke-linejoin="round"/>"""

# snow – snowflake
svgs["snow"] = """\
  <circle cx="50" cy="50" r="5" fill="#88CCEE"/>
  <line x1="50" y1="14" x2="50" y2="86" stroke="#88CCEE" stroke-width="4" stroke-linecap="round"/>
  <line x1="14" y1="50" x2="86" y2="50" stroke="#88CCEE" stroke-width="4" stroke-linecap="round"/>
  <line x1="22" y1="22" x2="78" y2="78" stroke="#88CCEE" stroke-width="4" stroke-linecap="round"/>
  <line x1="78" y1="22" x2="22" y2="78" stroke="#88CCEE" stroke-width="4" stroke-linecap="round"/>
  <line x1="42" y1="12" x2="36" y2="22" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="58" y1="12" x2="64" y2="22" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="42" y1="88" x2="36" y2="78" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="58" y1="88" x2="64" y2="78" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="12" y1="42" x2="22" y2="36" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="12" y1="58" x2="22" y2="64" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="88" y1="42" x2="78" y2="36" stroke="#88CCEE" stroke-width="2.5"/>
  <line x1="88" y1="58" x2="78" y2="64" stroke="#88CCEE" stroke-width="2.5"/>"""

# soil – cross-section layers
svgs["soil"] = """\
  <rect x="8" y="8" width="84" height="26" rx="2" fill="#3D2B1F"/>
  <rect x="8" y="36" width="84" height="26" rx="2" fill="#7A5230"/>
  <rect x="8" y="64" width="84" height="28" rx="2" fill="#B8916E"/>"""

# solo
svgs["solo"] = """\
  <polygon points="50,8 20,92 80,92" fill="#FFE066" opacity="0.7"/>
  <circle cx="50" cy="28" r="7" fill="#333"/>
  <line x1="50" y1="35" x2="50" y2="58" stroke="#333" stroke-width="4"/>
  <line x1="50" y1="44" x2="38" y2="54" stroke="#333" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="44" x2="62" y2="54" stroke="#333" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="58" x2="40" y2="76" stroke="#333" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="58" x2="60" y2="76" stroke="#333" stroke-width="3" stroke-linecap="round"/>"""

# song – quarter note
svgs["song"] = """\
  <ellipse cx="38" cy="74" rx="14" ry="10" fill="#333" transform="rotate(-20 38 74)"/>
  <line x1="50" y1="70" x2="50" y2="22" stroke="#333" stroke-width="5"/>
  <path d="M50 22 Q78 28 78 42 Q78 52 50 48" fill="#333"/>"""

# space
svgs["space"] = """\
  <rect x="5" y="5" width="90" height="90" rx="12" fill="#0A0A2A"/>
  <circle cx="20" cy="22" r="3" fill="white"/>
  <circle cx="75" cy="18" r="2.5" fill="white"/>
  <circle cx="55" cy="35" r="2" fill="white"/>
  <circle cx="30" cy="70" r="2.5" fill="white"/>
  <circle cx="82" cy="65" r="2" fill="white"/>
  <path d="M60 55 A16 16 0 1 0 60 87 A10 10 0 1 1 60 55" fill="#FFFFCC"/>"""

# spider
svgs["spider"] = """\
  <ellipse cx="50" cy="52" rx="14" ry="12" fill="#222"/>
  <circle cx="50" cy="36" r="9" fill="#222"/>
  <line x1="36" y1="46" x2="12" y2="36" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="12" y1="36" x2="8" y2="52" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="52" x2="10" y2="50" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="58" x2="14" y2="68" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="64" y1="46" x2="88" y2="36" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="88" y1="36" x2="92" y2="52" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="64" y1="52" x2="90" y2="50" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <line x1="64" y1="58" x2="86" y2="68" stroke="#222" stroke-width="3" stroke-linecap="round"/>"""

# spine
svgs["spine"] = """\
  <ellipse cx="50" cy="16" rx="14" ry="8" fill="#D4C5A9" stroke="#888" stroke-width="1.5"/>
  <rect x="43" y="20" width="6" height="4" fill="#D4C5A9"/>
  <ellipse cx="50" cy="30" rx="14" ry="8" fill="#D4C5A9" stroke="#888" stroke-width="1.5"/>
  <rect x="43" y="34" width="6" height="4" fill="#D4C5A9"/>
  <ellipse cx="50" cy="44" rx="14" ry="8" fill="#D4C5A9" stroke="#888" stroke-width="1.5"/>
  <rect x="43" y="48" width="6" height="4" fill="#D4C5A9"/>
  <ellipse cx="50" cy="58" rx="14" ry="8" fill="#D4C5A9" stroke="#888" stroke-width="1.5"/>
  <rect x="43" y="62" width="6" height="4" fill="#D4C5A9"/>
  <ellipse cx="50" cy="72" rx="14" ry="8" fill="#D4C5A9" stroke="#888" stroke-width="1.5"/>
  <rect x="43" y="76" width="6" height="4" fill="#D4C5A9"/>
  <ellipse cx="50" cy="86" rx="14" ry="8" fill="#D4C5A9" stroke="#888" stroke-width="1.5"/>"""

# spoon
svgs["spoon"] = """\
  <ellipse cx="50" cy="24" rx="16" ry="20" fill="#C0C0C0"/>
  <rect x="47" y="42" width="6" height="46" rx="3" fill="#C0C0C0"/>"""

# stage
svgs["stage"] = """\
  <rect x="10" y="62" width="80" height="18" rx="2" fill="#8B5E3C"/>
  <path d="M10 10 Q10 62 28 62" fill="#AA0000" stroke="#880000" stroke-width="2"/>
  <path d="M90 10 Q90 62 72 62" fill="#AA0000" stroke="#880000" stroke-width="2"/>"""

# stamp
svgs["stamp"] = """\
  <rect x="15" y="15" width="70" height="70" fill="white" stroke="#888" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="25" y1="25" x2="75" y2="75" stroke="#CC2200" stroke-width="6" opacity="0.6"/>
  <line x1="75" y1="25" x2="25" y2="75" stroke="#CC2200" stroke-width="6" opacity="0.6"/>"""

# start – chequered flag
svgs["start"] = """\
  <rect x="15" y="15" width="70" height="70" fill="white"/>
  <rect x="15" y="15" width="17.5" height="17.5" fill="black"/>
  <rect x="50" y="15" width="17.5" height="17.5" fill="black"/>
  <rect x="32.5" y="32.5" width="17.5" height="17.5" fill="black"/>
  <rect x="67.5" y="32.5" width="17.5" height="17.5" fill="black"/>
  <rect x="15" y="50" width="17.5" height="17.5" fill="black"/>
  <rect x="50" y="50" width="17.5" height="17.5" fill="black"/>
  <rect x="32.5" y="67.5" width="17.5" height="17.5" fill="black"/>
  <rect x="67.5" y="67.5" width="17.5" height="17.5" fill="black"/>"""

# steel – I-beam
svgs["steel"] = """\
  <rect x="18" y="18" width="64" height="12" rx="2" fill="#888"/>
  <rect x="44" y="30" width="12" height="40" fill="#888"/>
  <rect x="18" y="70" width="64" height="12" rx="2" fill="#888"/>"""

# storm
svgs["storm"] = """\
  <ellipse cx="50" cy="36" rx="30" ry="20" fill="#888"/>
  <circle cx="34" cy="30" r="16" fill="#888"/>
  <circle cx="66" cy="30" r="16" fill="#888"/>
  <line x1="34" y1="56" x2="28" y2="72" stroke="#AAA" stroke-width="3" stroke-linecap="round"/>
  <line x1="46" y1="56" x2="40" y2="76" stroke="#AAA" stroke-width="3" stroke-linecap="round"/>
  <line x1="58" y1="56" x2="52" y2="76" stroke="#AAA" stroke-width="3" stroke-linecap="round"/>
  <line x1="70" y1="56" x2="64" y2="72" stroke="#AAA" stroke-width="3" stroke-linecap="round"/>"""

# story – open book
svgs["story"] = """\
  <path d="M50 28 Q36 22 16 26 L16 78 Q36 74 50 80 Q64 74 84 78 L84 26 Q64 22 50 28Z" fill="#F5DEB3" stroke="#888" stroke-width="2"/>
  <line x1="50" y1="28" x2="50" y2="80" stroke="#888" stroke-width="2"/>
  <line x1="22" y1="36" x2="46" y2="36" stroke="#AAA" stroke-width="1.5"/>
  <line x1="22" y1="44" x2="46" y2="44" stroke="#AAA" stroke-width="1.5"/>
  <line x1="22" y1="52" x2="46" y2="52" stroke="#AAA" stroke-width="1.5"/>
  <line x1="54" y1="36" x2="78" y2="36" stroke="#AAA" stroke-width="1.5"/>
  <line x1="54" y1="44" x2="78" y2="44" stroke="#AAA" stroke-width="1.5"/>
  <line x1="54" y1="52" x2="78" y2="52" stroke="#AAA" stroke-width="1.5"/>"""

# strum – guitar
svgs["strum"] = """\
  <path d="M42 70 Q28 76 24 62 Q20 48 32 40 Q44 32 48 20 Q52 8 50 8 Q48 8 50 20 Q52 32 64 38 Q76 44 76 58 Q76 72 62 76 Q50 80 42 70Z" fill="#C8860A" stroke="#8B5E00" stroke-width="2"/>
  <rect x="48" y="8" width="4" height="28" fill="#5C3A1E"/>
  <rect x="45" y="8" width="10" height="6" rx="2" fill="#5C3A1E"/>
  <line x1="38" y1="44" x2="62" y2="58" stroke="#888" stroke-width="1.5"/>
  <line x1="36" y1="50" x2="62" y2="62" stroke="#888" stroke-width="1.5"/>
  <line x1="36" y1="56" x2="60" y2="68" stroke="#888" stroke-width="1.5"/>
  <line x1="38" y1="62" x2="58" y2="72" stroke="#888" stroke-width="1.5"/>"""

# sumo
svgs["sumo"] = """\
  <circle cx="50" cy="26" r="14" fill="#F5CBA7"/>
  <ellipse cx="50" cy="62" rx="34" ry="28" fill="#F5CBA7"/>
  <rect x="30" y="72" width="16" height="18" rx="5" fill="#F5CBA7"/>
  <rect x="54" y="72" width="16" height="18" rx="5" fill="#F5CBA7"/>
  <line x1="16" y1="52" x2="34" y2="62" stroke="#F5CBA7" stroke-width="12" stroke-linecap="round"/>
  <line x1="84" y1="52" x2="66" y2="62" stroke="#F5CBA7" stroke-width="12" stroke-linecap="round"/>"""

# swag – bedroll
svgs["swag"] = """\
  <rect x="22" y="36" width="56" height="28" fill="#8B5E3C"/>
  <ellipse cx="22" cy="50" rx="12" ry="14" fill="#C8A96E"/>
  <ellipse cx="78" cy="50" rx="12" ry="14" fill="#C8A96E"/>
  <line x1="22" y1="40" x2="22" y2="60" stroke="#5C3A1E" stroke-width="3"/>
  <line x1="78" y1="40" x2="78" y2="60" stroke="#5C3A1E" stroke-width="3"/>"""

# tact – handshake
svgs["tact"] = """\
  <path d="M10 55 Q10 42 22 38 L38 38 Q44 36 46 42 L50 50 L54 42 Q56 36 62 38 L78 38 Q90 42 90 55" fill="#FDBCB4" stroke="#C8A090" stroke-width="2"/>
  <rect x="6" y="55" width="22" height="16" rx="6" fill="#FDBCB4"/>
  <rect x="72" y="55" width="22" height="16" rx="6" fill="#FDBCB4"/>"""

# tail
svgs["tail"] = """\
  <path d="M30 80 Q50 50 78 30 Q88 22 86 18 Q82 14 74 20 Q50 38 30 80" fill="none" stroke="#888" stroke-width="8" stroke-linecap="round"/>"""

# talent
svgs["talent"] = """\
  <polygon points="50,8 61,35 90,35 67,54 76,82 50,63 24,82 33,54 10,35 39,35" fill="#FFD700" stroke="#CC9900" stroke-width="2"/>"""

# team
svgs["team"] = """\
  <circle cx="22" cy="22" r="8" fill="#555"/>
  <line x1="22" y1="30" x2="22" y2="58" stroke="#555" stroke-width="4"/>
  <line x1="22" y1="40" x2="10" y2="52" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="22" y1="40" x2="34" y2="52" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="22" y1="58" x2="14" y2="76" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="22" y1="58" x2="30" y2="76" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="22" r="8" fill="#555"/>
  <line x1="50" y1="30" x2="50" y2="58" stroke="#555" stroke-width="4"/>
  <line x1="50" y1="40" x2="38" y2="52" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="40" x2="62" y2="52" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="58" x2="42" y2="76" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="58" x2="58" y2="76" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <circle cx="78" cy="22" r="8" fill="#555"/>
  <line x1="78" y1="30" x2="78" y2="58" stroke="#555" stroke-width="4"/>
  <line x1="78" y1="40" x2="66" y2="52" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="78" y1="40" x2="90" y2="52" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="78" y1="58" x2="70" y2="76" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="78" y1="58" x2="86" y2="76" stroke="#555" stroke-width="3" stroke-linecap="round"/>"""

# throw
svgs["throw"] = """\
  <path d="M18 60 Q22 38 38 32 L52 28" fill="none" stroke="#888" stroke-width="6" stroke-linecap="round"/>
  <circle cx="62" cy="24" r="9" fill="#FF8C00"/>
  <path d="M62 24 Q72 18 84 28 Q90 38 80 46" fill="none" stroke="#888" stroke-width="2.5" stroke-dasharray="4,3"/>"""

# thunder
svgs["thunder"] = """\
  <ellipse cx="50" cy="32" rx="30" ry="20" fill="#888"/>
  <circle cx="34" cy="26" r="16" fill="#888"/>
  <circle cx="66" cy="26" r="16" fill="#888"/>
  <polygon points="54,52 38,72 50,72 46,92 62,68 50,68 54,52" fill="#FFD700"/>"""

# tide
svgs["tide"] = """\
  <rect x="0" y="55" width="100" height="45" fill="#4A90D9"/>
  <path d="M0 55 Q12 38 25 55 Q38 72 50 55 Q62 38 75 55 Q88 72 100 55" fill="#4A90D9" stroke="#2A6099" stroke-width="2"/>
  <circle cx="14" cy="46" r="3" fill="white" opacity="0.7"/>
  <circle cx="88" cy="42" r="2.5" fill="white" opacity="0.7"/>"""

# title – trophy
svgs["title"] = """\
  <path d="M30 20 L30 55 Q30 75 50 78 Q70 75 70 55 L70 20 Z" fill="#FFD700" stroke="#CC9900" stroke-width="2"/>
  <line x1="30" y1="35" x2="16" y2="35" stroke="#FFD700" stroke-width="10" stroke-linecap="round"/>
  <line x1="70" y1="35" x2="84" y2="35" stroke="#FFD700" stroke-width="10" stroke-linecap="round"/>
  <path d="M16 28 Q8 35 16 42" fill="none" stroke="#FFD700" stroke-width="5" stroke-linecap="round"/>
  <path d="M84 28 Q92 35 84 42" fill="none" stroke="#FFD700" stroke-width="5" stroke-linecap="round"/>
  <rect x="42" y="78" width="16" height="10" fill="#FFD700"/>
  <rect x="30" y="88" width="40" height="8" rx="2" fill="#FFD700" stroke="#CC9900" stroke-width="1.5"/>"""

# tone – sine wave
svgs["tone"] = """\
  <path d="M8 50 Q20 20 32 50 Q44 80 56 50 Q68 20 80 50 Q86 65 92 50" fill="none" stroke="#4A90D9" stroke-width="5" stroke-linecap="round"/>"""

# total – abacus
svgs["total"] = """\
  <rect x="15" y="15" width="70" height="70" rx="5" fill="none" stroke="#8B5E3C" stroke-width="4"/>
  <line x1="15" y1="35" x2="85" y2="35" stroke="#8B5E3C" stroke-width="3"/>
  <line x1="15" y1="55" x2="85" y2="55" stroke="#8B5E3C" stroke-width="3"/>
  <line x1="15" y1="75" x2="85" y2="75" stroke="#8B5E3C" stroke-width="3"/>
  <circle cx="28" cy="25" r="7" fill="#EE4444"/>
  <circle cx="44" cy="25" r="7" fill="#EE4444"/>
  <circle cx="62" cy="25" r="7" fill="#EE8800"/>
  <circle cx="78" cy="25" r="7" fill="#EE8800"/>
  <circle cx="28" cy="45" r="7" fill="#4488EE"/>
  <circle cx="44" cy="45" r="7" fill="#4488EE"/>
  <circle cx="62" cy="45" r="7" fill="#44AA44"/>
  <circle cx="28" cy="65" r="7" fill="#AA44EE"/>
  <circle cx="44" cy="65" r="7" fill="#AA44EE"/>
  <circle cx="62" cy="65" r="7" fill="#AA44EE"/>"""

# tower – castle
svgs["tower"] = """\
  <rect x="30" y="28" width="40" height="62" fill="#888"/>
  <rect x="24" y="18" width="10" height="18" fill="#888"/>
  <rect x="45" y="18" width="10" height="18" fill="#888"/>
  <rect x="66" y="18" width="10" height="18" fill="#888"/>
  <rect x="40" y="60" width="20" height="30" fill="#555"/>"""

# track – railway
svgs["track"] = """\
  <line x1="30" y1="10" x2="30" y2="90" stroke="#555" stroke-width="6" stroke-linecap="round"/>
  <line x1="70" y1="10" x2="70" y2="90" stroke="#555" stroke-width="6" stroke-linecap="round"/>
  <line x1="30" y1="20" x2="70" y2="20" stroke="#8B5E3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="30" y1="34" x2="70" y2="34" stroke="#8B5E3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="30" y1="48" x2="70" y2="48" stroke="#8B5E3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="30" y1="62" x2="70" y2="62" stroke="#8B5E3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="30" y1="76" x2="70" y2="76" stroke="#8B5E3C" stroke-width="5" stroke-linecap="round"/>"""

# trust – chain links
svgs["trust"] = """\
  <rect x="14" y="35" width="36" height="22" rx="11" fill="none" stroke="#888" stroke-width="7"/>
  <rect x="50" y="43" width="36" height="22" rx="11" fill="none" stroke="#888" stroke-width="7"/>"""

# unit – 3D cube
svgs["unit"] = """\
  <polygon points="50,14 80,30 50,46 20,30" fill="#7BA7D0"/>
  <polygon points="20,30 50,46 50,82 20,66" fill="#4A90D9"/>
  <polygon points="80,30 50,46 50,82 80,66" fill="#2A60A0"/>"""

# vase
svgs["vase"] = """\
  <path d="M38 20 Q28 20 24 40 Q18 60 22 75 Q28 90 50 90 Q72 90 78 75 Q82 60 76 40 Q72 20 62 20 Z" fill="#4A90D9" stroke="#2A6099" stroke-width="2"/>
  <rect x="36" y="14" width="28" height="8" rx="3" fill="#4A90D9" stroke="#2A6099" stroke-width="1.5"/>"""

# vine
svgs["vine"] = """\
  <path d="M50 90 Q30 70 40 50 Q55 30 40 12" fill="none" stroke="#5CB85C" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="28" cy="72" rx="12" ry="8" fill="#5CB85C" transform="rotate(-30 28 72)"/>
  <ellipse cx="60" cy="60" rx="12" ry="8" fill="#5CB85C" transform="rotate(20 60 60)"/>
  <ellipse cx="30" cy="44" rx="11" ry="7" fill="#3A8A3A" transform="rotate(-20 30 44)"/>
  <ellipse cx="58" cy="28" rx="11" ry="7" fill="#3A8A3A" transform="rotate(15 58 28)"/>"""

# volt
svgs["volt"] = """\
  <polygon points="56,8 34,50 50,50 44,92 66,50 50,50 56,8" fill="#FFD700"/>
  <circle cx="72" cy="18" r="4" fill="#333"/>
  <line x1="68" y1="18" x2="76" y2="18" stroke="#333" stroke-width="2.5"/>
  <line x1="72" y1="14" x2="72" y2="22" stroke="#333" stroke-width="2.5"/>
  <line x1="26" y1="78" x2="34" y2="78" stroke="#333" stroke-width="3"/>"""

# wait – hourglass
svgs["wait"] = """\
  <polygon points="18,12 82,12 50,50" fill="#C8A96E"/>
  <polygon points="18,88 82,88 50,50" fill="#C8A96E"/>
  <rect x="16" y="10" width="68" height="6" rx="2" fill="#8B5E3C"/>
  <rect x="16" y="84" width="68" height="6" rx="2" fill="#8B5E3C"/>
  <circle cx="44" cy="62" r="3" fill="#FF8800"/>
  <circle cx="50" cy="68" r="3" fill="#FF8800"/>
  <circle cx="56" cy="62" r="3" fill="#FF8800"/>"""

# wash
svgs["wash"] = """\
  <path d="M18 45 Q18 80 50 82 Q82 80 82 45 Z" fill="none" stroke="#4A90D9" stroke-width="4"/>
  <rect x="18" y="38" width="64" height="10" rx="3" fill="none" stroke="#4A90D9" stroke-width="3"/>
  <circle cx="34" cy="30" r="6" fill="none" stroke="#88CCEE" stroke-width="2.5"/>
  <circle cx="50" cy="22" r="7" fill="none" stroke="#88CCEE" stroke-width="2.5"/>
  <circle cx="66" cy="28" r="5" fill="none" stroke="#88CCEE" stroke-width="2.5"/>"""

# weak – wilting flower
svgs["weak"] = """\
  <path d="M50 32 Q52 55 45 75 Q42 85 38 90" fill="none" stroke="#5CB85C" stroke-width="4" stroke-linecap="round"/>
  <circle cx="50" cy="26" r="8" fill="#FFD700"/>
  <ellipse cx="38" cy="20" rx="8" ry="5" fill="#FFD700" transform="rotate(-30 38 20)"/>
  <ellipse cx="62" cy="20" rx="8" ry="5" fill="#FFD700" transform="rotate(30 62 20)"/>
  <ellipse cx="34" cy="32" rx="8" ry="5" fill="#FFD700" transform="rotate(-60 34 32)"/>
  <ellipse cx="66" cy="32" rx="8" ry="5" fill="#FFD700" transform="rotate(60 66 32)"/>"""

# wild – paw print
svgs["wild"] = """\
  <ellipse cx="50" cy="62" rx="22" ry="18" fill="#888"/>
  <ellipse cx="28" cy="42" rx="9" ry="7" fill="#888"/>
  <ellipse cx="44" cy="34" rx="9" ry="7" fill="#888"/>
  <ellipse cx="60" cy="34" rx="9" ry="7" fill="#888"/>
  <ellipse cx="74" cy="42" rx="9" ry="7" fill="#888"/>"""

# wire – coil
svgs["wire"] = """\
  <path d="M50 50 m-35 0 a35 12 0 1 1 70 0 a35 12 0 1 1 -70 0" fill="none" stroke="#888" stroke-width="4"/>
  <path d="M50 50 m-28 5 a28 10 0 1 1 56 0 a28 10 0 1 1 -56 0" fill="none" stroke="#888" stroke-width="4"/>
  <path d="M50 50 m-21 10 a21 8 0 1 1 42 0 a21 8 0 1 1 -42 0" fill="none" stroke="#888" stroke-width="4"/>
  <path d="M50 50 m-14 15 a14 6 0 1 1 28 0 a14 6 0 1 1 -28 0" fill="none" stroke="#888" stroke-width="4"/>"""

# wok
svgs["wok"] = """\
  <path d="M16 38 Q16 82 50 84 Q84 82 84 38" fill="#555" stroke="#333" stroke-width="2"/>
  <ellipse cx="50" cy="38" rx="34" ry="10" fill="#666" stroke="#333" stroke-width="2"/>
  <line x1="5" y1="38" x2="16" y2="44" stroke="#555" stroke-width="6" stroke-linecap="round"/>
  <line x1="95" y1="38" x2="84" y2="44" stroke="#555" stroke-width="6" stroke-linecap="round"/>"""

# worm
svgs["worm"] = """\
  <circle cx="22" cy="50" r="10" fill="#C8860A"/>
  <circle cx="36" cy="42" r="9" fill="#C8860A"/>
  <circle cx="50" cy="40" r="9" fill="#C8860A"/>
  <circle cx="64" cy="44" r="9" fill="#C8860A"/>
  <circle cx="77" cy="53" r="9" fill="#C8860A"/>
  <circle cx="22" cy="50" r="10" fill="#C8860A" stroke="#8B5E00" stroke-width="1"/>
  <circle cx="18" cy="46" r="2.5" fill="#333"/>
  <circle cx="26" cy="46" r="2.5" fill="#333"/>"""

# yelp
svgs["yelp"] = """\
  <ellipse cx="50" cy="52" rx="26" ry="30" fill="#333"/>
  <ellipse cx="50" cy="46" rx="18" ry="16" fill="#CC2200"/>
  <line x1="18" y1="22" x2="14" y2="14" stroke="#EE4444" stroke-width="3" stroke-linecap="round"/>
  <line x1="82" y1="22" x2="86" y2="14" stroke="#EE4444" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="48" x2="2" y2="46" stroke="#EE4444" stroke-width="3" stroke-linecap="round"/>
  <line x1="90" y1="48" x2="98" y2="46" stroke="#EE4444" stroke-width="3" stroke-linecap="round"/>
  <line x1="16" y1="70" x2="10" y2="78" stroke="#EE4444" stroke-width="3" stroke-linecap="round"/>
  <line x1="84" y1="70" x2="90" y2="78" stroke="#EE4444" stroke-width="3" stroke-linecap="round"/>"""

# yoga
svgs["yoga"] = """\
  <circle cx="50" cy="18" r="8" fill="#555"/>
  <line x1="50" y1="26" x2="50" y2="52" stroke="#555" stroke-width="4"/>
  <path d="M50 52 Q36 62 26 56" stroke="#555" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M50 52 Q64 62 74 56" stroke="#555" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M26 56 Q18 70 30 72 Q40 74 50 68 Q60 74 70 72 Q82 70 74 56" fill="none" stroke="#555" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>"""

# young – seedling
svgs["young"] = """\
  <line x1="50" y1="88" x2="50" y2="42" stroke="#5CB85C" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="36" cy="38" rx="14" ry="9" fill="#5CB85C" transform="rotate(-25 36 38)"/>
  <ellipse cx="64" cy="38" rx="14" ry="9" fill="#5CB85C" transform="rotate(25 64 38)"/>"""

# zest – citrus wheel
svgs["zest"] = """\
  <circle cx="50" cy="50" r="40" fill="#FF8C00"/>
  <circle cx="50" cy="50" r="6" fill="#FF6600"/>
  <line x1="50" y1="10" x2="50" y2="44" stroke="#FF6600" stroke-width="3"/>
  <line x1="50" y1="56" x2="50" y2="90" stroke="#FF6600" stroke-width="3"/>
  <line x1="10" y1="50" x2="44" y2="50" stroke="#FF6600" stroke-width="3"/>
  <line x1="56" y1="50" x2="90" y2="50" stroke="#FF6600" stroke-width="3"/>
  <line x1="22" y1="22" x2="46" y2="46" stroke="#FF6600" stroke-width="3"/>
  <line x1="54" y1="54" x2="78" y2="78" stroke="#FF6600" stroke-width="3"/>
  <line x1="78" y1="22" x2="54" y2="46" stroke="#FF6600" stroke-width="3"/>
  <line x1="46" y1="54" x2="22" y2="78" stroke="#FF6600" stroke-width="3"/>
  <line x1="50" y1="10" x2="72" y2="26" stroke="#FF6600" stroke-width="2" opacity="0.6"/>
  <line x1="50" y1="10" x2="28" y2="26" stroke="#FF6600" stroke-width="2" opacity="0.6"/>"""

os.makedirs(OUT, exist_ok=True)
for name, body in svgs.items():
    write(name, body)

print(f"\nDone: wrote {len(svgs)} SVG files to {OUT}")
