// Initial Setup
const posts = [
    { title: "Bitcoin hits all-time high", content: "BTC skyrockets past $70,000!", image: "post1.jpg" },
    { title: "Ethereum 2.0 Launch", content: "Staking rewards go live for ETH holders.", image: "post2.jpg" },
    { title: "Dogecoin gains 20%", content: "Meme coin makes another unexpected surge.", image: "post3.jpg" },
    { title: "NFTs on the rise", content: "Digital art revolution continues.", image: "post4.jpg" },
    { title: "Crypto Regulation Incoming", content: "New policies expected by year-end.", image: "post5.jpg" }
];

// Render Posts on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadPosts(5);
    checkLoginStatus();
});

// Load Posts Dynamically
function loadPosts(limit) {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = "";

    posts.slice(0, limit).forEach(post => {
        const postCard = `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <img src="${post.image}" alt="${post.title}" class="post-img">
            </div>
        `;
        postFeed.innerHTML += postCard;
    });
}

// Infinite Scroll - Load More
document.getElementById('load-more').addEventListener('click', () => {
    loadPosts(posts.length);
});

// Burger Menu Toggle
document.getElementById('burger-menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
});

// Check Login Status
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('auth-btn').classList.add('hidden');
        document.getElementById('logout-btn').classList.remove('hidden');
        document.getElementById('username-display').textContent = loggedInUser;
    }
}

// Logout Button
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = "index.html";
});
