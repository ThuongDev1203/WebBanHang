document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    // Your login validation logic here
    // Example:
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email === 'example@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password!');
    }
});
