let hamburgerMenu = document.querySelector(".hamburger-menu");
let navigationBar = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
    if (navigationBar.style.display === "block") {
        navigationBar.style.display = "none";
    } 
    else {
        navigationBar.style.display = "block";
    }
});