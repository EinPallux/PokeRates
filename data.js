// data.js

const setsData = [
    {
        id: "sv-10.5",
        name: {
            "German": "Schwarze Blitze & Weiße Flammen",
            "English": "Black Bolt & White Flare",
            "Japanese": "Black Bolt & White Flare",
            "Korean": "Black Bolt & White Flare"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-07-18",
        totalCards: "180+",
        symbol: "⚡/🔥", 
        color: "from-gray-800 to-gray-900", // Dark theme for Black/White
        rates: [
            { rarity: "Pokéball Reverse Holo", rate: "1/1", percentage: "100%", note: "Guaranteed per pack" },
            { rarity: "Masterball Reverse Holo", rate: "1/36", percentage: "2.7%", note: "Approx. 1 per Display" },
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.6%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/86", percentage: "1.16%" },
            { rarity: "Black White Rare (BWR)", rate: "1/120", percentage: "0.83%", note: "Monochrome Alt Art" },
            { rarity: "Hyper Rare (Gold)", rate: "1/140", percentage: "0.71%" }
        ],
        topPulls: [
            { name: "Reshiram & Zekrom GX", rarity: "Black White Rare", price: "€250.00", image: "card-bw-reshiram.png" },
            { name: "N (Natural Harmonia)", rarity: "SIR", price: "€180.00", image: "card-n-sir.png" },
            { name: "Victini ex", rarity: "Masterball Holo", price: "€45.00", image: "card-victini-mb.png" }
        ]
    },
    {
        id: "sv-11",
        name: {
            "German": "Megaentwicklungen: Fatale Flammen",
            "English": "Fatal Flames",
            "Japanese": "Fatal Flames",
            "Korean": "Fatal Flames"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-11-14",
        totalCards: "210+",
        symbol: "🔥",
        color: "from-orange-500 to-red-600", // Fiery theme
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/5", percentage: "20%" },
            { rarity: "Illustration Rare (IR)", rate: "1/9", percentage: "11.1%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/86", percentage: "1.16%" },
            { rarity: "Mega Hyper Rare (Gold)", rate: "1/942", percentage: "0.10%", note: "Extremely Rare!" }
        ],
        topPulls: [
            { name: "Mega-Glurak X-ex", rarity: "SIR", price: "€450.00", image: "card-zard-mega.png" },
            { name: "Mega-Glurak Y-ex", rarity: "Mega Hyper Rare", price: "€600.00", image: "card-zard-y-gold.png" },
            { name: "Lucia (Dawn)", rarity: "SIR", price: "€120.00", image: "card-lucia-sir.png" },
            { name: "Mega-Gengar ex", rarity: "Ultra Rare", price: "€85.00", image: "card-gengar-ur.png" }
        ]
    },
    {
        id: "sv-151",
        name: {
            "German": "Karmesin & Purpur - 151",
            "English": "Scarlet & Violet - 151",
            "Japanese": "Pokemon Card 151",
            "Korean": "Pokemon Card 151"
        },
        series: "Scarlet & Violet",
        releaseDate: "2023-09-22",
        totalCards: "165+142",
        symbol: "MEW",
        color: "from-pink-500 to-purple-600", // Mew theme
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "14.2%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Charizard ex", rarity: "SIR", price: "€110.00", image: "card-151-zard.png" },
            { name: "Blastoise ex", rarity: "SIR", price: "€45.00", image: "card-151-blast.png" },
            { name: "Venusaur ex", rarity: "SIR", price: "€40.00", image: "card-151-venu.png" },
            { name: "Erika's Invitation", rarity: "SIR", price: "€35.00", image: "card-151-erika.png" }
        ]
    },
    {
        id: "sv-03",
        name: {
            "German": "Obsidianflammen",
            "English": "Obsidian Flames",
            "Japanese": "Ruler of the Black Flame",
            "Korean": "Ruler of the Black Flame"
        },
        series: "Scarlet & Violet",
        releaseDate: "2023-08-11",
        totalCards: "190+",
        symbol: "OF",
        color: "from-red-700 to-slate-900",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "13.6%" },
            { rarity: "Illustration Rare (IR)", rate: "1/13", percentage: "7.6%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.6%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Charizard ex (Dark Tera)", rarity: "SIR", price: "€60.00", image: "card-of-zard.png" },
            { name: "Pidgeot ex", rarity: "SIR", price: "€15.00", image: "card-of-pidgeot.png" },
            { name: "Ninetales", rarity: "IR", price: "€12.00", image: "card-of-ninetales.png" }
        ]
    },
    {
        id: "sv-08",
        name: {
            "German": "Stürmische Funken",
            "English": "Surging Sparks",
            "Japanese": "Supercharged Breaker",
            "Korean": "Supercharged Breaker"
        },
        series: "Scarlet & Violet",
        releaseDate: "2024-11-08",
        totalCards: "250+",
        symbol: "SS",
        color: "from-yellow-400 to-yellow-600", // Pikachu theme
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.9%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/13", percentage: "7.7%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.7%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/87", percentage: "1.15%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/188", percentage: "0.53%" }
        ],
        topPulls: [
            { name: "Pikachu ex", rarity: "SIR", price: "€140.00", image: "card-ss-pika.png" },
            { name: "Latias ex", rarity: "SIR", price: "€45.00", image: "card-ss-latias.png" },
            { name: "Lisia's Appeal", rarity: "SIR", price: "€60.00", image: "card-ss-lisia.png" }
        ]
    }
];