document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    const correctUsername = 'testUser';
    const correctPassword = 'testPassword';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        document.getElementById('error-message').innerText = '';

        if (username === "" || password === "") {
            document.getElementById('error-message').innerText = "Both fields are required.";
            return;
        }

        if (username === correctUsername && password === correctPassword) {
            alert('Login successful!');
            window.location.href = "dashboard.html";  // Redirect to the dashboard
        } else {
            document.getElementById('error-message').innerText = 'Invalid username or password';
        }
        if (username === correctUsername && password === correctPassword) {
            alert('Login successful!');
            sessionStorage.setItem('loggedIn', 'true');  // Store login status
            window.location.href = "dashboard.html";     // Redirect to the dashboard
        }
        
    });
});
