var container = document.querySelector('.container');
var registerBtn = document.querySelector('.register-btn');
var loginbtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Selectors
var registerForm = document.querySelector('.form-box.register form');
var loginForm = document.querySelector('.form-box.login form');


function showAlert(message, type) {
    let alertContainer = document.getElementById('alert-container');
    let alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alertDiv);


    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fullName = document.getElementById('fullName').value.trim();
    let username = document.getElementById('registerUsername').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('registerPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let role = "user";
    if (password !== confirmPassword) {
        showAlert('Passwords do not match.', 'danger');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let existingUser = users.find(user => user.username === username);
    if (existingUser) {
        showAlert('Username already exists. Please choose another one.', 'danger');
        return;
    }
    users.push({ fullName, username, email, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    showAlert('Registration successful! You can now log in.', 'success');
    registerForm.reset();
});

loginForm.addEventListener('submit', (e) => {
    let username = document.getElementById('loginUsername').value.trim();
    let password = document.getElementById('loginPassword').value;
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('currentUsername', user.username);
        localStorage.setItem('currentUserRole', user.role);
        showAlert('Login successful! Redirecting...', 'success');

        setTimeout(() => {
            window.location.href = 'index2.html';
        }, 1000);
    } else {
        showAlert('Invalid username or password.', 'danger');
    }
});