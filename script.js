window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    console.log('Scroll Position:', scrollPosition);
    if (scrollPosition > 300) {
        console.log("New header")
    }
});

