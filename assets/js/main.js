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

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)