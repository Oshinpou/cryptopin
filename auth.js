// Local CRM for User Data
let users = JSON.parse(localStorage.getItem('users')) || {};

// Handle Sign Up and Login
const authForm = document.getElementById('auth-form');
const authBtn = document.getElementById('auth-btn');
const switchToLogin = document.getElementById('switch-to-login');

let isLoginMode = false;

// Toggle Login/Sign Up
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    document.getElementById('form-title').innerText = isLoginMode ? 'Login' : 'Sign Up';
    authBtn.innerText = isLoginMode ? 'Login' : 'Sign Up';
    switchToLogin.innerHTML = isLoginMode ? "Don't have an account? <a href='#'>Sign Up</a>" : "Already have an account? <a href='#'>Login</a>";
});

// Handle Authentication
authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (isLoginMode) {
        // Handle Login
        if (users[username] && users[username].password === password) {
            alert(`Welcome back, ${username}!`);
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'index.html'; // Redirect to Homepage
        } else {
            alert('Invalid credentials. Please try again.');
        }
    } else {
        // Handle Sign Up
        if (users[username]) {
            alert('Username already exists. Try another one.');
        } else {
            users[username] = { email, password };
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully. Please login.');
            isLoginMode = true;
            document.getElementById('form-title').innerText = 'Login';
            authBtn.innerText = 'Login';
        }
    }
});

// Forgot Password
document.getElementById('forgot-password').addEventListener('click', () => {
    const email = prompt('Enter your registered email:');
    let userFound = false;
    for (let username in users) {
        if (users[username].email === email) {
            alert(`Password for ${username}: ${users[username].password}`);
            userFound = true;
            break;
        }
    }
    if (!userFound) {
        alert('No account found with this email.');
    }
});

// Delete Account
document.getElementById('delete-account').addEventListener('click', () => {
    const username = prompt('Enter your username to delete:');
    if (users[username]) {
        const confirmation = confirm(`Are you sure you want to delete ${username}'s account?`);
        if (confirmation) {
            delete users[username];
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account deleted successfully.');
        }
    } else {
        alert('No account found with this username.');
    }
});

// Admin Panel - Search User
function searchUser() {
    const searchInput = document.getElementById('search-user').value.trim();
    if (users[searchInput]) {
        const user = users[searchInput];
        document.getElementById('user-details').innerHTML = `
            <p><strong>Username:</strong> ${searchInput}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Password:</strong> ${user.password}</p>
        `;
    } else {
        document.getElementById('user-details').innerHTML = '<p>User not found.</p>';
    }
}

// Check if Logged In
if (localStorage.getItem('loggedInUser')) {
    const loggedInUser = localStorage.getItem('loggedIn
