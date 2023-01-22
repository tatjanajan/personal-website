const bars = document.querySelectorAll('.skills__bar');
const aboutItems = document.querySelectorAll('.about__item');

const scaleOptions = {
    treshold: 1,
    rootMargin: "0px 0px -20px 0px"
};

const scaleOnScroll = new IntersectionObserver(function(entries, scaleOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('skills__bar--full-width');
            scaleOnScroll.unobserve(entry.target);
        }
    })
}, scaleOptions);

bars.forEach(bar => {
    scaleOnScroll.observe(bar);
});

const slideOptions = {
    treshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('about__item--slide-in');
            slideOnScroll.unobserve(entry.target);
        }
    })
}, slideOptions);

aboutItems.forEach(item => {
    slideOnScroll.observe(item);
});