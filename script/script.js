//Toggle search input
const searchIcon=document.getElementById('searchIcon');
const headerSearchForm=document.getElementById('headerSearchForm');
const searchInput=document.getElementById('searchInput');

function toggleSearchBar(){
    searchIcon.classList.toggle('hide');
    headerSearchForm.classList.toggle('hide');
    searchInput.focus();
}

searchIcon.addEventListener('click',toggleSearchBar);

searchInput.addEventListener('blur',toggleSearchBar);


// Main seection
function startReading() {
    alert('Start reading clicked');
}


//featured section


const featuredPosts = [
    {
        image: "../images/technology.png",
        tags: ["Technology", "Design"],
        title: "The Future of Web Development",
        description: "Explore the latest trends and technologies shaping the future of web development...",
        author: "Rohit Sah",
        readTime: "5 min read"
    },
    {
        image: "../images/technology.png",
        tags: ["Technology", "Design"],
        title: "The Future of Web Development",
        description: "Explore the latest trends and technologies shaping the future of web development...",
        author: "Rohit Sah",
        readTime: "5 min read"
    },
    {
        image: "../images/technology.png",
        tags: ["Technology", "Design"],
        title: "The Future of Web Development",
        description: "Explore the latest trends and technologies shaping the future of web development...",
        author: "Rohit Sah",
        readTime: "5 min read"
    }
];

function createCard(post) {
    return `
        <article class="card">
            <div class="card-image">
                <img src="${post.image}" alt="${post.title}" height="100%" width="100%" />
            </div>
            <div class="tag-container">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="card-content">
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.description}</p>
            </div>
            <div class="card-footer">
                <div class="author">
                    <div class="author-avatar"></div>
                    <div class="author-info">
                        <span class="author-name">${post.author}</span>
                        <span class="read-time">${post.readTime}</span>
                    </div>
                </div>
                <div class="action-buttons">
                    <button class="action-button bi bi-heart"></button>
                    <button class="action-button bi bi-bookmark"></button>
                    <button class="action-button bi bi-share"></button>
                </div>
            </div>
        </article>
    `;
}

function renderFeaturedPosts() {
    const section = document.getElementById('featuredSection');
    section.innerHTML = `
        <h2 class="featured-title">Featured Posts</h2>
        <div class="cards-container">
            ${featuredPosts.map(post => createCard(post)).join('')}
        </div>
    `;

    // Add click handlers for action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('bi-heart')) {
                this.classList.toggle('active');
            }
        });
    });
}
renderFeaturedPosts();


//Popular section

const categories = [
    { id: 1, title: 'Technology' },
    { id: 2, title: 'Design' },
    { id: 3, title: 'Business' },
    { id: 4, title: 'Lifestyle' }
];

function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card';
    
    const title = document.createElement('span');
    title.className = 'category-title';
    title.textContent = category.title;
    
    card.appendChild(title);

    card.addEventListener('click', () => {
        alert(`Clicked on ${category.title}`);
    });
    
    return card;
}

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    categories.forEach(category => {
        const card = createCategoryCard(category);
        grid.appendChild(card);
    });
}

renderCategories();


