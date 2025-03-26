// Load Bio from Local CRM Storage
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

// Update Bio Confirmation
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

// Hide Bio Buttons for Visitors
if (typeof profileOwner !== 'undefined' && profileOwner !== loggedInUser.username) {
    document.querySelectorAll('.hidden-for-visitors').forEach(btn => {
        btn.style.display = 'none';
    });
    document.getElementById('bioText').style.display = 'none';
} else {
    loadBio(loggedInUser.username);
}
