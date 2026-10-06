const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  successMsg.style.display = "block";

  // clear inputs
  form.reset();

  // hide message after 3 seconds
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});

