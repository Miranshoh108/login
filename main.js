const validEmail = "john@mail.com";
const validPassword = "changeme";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");

  if (email === validEmail && password === validPassword) {
    localStorage.setItem("userEmail", email);
    window.location.href = "start.html";
  } else {
    errorElement.textContent = "Invalid email or password. Please try again.";
  }
});
