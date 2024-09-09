const fadeInCards = document.querySelectorAll('.card');

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
    threshold: 1
});

fadeInCards.forEach(element => {
    observer.observe(element);
});