// Search functionality with Fuse.js
let searchIndex = [];
let fuse = null;

// Load search index
async function initSearch() {
    try {
        const response = await fetch('/hugo-blog-hai-quy/index.json');
        searchIndex = await response.json();

        // Initialize Fuse.js with Vietnamese-friendly settings
        fuse = new Fuse(searchIndex, {
            keys: ['title', 'content', 'summary', 'categories'],
            threshold: 0.3,
            includeScore: true,
            minMatchCharLength: 2,
            ignoreLocation: true,
            useExtendedSearch: true
        });

        console.log('Search index loaded:', searchIndex.length, 'posts');
    } catch (error) {
        console.error('Error loading search index:', error);
    }
}

// Perform search
function performSearch(query) {
    if (!fuse || !query.trim()) {
        return [];
    }

    const results = fuse.search(query);
    return results.map(result => result.item);
}

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');

    if (!results.length) {
        resultsContainer.innerHTML = '<div class="no-results">Không tìm thấy kết quả</div>';
        return;
    }

    const html = results.map(post => `
        <div class="search-result-item">
            <h3><a href="${post.url}">${post.title}</a></h3>
            <p class="search-excerpt">${post.summary || post.content.substring(0, 150) + '...'}</p>
            ${post.categories ? `<div class="search-categories">${post.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}</div>` : ''}
        </div>
    `).join('');

    resultsContainer.innerHTML = html;
}

// Search input handler
let searchTimeout;
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value;
            const results = performSearch(query);
            displaySearchResults(results);
        }, 300); // Debounce
    });
}

// Initialize search when overlay opens
if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            searchInput?.focus();
            if (!fuse) {
                initSearch();
            }
        }, 100);
    });
}

// Load Fuse.js library
const fuseScript = document.createElement('script');
fuseScript.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0';
fuseScript.onload = () => {
    console.log('Fuse.js loaded successfully');
};
document.head.appendChild(fuseScript);
