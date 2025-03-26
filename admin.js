// Search User in Local Storage
function searchUser() {
    const searchUsername = document.getElementById('searchUser').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === searchUsername);

    if (user) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('user-username').textContent = user.username;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-password').textContent = user.password;
    } else {
        alert('User not found!');
        document.getElementById('user-info').style.display = 'none';
    }
}

// Show Confirmation Modal
function confirmDelete() {
    document.getElementById('deleteModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

// Delete User from Local Storage
function deleteUser() {
    const usernameToDelete = document.getElementById('user-username').textContent;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users = users.filter((u) => u.username !== usernameToDelete);
    localStorage.setItem('users', JSON.stringify(users));

    alert(`User "${usernameToDelete}" deleted successfully.`);
    document.getElementById('deleteModal').style.display = 'none';
    document.getElementById('user-info').style.display = 'none';
}
