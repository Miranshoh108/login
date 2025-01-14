const userEmail = localStorage.getItem("userEmail");

if (!userEmail) {
  window.location.href = "index.html";
} else {
  document.getElementById("userEmail").textContent = userEmail;
}

document.getElementById("signOut").addEventListener("click", function () {
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";
});
