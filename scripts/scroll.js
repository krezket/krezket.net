let staticHeader = document.querySelector('.glass-header-inactive');
let staticContainer= document.querySelector('.glass-container');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    if (scrollPosition > 175) {
        staticHeader.className = 'glass-header-active';
        staticContainer.className = 'glass-container-inactive';
    }
    else if (scrollPosition < 130) {
        staticHeader.className = 'glass-header-inactive';
        staticContainer.className = 'glass-container';
    }
});

