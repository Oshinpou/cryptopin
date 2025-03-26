// Load User Data from CRM Storage
function loadProfile() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'index.html'; // Redirect if not logged in
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === loggedInUser);

    if (user) {
        document.getElementById('username').innerText = user.username;
        document.getElementById('country').innerText = user.country || "No country selected";
        document.getElementById('category').innerText = user.category || "Crypto Enthusiast";
        document.getElementById('bio').innerText = user.bio || "Write a cool bio...";
        document.getElementById('followers').innerText = user.followers || 0;
        document.getElementById('following').innerText = user.following || 0;
        document.getElementById('totalPosts').innerText = user.posts?.length || 0;

        // Load Profile Picture
        document.getElementById('profilePic').src = user.profilePic || 'media/placeholder.png';
    }
}

// Upload Profile Picture
function uploadProfilePic(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('profilePic').src = e.target.result;
        updateProfilePic(e.target.result);
    };
    reader.readAsDataURL(file);
}

// Update Profile Picture in CRM
function updateProfilePic(pic) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === loggedInUser);
    users[userIndex].profilePic = pic;
    localStorage.setItem('users', JSON.stringify(users));
}

// Update Bio
function updateBio() {
    const bioText = document.getElementById('editBio').value;
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === loggedInUser);
    users[userIndex].bio = bioText;
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('bio').innerText = bioText;
}

// Logout User
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

// Toggle Burger Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Open Search, Community, Promote Links
function openSearch() { alert("Search User Coming Soon..."); }
function openCommunity() { alert("Community Feature Coming Soon..."); }
function promotePost() { alert("Promote Your Post Coming Soon..."); }

loadProfile();
