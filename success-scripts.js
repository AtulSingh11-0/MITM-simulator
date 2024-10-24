// Check if user is logged in
const currentUser = sessionStorage.getItem("currentUser");
if (!currentUser) {
  window.location.href = "index.html";
}

// Display username
document.getElementById("username").textContent = currentUser;

function handlePasswordReset(event) {
  event.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const statusMessage = document.getElementById("statusMessage");

  if (newPassword !== confirmPassword) {
    statusMessage.textContent = "Passwords do not match!";
    statusMessage.className = "status-message error-status";
    return false;
  }

  // Update password in localStorage
  const users = JSON.parse(localStorage.getItem("users"));
  const userIndex = users.findIndex((u) => u.username === currentUser);

  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    statusMessage.textContent = "Password updated successfully!";
    statusMessage.className = "status-message success-status";
    document.getElementById("resetForm").reset();
  }

  return false;
}

function handleLogout() {
  sessionStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
