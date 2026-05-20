// =========================
// AGROMINA GROUP WEBSITE
// File: script.js
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// Header shadow saat scroll
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
