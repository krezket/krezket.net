let staticHeader = document.querySelector('.glass-header-inactive');
let staticContainer= document.querySelector('.glass-container');
let nav1 = document.querySelector('.nav-1');
let nav2 = document.querySelector('.nav-2');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    console.log('Scroll Position:', scrollPosition);
    if (scrollPosition > 175) {
        staticHeader.className = 'glass-header-active';
        staticContainer.className = 'glass-container-inactive';
        nav1.className = 'nav-1-inactive';
        nav2.className = 'nav-2-inactive';
    }
    else if (scrollPosition < 130) {
        staticHeader.className = 'glass-header-inactive';
        staticContainer.className = 'glass-container';
        nav1.className = 'nav-1';
        nav2.className = 'nav-2';
    }
});

