// toggleNav function toggles menu to the right and left
// this function toggles the .nav-open class on the body tag
function toggleNav() {
    document.body.classList.toggle("nav-open");
}

// we need to bind toggleNav() to the Menu button
document.querySelector(".button").addEventListener('click', toggleNav);

// bind the 'X' icon to toggleNav()
document.querySelector(".nav-close").addEventListener('click', () => {
    toggleNav();
})