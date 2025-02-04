document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  logger.info(`Login form submitted with username: ${username}, Browser: ${navigator.userAgent}`);

  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => {
    if (response.ok) {
      logger.info(`User  ${username} logged in successfully.`);
      window.location.href = "admin.html";
    } else {
      logger.warn(`Invalid login attempt for username: ${username}`);
      alert("Invalid credentials. Please try again.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    logger.error(`Error during login for username: ${username}. Error: ${error}`);
    alert("An error occurred. Please try again.");
  });
});
