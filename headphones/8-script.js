document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
    this.classList.toggle("active");
  });
