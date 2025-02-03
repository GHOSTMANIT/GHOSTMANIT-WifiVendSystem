// JavaScript to handle login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get values from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Log form submission with browser information
  logger.info(`Login form submitted with username: ${username}, Browser: ${navigator.userAgent}`);

  // Send login request to the backend
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => {
    if (response.ok) {
      // Log successful login
      logger.info(`User ${username} logged in successfully.`);
      // Redirect to the admin dashboard immediately after successful login
      window.location.href = "admin.html";  // Redirecting to the Admin Dashboard page
    } else {
      // Log failed login attempt
      logger.warn(`Invalid login attempt for username: ${username}`);
      alert("Invalid credentials. Please try again.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Log error during login
    logger.error(`Error during login for username: ${username}. Error: ${error}`);
    alert("An error occurred. Please try again.");
  });
});
