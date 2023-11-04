function toggleDropdown(element) {
  element.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach(function(element) {
  element.addEventListener("click", function() {
    toggleDropdown(this.parentNode);
  });
});

