// Get Logged-In User from Local Storage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Load Bio on Page Load
if (loggedInUser) {
    loadBio(loggedInUser.username);
} else {
    // Redirect to login page if not logged in
    window.location.href = 'signup-login.html';
}

// Load Bio from Local Storage by Username
function loadBio(username) {
    const storedBio = localStorage.getItem(`bio_${username}`);
    if (storedBio) {
        document.getElementById('bioDisplay').innerText = storedBio;
    } else {
        document.getElementById('bioDisplay').innerText = "No bio added yet.";
    }
}

// Upload Bio to Local Storage
function uploadBio() {
    const bioContent = document.getElementById('bioText').value.trim();
    if (bioContent === '') {
        alert('Bio cannot be empty!');
        return;
    }
    localStorage.setItem(`bio_${loggedInUser.username}`, bioContent);
    document.getElementById('bioDisplay').innerText = bioContent;
    alert('Bio uploaded successfully!');
}

// Update Bio and Save to Local Storage
function updateBio() {
    const bioContent = document.getElementById('bioText').value.trim();
    if (bioContent === '') {
        alert('Bio cannot be empty!');
        return;
    }
    localStorage.setItem(`bio_${loggedInUser.username}`, bioContent);
    document.getElementById('bioDisplay').innerText = bioContent;
    alert('Bio updated successfully!');
}

// Hide Buttons for Visitors
if (typeof profileOwner !== 'undefined' && profileOwner !== loggedInUser.username) {
    document.querySelectorAll('.hidden-for-visitors').forEach(btn => {
        btn.style.display = 'none';
    });
    document.getElementById('bioText').style.display = 'none';
}
