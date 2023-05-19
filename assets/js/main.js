/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"); 
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
})

/*===== MENU HIDDEN =====*/
navClose.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
})

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))