// Upload Media for Post
let uploadedMedia = null;
function uploadMedia(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        uploadedMedia = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Create Post
function createPost() {
    const text = document.getElementById('postText').value;
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.username === loggedInUser);

    const newPost = {
        id: Date.now(),
        text,
        media: uploadedMedia,
        likes: 0,
        comments: [],
        pinned: false,
        uniqueCode: `CP-${Date.now()}`
    };

    users[userIndex].posts = users[userIndex].posts || [];
    users[userIndex].posts.push(newPost);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('postText').value = '';
    uploadedMedia = null;
    loadPosts();
}

// Load Posts
function loadPosts() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === loggedInUser);
    const posts = user?.posts || [];

    let postHTML = '';
    posts.forEach(post => {
        postHTML += `
            <div class="post">
                <p>${post.text}</p>
                ${post.media ? `<img src="${post.media}" width="100%">` : ''}
                <p><strong>Code:</strong> ${post.uniqueCode}</p>
                <button onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;
    });

    document.getElementById('postContainer').innerHTML = postHTML;
}

// Delete Post
function deletePost(postId) {
    if (confirm('Are you sure to delete this post?')) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.username === loggedInUser);
        users[userIndex].posts = users[userIndex].posts.filter(post => post.id !== postId);
        localStorage.setItem('users', JSON.stringify(users));
        loadPosts();
    }
}

// Load posts on profile load
loadPosts();
