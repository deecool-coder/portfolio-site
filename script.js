const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
