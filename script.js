const mediaQuery = window.matchMedia("(max-width: 450px)");

function openMenu() {
  document.getElementById("nav").style.transform = "translateX(0)";
  document.getElementById("ham").style.display = "none";
  document.getElementById("close").style.display = "flex";
}

function closeMenu() {
  document.getElementById("nav").style.transform = "translateX(100%)";
  document.getElementById("close").style.display = "none";
  document.getElementById("ham").style.display = "flex";
}

function closeMenuFromLink() {
  document.getElementById("nav").style.transform = "translateX(100%)";
  document.getElementById("close").style.display = "none";
  document.getElementById("ham").style.display = "flex";
}

function setUpMenu(e) {
  const hamburger = document.getElementById("ham");
  const xBtn = document.getElementById("close");
  const navLinks = document.querySelectorAll(".nav-link");

  if (e.matches) {
    // Mobile view
    hamburger.style.display = "flex";
    xBtn.style.display = "none";

    hamburger.addEventListener("click", openMenu);
    xBtn.addEventListener("click", closeMenu);

    navLinks.forEach(function(link) {
      link.addEventListener("click", closeMenuFromLink);
    });
  } else {
    // Desktop view
    hamburger.style.display = "none";
    xBtn.style.display = "none";
    // document.getElementById("nav").style.transform = "translateX(0)";
  }
}

// Initial setup
setUpMenu(mediaQuery);

// Listen for screen size changes
mediaQuery.addEventListener("change", setUpMenu);
