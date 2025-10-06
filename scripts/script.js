let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  prevScrollPos = currentScrollPos;
});
