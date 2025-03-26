// Check user status on load
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    loadPosts();
});

// Open and Close Popup
function openAuthPopup() {
    document.getElementById('authPopup').style.display = 'block';
}
function closeAuthPopup() {
    document.getElementById('authPopup').style.display = 'none';
}

// Authenticate User (Signup/Login)
function authenticate() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const user = { username, email, password, points: 0 };
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        closeAuthPopup();
        checkLoginStatus();
        alert('✅ Account Created / Logged In Successfully');
    } else {
        alert('❌ Please fill all fields!');
    }
}

// Check Login Status
function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        document.getElementById('authButton').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
        document.getElementById('profileLink').innerText = `Welcome, ${user.username}`;
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('loggedInUser');
    location.reload();
}

// Load Random Posts
function loadPosts() {
    const posts = [
        { id: 1, username: 'cryptoKing', content: 'BTC to the moon!' },
        { id: 2, username: 'ethQueen', content: 'ETH 2.0 update soon.' },
        { id: 3, username: 'nftMaster', content: 'NFTs are booming!' }
    ];
    let postHTML = '';
    posts.forEach(post => {
        postHTML += `
            <div class="post">
                <h4>@${post.username}</h4>
                <p>${post.content}</p>
            </div>
        `;
    });
    document.getElementById('posts').innerHTML = postHTML;
}

// Send Message in Chat
function sendMessage() {
    const message = document.getElementById('chatInput').value;
    if (message) {
        const chatBox = document.getElementById('chatMessages');
        chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        document.getElementById('chatInput').value = '';
    }
}
