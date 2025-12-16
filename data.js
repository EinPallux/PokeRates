// data.js - WITH CARD NUMBERS

const setsData = [
    // ===== MEGA EVOLUTION SERIES ===== (NEWEST FIRST)
    {
        id: "mega-02",
        name: {
            "German": "Phantasmalflammen",
            "English": "Phantasmal Flames",
            "Japanese": "Inferno X",
            "Korean": "Inferno X"
        },
        series: "Mega Evolution",
        releaseDate: "2025-11-14",
        totalCards: "130+",
        symbol: "PFL",
        symbolImage: "symbols/pfl.png",
        color: "from-orange-500 to-purple-700",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/5", percentage: "20%" },
            { rarity: "Illustration Rare (IR)", rate: "1/9", percentage: "11.1%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/86", percentage: "1.16%" },
            { rarity: "Mega Hyper Rare (MHR)", rate: "1/500", percentage: "0.20%", note: "Extremely Rare!" }
        ],
        topPulls: [
            { name: "Mega Charizard X ex", rarity: "MHR", price: "€600.00", cardNumber: "130/094", image: "card-zard-mhr.png" },
            { name: "Mega Charizard X ex", rarity: "SIR", price: "€450.00", cardNumber: "125/094", image: "card-zard-sir.png" },
            { name: "Mega Gengar ex", rarity: "SIR", price: "€120.00", cardNumber: "126/094", image: "card-gengar-sir.png" },
            { name: "Rotom ex", rarity: "SIR", price: "€85.00", cardNumber: "126/094", image: "card-rotom-sir.png" }
        ]
    },
    {
        id: "mega-01",
        name: {
            "German": "Megaentwicklung",
            "English": "Mega Evolution",
            "Japanese": "Mega Brave / Mega Symphonia",
            "Korean": "Mega Brave / Mega Symphonia"
        },
        series: "Mega Evolution",
        releaseDate: "2025-09-26",
        totalCards: "180+",
        symbol: "MEG",
        symbolImage: "symbols/meg.png",
        color: "from-blue-600 to-pink-500",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/5", percentage: "20%" },
            { rarity: "Illustration Rare (IR)", rate: "1/9", percentage: "11.1%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/86", percentage: "1.16%" },
            { rarity: "Mega Hyper Rare (MHR)", rate: "1/500", percentage: "0.20%", note: "Extremely Rare!" }
        ],
        topPulls: [
            { name: "Mega Lucario ex", rarity: "MHR", price: "€420.00", cardNumber: "188/159", image: "card-mega-lucario.png" },
            { name: "Mega Gardevoir ex", rarity: "MHR", price: "€400.00", cardNumber: "187/159", image: "card-mega-garde.png" },
            { name: "Lillie's Determination", rarity: "SIR", price: "€320.00", cardNumber: "186/159", image: "card-mega-lillie.png" },
            { name: "Mega Venusaur ex", rarity: "SIR", price: "€65.00", cardNumber: "180/159", image: "card-mega-venu.png" }
        ]
    },

    // ===== SCARLET & VIOLET SERIES ===== (NEWEST FIRST)
    {
        id: "sv-115",
        name: {
            "German": "Weiße Flammen",
            "English": "White Flare",
            "Japanese": "White Flare",
            "Korean": "White Flare"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-07-18",
        totalCards: "090+",
        symbol: "WF",
        symbolImage: "symbols/wf.png",
        color: "from-orange-100 to-red-200",
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
            { name: "Reshiram ex", rarity: "Black White Rare", price: "€190.00", cardNumber: "120/091", image: "card-wf-resh.png" },
            { name: "Hilbert & Hilda", rarity: "SIR", price: "€150.00", cardNumber: "115/091", image: "card-wf-hilbert.png" },
            { name: "Kyurem ex", rarity: "Ultra Rare", price: "€40.00", cardNumber: "100/091", image: "card-wf-kyurem.png" }
        ]
    },
    {
        id: "sv-105",
        name: {
            "German": "Schwarze Blitze",
            "English": "Black Bolt",
            "Japanese": "Black Bolt",
            "Korean": "Black Bolt"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-07-18",
        totalCards: "090+",
        symbol: "BB",
        symbolImage: "symbols/bb.png",
        color: "from-gray-900 to-slate-700",
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
            { name: "Zekrom ex", rarity: "Black White Rare", price: "€200.00", cardNumber: "119/091", image: "card-bb-zek.png" },
            { name: "N (Natural Harmonia)", rarity: "SIR", price: "€180.00", cardNumber: "114/091", image: "card-n-sir.png" },
            { name: "Victini ex", rarity: "Masterball Holo", price: "€45.00", cardNumber: "055/091", image: "card-victini-mb.png" }
        ]
    },
    {
        id: "sv-10",
        name: {
            "German": "Schicksalsrivalen",
            "English": "Destined Rivals",
            "Japanese": "Glory of Team Rocket",
            "Korean": "Glory of Team Rocket"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-05-30",
        totalCards: "190+",
        symbol: "DR",
        symbolImage: "symbols/dr.png",
        color: "from-red-600 to-gray-900",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.7%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.7%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/87", percentage: "1.15%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/188", percentage: "0.53%" }
        ],
        topPulls: [
            { name: "Giovanni's Mewtwo ex", rarity: "SIR", price: "€110.00", cardNumber: "225/191", image: "card-dr-mewtwo.png" },
            { name: "Team Rocket's Trio", rarity: "SIR", price: "€75.00", cardNumber: "220/191", image: "card-dr-trio.png" },
            { name: "Arbok ex", rarity: "Ultra Rare", price: "€35.00", cardNumber: "200/191", image: "card-dr-arbok.png" }
        ]
    },
    {
        id: "sv-09",
        name: {
            "German": "Gemeinsam Reisen",
            "English": "Journey Together",
            "Japanese": "Battle Partners",
            "Korean": "Battle Partners"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-03-28",
        totalCards: "180+",
        symbol: "JT",
        symbolImage: "symbols/jt.png",
        color: "from-blue-400 to-green-500",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.7%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.7%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/87", percentage: "1.15%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/188", percentage: "0.53%" }
        ],
        topPulls: [
            { name: "Red & Pikachu", rarity: "SIR", price: "€95.00", cardNumber: "210/159", image: "card-jt-red.png" },
            { name: "Ash & Charizard ex", rarity: "SIR", price: "€85.00", cardNumber: "205/159", image: "card-jt-ash.png" },
            { name: "Leaf & Eevee", rarity: "SIR", price: "€55.00", cardNumber: "198/159", image: "card-jt-leaf.png" }
        ]
    },
    {
        id: "sv-085",
        name: {
            "German": "Prismatische Entwicklungen",
            "English": "Prismatic Evolutions",
            "Japanese": "Terastal Fest ex",
            "Korean": "Terastal Fest ex"
        },
        series: "Scarlet & Violet",
        releaseDate: "2025-01-17",
        totalCards: "180+",
        symbol: "PRE",
        symbolImage: "symbols/pre.png",
        color: "from-pink-400 to-cyan-400",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/5", percentage: "20%" },
            { rarity: "Illustration Rare (IR)", rate: "1/10", percentage: "10%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/14", percentage: "7.1%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/80", percentage: "1.25%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/150", percentage: "0.67%" }
        ],
        topPulls: [
            { name: "Umbreon ex", rarity: "SIR", price: "€200.00", cardNumber: "153/131", image: "card-pre-umbreon.png" },
            { name: "Sylveon ex", rarity: "SIR", price: "€120.00", cardNumber: "147/131", image: "card-pre-sylveon.png" },
            { name: "Eevee", rarity: "IR", price: "€45.00", cardNumber: "133/131", image: "card-pre-eevee.png" }
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
        symbolImage: "symbols/ss.png",
        color: "from-yellow-400 to-yellow-600",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.9%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/13", percentage: "7.7%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.7%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/87", percentage: "1.15%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/188", percentage: "0.53%" }
        ],
        topPulls: [
            { name: "Pikachu ex", rarity: "SIR", price: "€140.00", cardNumber: "238/191", image: "card-ss-pika.png" },
            { name: "Latias ex", rarity: "SIR", price: "€45.00", cardNumber: "235/191", image: "card-ss-latias.png" },
            { name: "Lisia's Appeal", rarity: "SIR", price: "€60.00", cardNumber: "242/191", image: "card-ss-lisia.png" }
        ]
    },
    {
        id: "sv-07",
        name: {
            "German": "Strahlende Perle",
            "English": "Stellar Crown",
            "Japanese": "Stellar Miracle",
            "Korean": "Stellar Miracle"
        },
        series: "Scarlet & Violet",
        releaseDate: "2024-09-13",
        totalCards: "142+",
        symbol: "SC",
        symbolImage: "symbols/sc.png",
        color: "from-yellow-300 to-orange-400",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.7%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.7%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/87", percentage: "1.15%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/188", percentage: "0.53%" }
        ],
        topPulls: [
            { name: "Galarian Moltres ex", rarity: "SIR", price: "€42.00", cardNumber: "168/142", image: "card-sc-molt.png" },
            { name: "Terapagos ex", rarity: "SIR", price: "€38.00", cardNumber: "165/142", image: "card-sc-tera.png" },
            { name: "Dusknoir ex", rarity: "Ultra Rare", price: "€20.00", cardNumber: "155/142", image: "card-sc-dusk.png" }
        ]
    },
    {
        id: "sv-065",
        name: {
            "German": "Zwielicht-Maskerade",
            "English": "Twilight Masquerade",
            "Japanese": "Transformation Mask",
            "Korean": "Transformation Mask"
        },
        series: "Scarlet & Violet",
        releaseDate: "2024-05-24",
        totalCards: "226+",
        symbol: "TM",
        symbolImage: "symbols/tm.png",
        color: "from-green-600 to-purple-600",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.7%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.7%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/87", percentage: "1.15%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/188", percentage: "0.53%" }
        ],
        topPulls: [
            { name: "Ogerpon ex (Teal Mask)", rarity: "Hyper Rare", price: "€55.00", cardNumber: "226/167", image: "card-tm-oger.png" },
            { name: "Bloodmoon Ursaluna ex", rarity: "SIR", price: "€40.00", cardNumber: "220/167", image: "card-tm-ursa.png" },
            { name: "Perrin", rarity: "SIR", price: "€35.00", cardNumber: "215/167", image: "card-tm-perrin.png" }
        ]
    },
    {
        id: "sv-06",
        name: {
            "German": "Zeitenwende",
            "English": "Temporal Forces",
            "Japanese": "Wild Force / Cyber Judge",
            "Korean": "Wild Force / Cyber Judge"
        },
        series: "Scarlet & Violet",
        releaseDate: "2024-03-22",
        totalCards: "162+",
        symbol: "TF",
        symbolImage: "symbols/tf.png",
        color: "from-purple-600 to-cyan-500",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/6", percentage: "16.7%" },
            { rarity: "ACE SPEC", rate: "1/20", percentage: "5.0%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Iron Thorns ex", rarity: "SIR", price: "€30.00", cardNumber: "215/162", image: "card-tf-thorns.png" },
            { name: "Walking Wake ex", rarity: "SIR", price: "€28.00", cardNumber: "212/162", image: "card-tf-wake.png" },
            { name: "Gouging Fire ex", rarity: "Ultra Rare", price: "€22.00", cardNumber: "200/162", image: "card-tf-fire.png" }
        ]
    },
    {
        id: "sv-05",
        name: {
            "German": "Entwicklungen in Paldea",
            "English": "Paldean Fates",
            "Japanese": "Shiny Treasure ex",
            "Korean": "Shiny Treasure ex"
        },
        series: "Scarlet & Violet",
        releaseDate: "2024-01-26",
        totalCards: "091+",
        symbol: "PF",
        symbolImage: "symbols/pf.png",
        color: "from-indigo-500 to-pink-500",
        rates: [
            { rarity: "Shiny Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Illustration Rare (IR)", rate: "1/8", percentage: "12.5%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Charizard ex (Shiny)", rarity: "SIR", price: "€75.00", cardNumber: "230/091", image: "card-pf-zard.png" },
            { name: "Mew ex (Shiny)", rarity: "SIR", price: "€50.00", cardNumber: "225/091", image: "card-pf-mew.png" },
            { name: "Mewtwo ex (Shiny)", rarity: "Ultra Rare", price: "€30.00", cardNumber: "215/091", image: "card-pf-mewtwo.png" }
        ]
    },
    {
        id: "sv-04",
        name: {
            "German": "Paradox-Rift",
            "English": "Paradox Rift",
            "Japanese": "Raging Surf",
            "Korean": "Raging Surf"
        },
        series: "Scarlet & Violet",
        releaseDate: "2023-11-03",
        totalCards: "182+",
        symbol: "PR",
        symbolImage: "symbols/pr.png",
        color: "from-teal-500 to-blue-700",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Roaring Moon ex", rarity: "SIR", price: "€35.00", cardNumber: "251/182", image: "card-pr-moon.png" },
            { name: "Iron Valiant ex", rarity: "SIR", price: "€32.00", cardNumber: "248/182", image: "card-pr-valiant.png" },
            { name: "Gholdengo ex", rarity: "Ultra Rare", price: "€15.00", cardNumber: "230/182", image: "card-pr-ghol.png" }
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
        symbolImage: "symbols/mew.png",
        color: "from-pink-500 to-purple-600",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "14.2%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Charizard ex", rarity: "SIR", price: "€110.00", cardNumber: "199/165", image: "card-151-zard.png" },
            { name: "Blastoise ex", rarity: "SIR", price: "€45.00", cardNumber: "196/165", image: "card-151-blast.png" },
            { name: "Venusaur ex", rarity: "SIR", price: "€40.00", cardNumber: "195/165", image: "card-151-venu.png" },
            { name: "Erika's Invitation", rarity: "SIR", price: "€35.00", cardNumber: "203/165", image: "card-151-erika.png" }
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
        symbolImage: "symbols/of.png",
        color: "from-red-700 to-slate-900",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "13.6%" },
            { rarity: "Illustration Rare (IR)", rate: "1/13", percentage: "7.6%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/15", percentage: "6.6%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Charizard ex (Dark Tera)", rarity: "SIR", price: "€60.00", cardNumber: "223/197", image: "card-of-zard.png" },
            { name: "Pidgeot ex", rarity: "SIR", price: "€15.00", cardNumber: "220/197", image: "card-of-pidgeot.png" },
            { name: "Ninetales", rarity: "IR", price: "€12.00", cardNumber: "200/197", image: "card-of-ninetales.png" }
        ]
    },
    {
        id: "sv-02",
        name: {
            "German": "Paldea-Entwicklung",
            "English": "Paldea Evolved",
            "Japanese": "Clay Burst / Snow Hazard",
            "Korean": "Clay Burst / Snow Hazard"
        },
        series: "Scarlet & Violet",
        releaseDate: "2023-06-09",
        totalCards: "193+",
        symbol: "PE",
        symbolImage: "symbols/pe.png",
        color: "from-blue-500 to-orange-500",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Iono", rarity: "SIR", price: "€90.00", cardNumber: "269/193", image: "card-pe-iono.png" },
            { name: "Rika", rarity: "SIR", price: "€35.00", cardNumber: "265/193", image: "card-pe-rika.png" },
            { name: "Gardevoir ex", rarity: "SIR", price: "€28.00", cardNumber: "245/193", image: "card-pe-garde.png" }
        ]
    },
    {
        id: "sv-01",
        name: {
            "German": "Karmesin & Purpur",
            "English": "Scarlet & Violet",
            "Japanese": "Scarlet ex / Violet ex",
            "Korean": "Scarlet ex / Violet ex"
        },
        series: "Scarlet & Violet",
        releaseDate: "2023-03-31",
        totalCards: "198+",
        symbol: "SV",
        symbolImage: "symbols/sv.png",
        color: "from-red-500 to-purple-600",
        rates: [
            { rarity: "Double Rare (ex)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Illustration Rare (IR)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Ultra Rare (Full Art)", rate: "1/16", percentage: "6.25%" },
            { rarity: "Special Illustration Rare (SIR)", rate: "1/32", percentage: "3.1%" },
            { rarity: "Hyper Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Miraidon ex", rarity: "SIR", price: "€55.00", cardNumber: "247/198", image: "card-sv1-miraidon.png" },
            { name: "Koraidon ex", rarity: "SIR", price: "€50.00", cardNumber: "245/198", image: "card-sv1-koraidon.png" },
            { name: "Meowscarada ex", rarity: "Ultra Rare", price: "€18.00", cardNumber: "225/198", image: "card-sv1-meow.png" }
        ]
    },

    // ===== SWORD & SHIELD SERIES =====
    {
        id: "swsh-12.5",
        name: {
            "German": "Kronenglanz",
            "English": "Crown Zenith",
            "Japanese": "VSTAR Universe",
            "Korean": "VSTAR Universe"
        },
        series: "Sword & Shield",
        releaseDate: "2023-01-20",
        totalCards: "159+",
        symbol: "CRZ",
        symbolImage: "symbols/crz.png",
        color: "from-yellow-400 to-purple-600",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/6", percentage: "16.7%" },
            { rarity: "Galarian Gallery", rate: "1/3", percentage: "33.3%" },
            { rarity: "Full Art (VSTAR)", rate: "1/10", percentage: "10%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Charizard VSTAR", rarity: "Secret Rare", price: "€140.00", cardNumber: "174/159", image: "card-crz-zard.png" },
            { name: "Mewtwo VSTAR", rarity: "Secret Rare", price: "€55.00", cardNumber: "170/159", image: "card-crz-mewtwo.png" },
            { name: "Pikachu VMAX", rarity: "Galarian Gallery", price: "€50.00", cardNumber: "GG25/GG70", image: "card-crz-pika.png" }
        ]
    },
    {
        id: "swsh-12",
        name: {
            "German": "Silberne Sturmwinde",
            "English": "Silver Tempest",
            "Japanese": "Paradigm Trigger",
            "Korean": "Paradigm Trigger"
        },
        series: "Sword & Shield",
        releaseDate: "2022-11-11",
        totalCards: "195+",
        symbol: "SIT",
        symbolImage: "symbols/sit.png",
        color: "from-slate-400 to-blue-700",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VSTAR)", rate: "1/10", percentage: "10%" },
            { rarity: "Trainer Gallery", rate: "1/4", percentage: "25%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Lugia VSTAR", rarity: "Secret Rare", price: "€85.00", cardNumber: "220/195", image: "card-sit-lugia.png" },
            { name: "Serperior VSTAR", rarity: "Secret Rare", price: "€50.00", cardNumber: "215/195", image: "card-sit-serp.png" },
            { name: "Mawile V", rarity: "Alternate Art", price: "€45.00", cardNumber: "211/195", image: "card-sit-maw.png" }
        ]
    },
    {
        id: "swsh-11",
        name: {
            "German": "Verlorener Ursprung",
            "English": "Lost Origin",
            "Japanese": "Lost Abyss / Dark Phantasma",
            "Korean": "Lost Abyss / Dark Phantasma"
        },
        series: "Sword & Shield",
        releaseDate: "2022-09-09",
        totalCards: "196+",
        symbol: "LOR",
        symbolImage: "symbols/lor.png",
        color: "from-indigo-600 to-gray-800",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VSTAR)", rate: "1/10", percentage: "10%" },
            { rarity: "Trainer Gallery", rate: "1/4", percentage: "25%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Giratina VSTAR", rarity: "Alternate Art", price: "€180.00", cardNumber: "247/196", image: "card-lor-gira.png" },
            { name: "Aerodactyl V", rarity: "Alternate Art", price: "€95.00", cardNumber: "242/196", image: "card-lor-aero.png" },
            { name: "Enamorus V", rarity: "Trainer Gallery", price: "€35.00", cardNumber: "TG20/TG30", image: "card-lor-enam.png" }
        ]
    },
    {
        id: "swsh-10",
        name: {
            "German": "Astralglanz",
            "English": "Astral Radiance",
            "Japanese": "Space Juggler / Time Gazer",
            "Korean": "Space Juggler / Time Gazer"
        },
        series: "Sword & Shield",
        releaseDate: "2022-05-27",
        totalCards: "189+",
        symbol: "ASR",
        symbolImage: "symbols/asr.png",
        color: "from-purple-500 to-pink-400",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VSTAR)", rate: "1/10", percentage: "10%" },
            { rarity: "Trainer Gallery", rate: "1/4", percentage: "25%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Machamp V", rarity: "Alternate Art", price: "€110.00", cardNumber: "225/189", image: "card-asr-machamp.png" },
            { name: "Origin Forme Palkia VSTAR", rarity: "Secret Rare", price: "€50.00", cardNumber: "215/189", image: "card-asr-palkia.png" },
            { name: "Hisuian Typhlosion V", rarity: "Trainer Gallery", price: "€35.00", cardNumber: "TG18/TG30", image: "card-asr-typh.png" }
        ]
    },
    {
        id: "swsh-09",
        name: {
            "German": "Strahlende Sterne",
            "English": "Brilliant Stars",
            "Japanese": "Star Birth",
            "Korean": "Star Birth"
        },
        series: "Sword & Shield",
        releaseDate: "2022-02-25",
        totalCards: "172+",
        symbol: "BRS",
        symbolImage: "symbols/brs.png",
        color: "from-yellow-300 to-blue-600",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VSTAR)", rate: "1/10", percentage: "10%" },
            { rarity: "Trainer Gallery", rate: "1/4", percentage: "25%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Charizard V", rarity: "Alternate Art", price: "€320.00", cardNumber: "218/172", image: "card-brs-zard.png" },
            { name: "Arceus VSTAR", rarity: "Secret Rare", price: "€65.00", cardNumber: "184/172", image: "card-brs-arc.png" },
            { name: "Marnie", rarity: "Trainer Gallery", price: "€55.00", cardNumber: "TG20/TG30", image: "card-brs-marnie-tg.png" }
        ]
    },
    {
        id: "swsh-08",
        name: {
            "German": "Fusions-Angriff",
            "English": "Fusion Strike",
            "Japanese": "Fusion Arts",
            "Korean": "Fusion Arts"
        },
        series: "Sword & Shield",
        releaseDate: "2021-11-12",
        totalCards: "264+",
        symbol: "FST",
        symbolImage: "symbols/fst.png",
        color: "from-purple-600 to-orange-500",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VMAX)", rate: "1/10", percentage: "10%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Mew VMAX", rarity: "Alternate Art", price: "€120.00", cardNumber: "315/264", image: "card-fst-mew.png" },
            { name: "Gengar VMAX", rarity: "Alternate Art", price: "€95.00", cardNumber: "310/264", image: "card-fst-gengar.png" },
            { name: "Espeon V", rarity: "Alternate Art", price: "€70.00", cardNumber: "306/264", image: "card-fst-esp.png" }
        ]
    },
    {
        id: "swsh-07",
        name: {
            "German": "Entwicklungswunder",
            "English": "Evolving Skies",
            "Japanese": "Eevee Heroes / Blue Sky Stream",
            "Korean": "Eevee Heroes / Blue Sky Stream"
        },
        series: "Sword & Shield",
        releaseDate: "2021-08-27",
        totalCards: "203+",
        symbol: "EVS",
        symbolImage: "symbols/evs.png",
        color: "from-cyan-400 to-pink-500",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VMAX)", rate: "1/10", percentage: "10%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Umbreon VMAX", rarity: "Alternate Art", price: "€420.00", cardNumber: "215/203", image: "card-evs-umbre.png" },
            { name: "Rayquaza VMAX", rarity: "Alternate Art", price: "€280.00", cardNumber: "218/203", image: "card-evs-ray.png" },
            { name: "Sylveon VMAX", rarity: "Secret Rare", price: "€65.00", cardNumber: "212/203", image: "card-evs-sylv.png" }
        ]
    },
    {
        id: "swsh-06",
        name: {
            "German": "Schaurige Herrschaft",
            "English": "Chilling Reign",
            "Japanese": "Silver Lance / Jet-Black Poltergeist",
            "Korean": "Silver Lance / Jet-Black Poltergeist"
        },
        series: "Sword & Shield",
        releaseDate: "2021-06-18",
        totalCards: "198+",
        symbol: "CRE",
        symbolImage: "symbols/cre.png",
        color: "from-blue-400 to-purple-700",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VMAX)", rate: "1/10", percentage: "10%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Shadow Rider Calyrex VMAX", rarity: "Secret Rare", price: "€80.00", cardNumber: "220/198", image: "card-cre-caly.png" },
            { name: "Blaziken VMAX", rarity: "Alternate Art", price: "€65.00", cardNumber: "215/198", image: "card-cre-blazi.png" },
            { name: "Zeraora V", rarity: "Alternate Art", price: "€55.00", cardNumber: "210/198", image: "card-cre-zera.png" }
        ]
    },
    {
        id: "swsh-05",
        name: {
            "German": "Kampfstile",
            "English": "Battle Styles",
            "Japanese": "Peerless Fighters / Jet-Black Spirit",
            "Korean": "Peerless Fighters / Jet-Black Spirit"
        },
        series: "Sword & Shield",
        releaseDate: "2021-03-19",
        totalCards: "163+",
        symbol: "BST",
        symbolImage: "symbols/bst.png",
        color: "from-orange-500 to-gray-700",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/7", percentage: "14.3%" },
            { rarity: "Full Art (VMAX)", rate: "1/10", percentage: "10%" },
            { rarity: "Alternate Art", rate: "1/36", percentage: "2.8%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Tyranitar V", rarity: "Alternate Art", price: "€75.00", cardNumber: "205/163", image: "card-bst-ttar.png" },
            { name: "Urshifu VMAX", rarity: "Secret Rare", price: "€55.00", cardNumber: "193/163", image: "card-bst-urshi.png" },
            { name: "Empoleon V", rarity: "Alternate Art", price: "€45.00", cardNumber: "198/163", image: "card-bst-emp.png" }
        ]
    },
    {
        id: "swsh-04.5",
        name: {
            "German": "Glänzendes Schicksal",
            "English": "Shining Fates",
            "Japanese": "Shiny Star V",
            "Korean": "Shiny Star V"
        },
        series: "Sword & Shield",
        releaseDate: "2021-02-19",
        totalCards: "072+",
        symbol: "SHF",
        symbolImage: "symbols/shf.png",
        color: "from-pink-400 to-blue-500",
        rates: [
            { rarity: "Shiny Rare", rate: "1/2", percentage: "50%" },
            { rarity: "Shiny Ultra Rare (V)", rate: "1/8", percentage: "12.5%" },
            { rarity: "Shiny VMAX", rate: "1/16", percentage: "6.25%" },
            { rarity: "Secret Rare (Gold)", rate: "1/52", percentage: "1.9%" }
        ],
        topPulls: [
            { name: "Charizard VMAX (Shiny)", rarity: "Shiny VMAX", price: "€280.00", cardNumber: "SV107/SV122", image: "card-shf-zard.png" },
            { name: "Skyla", rarity: "Full Art", price: "€65.00", cardNumber: "072/072", image: "card-shf-skyla.png" },
            { name: "Suicune (Shiny)", rarity: "Amazing Rare", price: "€35.00", cardNumber: "SV059/SV122", image: "card-shf-suicune.png" }
        ]
    },
    {
        id: "swsh-04",
        name: {
            "German": "Farbenschock",
            "English": "Vivid Voltage",
            "Japanese": "Amazing Volt Tackle",
            "Korean": "Amazing Volt Tackle"
        },
        series: "Sword & Shield",
        releaseDate: "2020-11-13",
        totalCards: "185+",
        symbol: "VIV",
        symbolImage: "symbols/viv.png",
        color: "from-yellow-400 to-purple-600",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/8", percentage: "12.5%" },
            { rarity: "Full Art (VMAX)", rate: "1/11", percentage: "9.1%" },
            { rarity: "Amazing Rare", rate: "1/30", percentage: "3.3%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Pikachu VMAX", rarity: "Secret Rare", price: "€120.00", cardNumber: "188/185", image: "card-viv-pika.png" },
            { name: "Charizard (Amazing Rare)", rarity: "Amazing Rare", price: "€45.00", cardNumber: "020/185", image: "card-viv-zard-ar.png" },
            { name: "Leon", rarity: "Full Art", price: "€40.00", cardNumber: "182/185", image: "card-viv-leon.png" }
        ]
    },
    {
        id: "swsh-03",
        name: {
            "German": "Fluch des Mondes",
            "English": "Darkness Ablaze",
            "Japanese": "Explosive Walker",
            "Korean": "Explosive Walker"
        },
        series: "Sword & Shield",
        releaseDate: "2020-08-14",
        totalCards: "189+",
        symbol: "DAA",
        symbolImage: "symbols/daa.png",
        color: "from-red-600 to-gray-900",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/8", percentage: "12.5%" },
            { rarity: "Full Art (VMAX)", rate: "1/11", percentage: "9.1%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Charizard VMAX", rarity: "Secret Rare", price: "€280.00", cardNumber: "201/189", image: "card-daa-zard.png" },
            { name: "Eternatus VMAX", rarity: "Secret Rare", price: "€45.00", cardNumber: "192/189", image: "card-daa-etern.png" },
            { name: "Crobat V", rarity: "Full Art", price: "€30.00", cardNumber: "182/189", image: "card-daa-crobat.png" }
        ]
    },
    {
        id: "swsh-02",
        name: {
            "German": "Flammende Finsternis",
            "English": "Rebel Clash",
            "Japanese": "Rebellion Crash",
            "Korean": "Rebellion Crash"
        },
        series: "Sword & Shield",
        releaseDate: "2020-05-01",
        totalCards: "192+",
        symbol: "RCL",
        symbolImage: "symbols/rcl.png",
        color: "from-orange-600 to-slate-800",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/8", percentage: "12.5%" },
            { rarity: "Full Art (VMAX)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Boss's Orders", rarity: "Full Art", price: "€55.00", cardNumber: "189/192", image: "card-rcl-boss.png" },
            { name: "Dragapult VMAX", rarity: "Secret Rare", price: "€35.00", cardNumber: "211/192", image: "card-rcl-drag.png" },
            { name: "Eldegoss V", rarity: "Full Art", price: "€25.00", cardNumber: "195/192", image: "card-rcl-elde.png" }
        ]
    },
    {
        id: "swsh-01",
        name: {
            "German": "Schwert & Schild",
            "English": "Sword & Shield",
            "Japanese": "Sword / Shield",
            "Korean": "Sword / Shield"
        },
        series: "Sword & Shield",
        releaseDate: "2020-02-07",
        totalCards: "202+",
        symbol: "SSH",
        symbolImage: "symbols/ssh.png",
        color: "from-blue-600 to-red-600",
        rates: [
            { rarity: "Holo Rare", rate: "1/3", percentage: "33.3%" },
            { rarity: "Ultra Rare (V)", rate: "1/8", percentage: "12.5%" },
            { rarity: "Full Art (VMAX)", rate: "1/12", percentage: "8.3%" },
            { rarity: "Secret Rare (Rainbow)", rate: "1/24", percentage: "4.2%" },
            { rarity: "Secret Rare (Gold)", rate: "1/48", percentage: "2.1%" }
        ],
        topPulls: [
            { name: "Zacian V", rarity: "Secret Rare", price: "€45.00", cardNumber: "211/202", image: "card-ssh-zacian.png" },
            { name: "Zamazenta V", rarity: "Secret Rare", price: "€40.00", cardNumber: "212/202", image: "card-ssh-zama.png" },
            { name: "Marnie", rarity: "Full Art", price: "€85.00", cardNumber: "200/202", image: "card-ssh-marnie.png" }
        ]
    }
];
