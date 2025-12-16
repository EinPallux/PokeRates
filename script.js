// script.js

// State Management
let currentSearchTerm = '';
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const contentArea = document.getElementById('contentArea');

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Event Listeners
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });

    // Keyboard navigation for search (Enter to select first result)
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const visibleResults = searchResults.querySelectorAll('div[data-id]');
            if (visibleResults.length > 0) {
                selectSet(visibleResults[0].dataset.id);
                searchInput.blur();
                searchResults.classList.add('hidden');
            }
        }
    });

    // Display featured sets on page load
    displayFeaturedSets();
});

// --- Featured Sets Display ---

function displayFeaturedSets() {
    const initialState = document.getElementById('initialState');
    
    // Select featured sets: Mix of popular/newest sets across series
    const featuredSetIds = [
        'sv-11',      // Fatal Flames (newest, Mega Evolution)
        'sv-08',      // Surging Sparks (popular Pikachu)
        'sv-151',     // 151 (iconic)
        'swsh-07',    // Evolving Skies (highly sought after)
        'swsh-09',    // Brilliant Stars (Charizard Alt Art)
        'swsh-12.5'   // Crown Zenith (recent SWSH)
    ];

    const featuredSets = setsData.filter(set => featuredSetIds.includes(set.id));
    
    // Build featured sets section
    const container = document.createElement('div');
    container.className = 'fade-in';
    
    const header = `
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Featured Sets</h2>
            <p class="text-slate-500">Explore pull rates for the most popular Pokémon TCG sets</p>
        </div>
    `;

    const setCards = featuredSets.map(set => `
        <div onclick="selectSet('${set.id}')" class="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
            <div class="h-32 bg-gradient-to-br ${set.color} relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-white text-5xl font-bold opacity-20">${set.symbol}</div>
                </div>
                <div class="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white">
                    ${set.series}
                </div>
                <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-brand-600 transition-colors">${set.name['English']}</h3>
                <p class="text-xs text-slate-500 mb-3">${set.name['German']}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-slate-400">${set.totalCards} Cards</span>
                    <span class="text-xs font-medium text-slate-600">${set.releaseDate}</span>
                </div>
                <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-xs text-slate-500">Chase Card:</span>
                    <span class="text-sm font-bold text-emerald-600">${set.topPulls[0].price}</span>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = header + `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${setCards}
        </div>
        <div class="text-center mt-12">
            <p class="text-slate-400 text-sm mb-4">Looking for a specific set?</p>
            <button onclick="document.getElementById('searchInput').focus(); window.scrollTo({top: 0, behavior: 'smooth'});" class="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-brand-500/30">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Search All Sets
            </button>
        </div>
    `;

    // Replace initial state with featured sets
    if (initialState) {
        initialState.remove();
    }
    contentArea.innerHTML = '';
    contentArea.appendChild(container);
}

// --- Search Logic ---

function handleSearch(query) {
    currentSearchTerm = query.toLowerCase().trim();
    
    if (currentSearchTerm.length < 2) {
        searchResults.classList.add('hidden');
        return;
    }

    // Filter sets based on input matching ANY language name
    const matches = setsData.filter(set => {
        return Object.values(set.name).some(name => 
            name.toLowerCase().includes(currentSearchTerm)
        );
    });

    renderSearchResults(matches);
}

function renderSearchResults(matches) {
    searchResults.innerHTML = '';
    
    if (matches.length === 0) {
        searchResults.classList.add('hidden');
        return;
    }

    matches.forEach(set => {
        // Determine which language matched best to show as primary, or default to English
        const displayLang = getBestMatchLang(set, currentSearchTerm) || 'English';
        const displayName = set.name[displayLang];
        const subText = displayLang !== 'English' ? set.name['English'] : set.name['German'];

        const item = document.createElement('div');
        item.className = 'px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0 flex justify-between items-center transition-colors';
        item.dataset.id = set.id;
        item.onclick = () => selectSet(set.id);

        item.innerHTML = `
            <div>
                <div class="font-medium text-slate-900">${highlightMatch(displayName, currentSearchTerm)}</div>
                <div class="text-xs text-slate-400">${subText} • ${set.releaseDate.substring(0, 4)}</div>
            </div>
            <div class="text-xs font-bold px-2 py-1 bg-slate-100 rounded text-slate-500">${set.symbol}</div>
        `;
        searchResults.appendChild(item);
    });

    searchResults.classList.remove('hidden');
}

// Helper: Find which language key matched the search term
function getBestMatchLang(set, term) {
    for (const [lang, name] of Object.entries(set.name)) {
        if (name.toLowerCase().includes(term)) return lang;
    }
    return 'English';
}

// Helper: Bold the matching part of the text
function highlightMatch(text, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="text-brand-600 font-bold">$1</span>');
}

// --- Main View Logic ---

function selectSet(setId) {
    const set = setsData.find(s => s.id === setId);
    if (!set) return;

    // Hide search results and clear input
    searchResults.classList.add('hidden');
    searchInput.value = set.name['English']; // Set input to selected name

    renderSetDetails(set);
}

function renderSetDetails(set) {
    // Clear previous content
    contentArea.innerHTML = '';

    // Create Container
    const container = document.createElement('div');
    container.className = 'fade-in space-y-8';

    // 1. Header Section
    const header = `
        <div class="rounded-2xl bg-gradient-to-br ${set.color} p-6 sm:p-10 text-white shadow-card relative overflow-hidden">
            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div class="flex items-center gap-3 mb-2">
                        <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">${set.series}</span>
                        <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">${set.releaseDate}</span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-1">${set.name['English']}</h2>
                    <p class="text-white/80 text-lg font-light">${set.name['German']} / ${set.name['Japanese']}</p>
                </div>
                <div class="text-center md:text-right bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/10">
                    <div class="text-4xl mb-1">${set.symbol}</div>
                    <div class="text-xs font-medium opacity-75">Set Symbol</div>
                </div>
            </div>
            <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
    `;

    // 2. Pull Rates Grid
    const ratesCards = set.rates.map(rate => `
        <div class="bg-white rounded-xl p-5 border border-slate-100 shadow-soft hover:shadow-card transition-shadow flex flex-col justify-between h-full">
            <div>
                <div class="flex justify-between items-start mb-2">
                    <h4 class="font-bold text-slate-800 text-sm">${rate.rarity}</h4>
                    ${rate.note ? `<span class="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-100">${rate.note}</span>` : ''}
                </div>
                <div class="text-3xl font-extrabold text-brand-600 mb-1">${rate.percentage}</div>
            </div>
            <div class="text-xs text-slate-400 font-medium pt-3 border-t border-slate-50 mt-3">
                1 in ${rate.rate.split('/')[1]} Packs
            </div>
        </div>
    `).join('');

    const ratesSection = `
        <div>
            <h3 class="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <svg class="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 012 2h2a2 2 0 012-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Pull Rates
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                ${ratesCards}
            </div>
        </div>
    `;

    // 3. Top Pulls Section (Cards)
    const topPullsCards = set.topPulls.map(card => `
        <div class="group relative">
            <div class="aspect-[3/4] rounded-xl overflow-hidden shadow-card group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 bg-slate-200 card-placeholder border-4 border-white">
                <div class="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-4xl opacity-20 select-none">IMG</div>
            </div>
            
            <div class="mt-4 text-center">
                <h4 class="font-bold text-slate-900 leading-tight">${card.name}</h4>
                <div class="text-xs text-slate-500 mt-1 mb-2">${card.rarity}</div>
                <div class="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1 rounded-lg border border-emerald-100">
                    ${card.price}
                </div>
            </div>
        </div>
    `).join('');

    const topPullsSection = `
        <div class="pt-8 border-t border-slate-200">
            <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg class="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                Top Pulls (Chase Cards)
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                ${topPullsCards}
            </div>
        </div>
    `;

    // 4. Navigation Buttons
    const backButton = `
        <div class="pt-8 flex justify-center gap-3">
            <button onclick="displayFeaturedSets(); searchInput.value = ''; window.scrollTo({top: contentArea.offsetTop - 100, behavior: 'smooth'});" class="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Home
            </button>
            <button onclick="displayBrowsePage(); searchInput.value = ''; window.scrollTo({top: contentArea.offsetTop - 100, behavior: 'smooth'});" class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-brand-500/30">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                Browse All Sets
            </button>
        </div>
    `;

    // Assemble DOM
    container.innerHTML = header + ratesSection + topPullsSection + backButton;
    contentArea.appendChild(container);
    
    // Smooth scroll to content
    window.scrollTo({ top: contentArea.offsetTop - 100, behavior: 'smooth' });
}

// --- Quick Filters ---

function filterByLang(lang) {
    // For now, since sets are multi-lingual, we will perform a "search" for that language name
    // Or display a filtered list. Let's make it simulate searching for a common term in that language.
    // However, the prompt implies "Quick Language Filter". 
    // Let's just scroll to search and focus it with a placeholder.
    
    searchInput.focus();
    searchInput.placeholder = `Search for ${lang} sets...`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Optional: You could filter the setsData to only show sets that exist in that region 
    // if your data had region-exclusivity flags.
}

// --- Browse All Sets Page ---

function displayBrowsePage() {
    // Clear previous content
    contentArea.innerHTML = '';
    searchInput.value = '';

    const container = document.createElement('div');
    container.className = 'fade-in space-y-12';

    // Page Header
    const header = `
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Browse All Sets</h2>
            <p class="text-lg text-slate-500">Explore every Pokémon TCG set organized by series and language</p>
        </div>
    `;

    // Language Tabs
    const languageTabs = `
        <div class="flex flex-wrap justify-center gap-3 mb-8 sticky top-20 bg-slate-50 py-4 z-10 border-y border-slate-200">
            <button onclick="filterBrowseByLanguage('All')" class="browse-lang-tab active px-4 py-2 rounded-lg font-semibold text-sm transition-all" data-lang="All">
                🌍 All Languages
            </button>
            <button onclick="filterBrowseByLanguage('German')" class="browse-lang-tab px-4 py-2 rounded-lg font-semibold text-sm transition-all" data-lang="German">
                🇩🇪 German
            </button>
            <button onclick="filterBrowseByLanguage('English')" class="browse-lang-tab px-4 py-2 rounded-lg font-semibold text-sm transition-all" data-lang="English">
                🇺🇸 English
            </button>
            <button onclick="filterBrowseByLanguage('Japanese')" class="browse-lang-tab px-4 py-2 rounded-lg font-semibold text-sm transition-all" data-lang="Japanese">
                🇯🇵 Japanese
            </button>
            <button onclick="filterBrowseByLanguage('Korean')" class="browse-lang-tab px-4 py-2 rounded-lg font-semibold text-sm transition-all" data-lang="Korean">
                🇰🇷 Korean
            </button>
        </div>
    `;

    // Organize sets by series
    const scarletVioletSets = setsData.filter(set => set.series === 'Scarlet & Violet');
    const swordShieldSets = setsData.filter(set => set.series === 'Sword & Shield');

    // Build series sections
    const scarletVioletSection = buildSeriesSection('Scarlet & Violet', scarletVioletSets, 'from-red-500 to-purple-600');
    const swordShieldSection = buildSeriesSection('Sword & Shield', swordShieldSets, 'from-blue-600 to-red-600');

    const contentWrapper = `<div id="browseSetsContent">${scarletVioletSection + swordShieldSection}</div>`;

    container.innerHTML = header + languageTabs + contentWrapper;
    contentArea.appendChild(container);

    // Add tab styling
    addBrowseTabStyles();

    // Smooth scroll to content
    window.scrollTo({ top: contentArea.offsetTop - 100, behavior: 'smooth' });
}

function buildSeriesSection(seriesName, sets, gradientColor) {
    const setCards = sets.map(set => `
        <div onclick="selectSet('${set.id}')" class="browse-set-card cursor-pointer bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-brand-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-german="${set.name.German.toLowerCase()}" data-english="${set.name.English.toLowerCase()}" data-japanese="${set.name.Japanese.toLowerCase()}" data-korean="${set.name.Korean.toLowerCase()}">
            <div class="h-24 bg-gradient-to-br ${set.color} relative overflow-hidden flex items-center justify-center">
                <div class="text-white text-4xl font-bold opacity-30">${set.symbol}</div>
                <div class="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-white">
                    ${set.releaseDate}
                </div>
            </div>
            <div class="p-4">
                <div class="mb-3">
                    <h4 class="font-bold text-slate-900 text-base mb-1 hover:text-brand-600 transition-colors">${set.name['English']}</h4>
                    <div class="space-y-1">
                        <p class="text-xs text-slate-500"><span class="font-medium">🇩🇪</span> ${set.name['German']}</p>
                        <p class="text-xs text-slate-500"><span class="font-medium">🇯🇵</span> ${set.name['Japanese']}</p>
                        ${set.name['Korean'] !== set.name['Japanese'] ? `<p class="text-xs text-slate-500"><span class="font-medium">🇰🇷</span> ${set.name['Korean']}</p>` : ''}
                    </div>
                </div>
                <div class="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span class="text-xs text-slate-400">${set.totalCards} Cards</span>
                    <span class="text-xs font-bold text-emerald-600">${set.topPulls[0].price}</span>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="browse-series-section">
            <div class="flex items-center gap-3 mb-6">
                <div class="h-1 w-12 bg-gradient-to-r ${gradientColor} rounded-full"></div>
                <h3 class="text-2xl font-bold text-slate-900">${seriesName}</h3>
                <div class="h-1 flex-grow bg-slate-200 rounded-full"></div>
                <span class="text-sm font-medium text-slate-400">${sets.length} Sets</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                ${setCards}
            </div>
        </div>
    `;
}

function filterBrowseByLanguage(lang) {
    // Update active tab
    document.querySelectorAll('.browse-lang-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.lang === lang) {
            tab.classList.add('active');
        }
    });

    // Filter cards
    const allCards = document.querySelectorAll('.browse-set-card');
    
    if (lang === 'All') {
        allCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        allCards.forEach(card => {
            const langAttr = `data-${lang.toLowerCase()}`;
            card.style.display = 'block'; // Show all by default since all sets have all languages
        });
    }
}

function addBrowseTabStyles() {
    // Add dynamic styles for tabs
    const style = document.createElement('style');
    style.textContent = `
        .browse-lang-tab {
            background: white;
            color: #64748b;
            border: 2px solid #e2e8f0;
        }
        .browse-lang-tab:hover {
            border-color: #0ea5e9;
            color: #0ea5e9;
        }
        .browse-lang-tab.active {
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
            color: white;
            border-color: #0ea5e9;
            box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
        }
    `;
    document.head.appendChild(style);
}
