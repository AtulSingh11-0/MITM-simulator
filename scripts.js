// Initialize users in localStorage if not exists
if (!localStorage.getItem("users")) {
  const initialUsers = [
    { username: "user@example.com", password: "password123" },
    { username: "testuser", password: "test123" },
  ];
  localStorage.setItem("users", JSON.stringify(initialUsers));
}

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Store logged-in user info in sessionStorage
    sessionStorage.setItem("currentUser", username);
    // Redirect to success page
    window.location.href = "success.html";
  } else {
    errorMessage.textContent = "Invalid username or password";
    document.getElementById("loginForm").reset();
  }

  return false;
}
