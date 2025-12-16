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
});

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

    // Assemble DOM
    container.innerHTML = header + ratesSection + topPullsSection;
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