let hamburgerMenu = document.querySelector(".hamburger-menu");
let navigationBar = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    navigationBar.classList.toggle("appear");
});