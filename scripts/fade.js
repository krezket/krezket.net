const fadeInCards = document.querySelectorAll('.card');
const fadeInForm = document.querySelectorAll('.form');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    })
}, {
    threshold: 0.5 
});

fadeInCards.forEach(element => {
    observer.observe(element);
});
fadeInForm.forEach(element => {
    observer.observe(element);
});
