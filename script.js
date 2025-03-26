// Burger Menu Toggle
function toggleMenu() {
  var sidebar = document.getElementById('sidebar');
  sidebar.style.left = (sidebar.style.left === '0px') ? '-250px' : '0px';
}

// Authentication Logic
document.getElementById('login-btn').onclick = function () {
  let username = prompt('Enter username');
  if (username) {
    document.getElementById('welcome-user').innerHTML = `Welcome, ${username}`;
    document.getElementById('welcome-user').style.display = 'block';
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('signup-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'block';
  } else {
    alert('Login failed! Please enter a valid username.');
  }
};

document.getElementById('logout-btn').onclick = function () {
  document.getElementById('welcome-user').style.display = 'none';
  document.getElementById('login-btn').style.display = 'block';
  document.getElementById('signup-btn').style.display = 'block';
  document.getElementById('logout-btn').style.display = 'none';
};

// Signup Button
document.getElementById('signup-btn').onclick = function () {
  let newUser = prompt('Enter a new username');
  if (newUser) {
    alert(`Account created for ${newUser}`);
  } else {
    alert('Signup failed. Please enter a valid username.');
  }
};
