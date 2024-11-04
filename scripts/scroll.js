let staticHeader = document.querySelector('.glass-header-inactive');
let staticHamburger= document.querySelector('.glass-hamburger-inactive');
let staticContainer= document.querySelector('.border-ext');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    if (scrollPosition > 175) {
        staticHeader.className = 'glass-header-active';
        staticHamburger.className = 'glass-hamburger-active';
        staticContainer.classList.add('inactive');
    }
    else if (scrollPosition < 130) {
        staticHeader.className = 'glass-header-inactive';
        staticHamburger.className = 'glass-hamburger-inactive';
        staticContainer.classList.remove('inactive');
    }
});

