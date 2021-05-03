const sideMenu = document.querySelector(".aside");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".menuToggler");

closeMenu.addEventListener("click", () => {
  console.log("Clicked");
  sideMenu.classList.remove("active");
});

openMenu.addEventListener("click", () => {
  console.log("Clicked");
  sideMenu.classList.add("active");
});


