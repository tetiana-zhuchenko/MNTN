const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.querySelector('body');


// Button click
navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();

});

// Click behind navigation
window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
});

// Stopping click inside mobile navigation menu
mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();

});

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');

} 