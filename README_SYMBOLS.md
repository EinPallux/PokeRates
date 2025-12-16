# Set-Symbol Bilder Anleitung

## Struktur für Set-Symbol Bilder

Um Set-Symbol Bilder zu verwenden, erstelle einen `symbols/` Ordner im gleichen Verzeichnis wie die HTML-Datei:

```
PokéRates/
├── index.html
├── data.js
├── script.js
└── symbols/          ← Erstelle diesen Ordner
    ├── pfl.png       ← Phantasmal Flames
    ├── meg.png       ← Mega Evolution
    ├── bb.png        ← Black Bolt
    ├── wf.png        ← White Flare
    ├── dr.png        ← Destined Rivals
    ├── jt.png        ← Journey Together
    ├── pre.png       ← Prismatic Evolutions
    ├── ss.png        ← Surging Sparks
    ├── sc.png        ← Stellar Crown
    ├── tm.png        ← Twilight Masquerade
    ├── tf.png        ← Temporal Forces
    ├── pf.png        ← Paldean Fates
    ├── pr.png        ← Paradox Rift
    ├── mew.png       ← 151
    ├── of.png        ← Obsidian Flames
    ├── pe.png        ← Paldea Evolved
    ├── sv.png        ← Scarlet & Violet
    ├── crz.png       ← Crown Zenith
    ├── sit.png       ← Silver Tempest
    ├── lor.png       ← Lost Origin
    ├── asr.png       ← Astral Radiance
    ├── brs.png       ← Brilliant Stars
    ├── fst.png       ← Fusion Strike
    ├── evs.png       ← Evolving Skies
    ├── cre.png       ← Chilling Reign
    ├── bst.png       ← Battle Styles
    ├── shf.png       ← Shining Fates
    ├── viv.png       ← Vivid Voltage
    ├── daa.png       ← Darkness Ablaze
    ├── rcl.png       ← Rebel Clash
    └── ssh.png       ← Sword & Shield
```

## Empfohlene Bildgröße

- **Format**: PNG mit transparentem Hintergrund
- **Größe**: 256x256 px oder 512x512 px
- **Dateigröße**: Unter 100 KB pro Bild

## Fallback

Wenn kein Bild vorhanden ist, wird automatisch das Set-Symbol als Text-Abkürzung angezeigt.

## Kartennummern

Alle Chase Cards enthalten jetzt ihre Kartennummern. Diese können direkt bei folgenden Seiten gesucht werden:

### Für Preise:
- **PriceCharting**: `https://www.pricecharting.com/game/pokemon-{set-name}/{card-name}-{number}`
- **Cardmarket**: `https://www.cardmarket.com/en/Pokemon/Products/Singles/{set-name}/{card-name}`

### Beispiele:
- Pikachu ex 238/191 aus Surging Sparks
- Mega Charizard X ex 125/094 aus Phantasmal Flames
- Umbreon VMAX 215/203 aus Evolving Skies

Die Kartennummern werden unter dem Raritäts-Text angezeigt im Format: `#238/191`
