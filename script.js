// script.js - navbar open/close (clean, no duplicates)
const bar = document.getElementById('bar');       // open button (hamburger)
const closeBtn = document.getElementById('close'); // close icon inside nav
const navbar = document.getElementById('navbar'); // nav panel element

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}

// optional enhancement: close menu when clicking outside (for better UX)
document.addEventListener('click', function(e){
    if (navbar && bar && !navbar.contains(e.target) && !bar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});
