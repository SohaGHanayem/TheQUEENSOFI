function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

var navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("active");
  });
});
