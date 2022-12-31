const hamburger = document.querySelector('.navbar__hamburger');
const links = document.querySelectorAll('.navbar__item');
const socialLinks = document.querySelectorAll('.header__social-link');
const html = document.documentElement;

hamburger.addEventListener('click', () => {
    const isOpened = hamburger.getAttribute('aria-expanded') === "true";

    if (isOpened) {
        menuClose();
    } else {
        menuOpen();
    }
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuClose();
    })
})

socialLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuClose();
    })
})

const menuOpen = () => {
    hamburger.setAttribute('aria-expanded', "true");
    html.classList.add('menu-overlay');

    socialLinks.forEach((link) => {
        link.setAttribute('tabindex', "-1");
    })
}

const menuClose = () => {
    hamburger.setAttribute('aria-expanded', "false");
    html.classList.remove('menu-overlay');

    socialLinks.forEach((link) => {
        link.removeAttribute('tabindex');
    })
}