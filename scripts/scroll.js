let staticHeader = document.querySelector('.glass-header-inactive');
let staticContainer= document.querySelector('.glass-container');
let nav1 = document.getElementById('nav-1');
let nav2 = document.getElementById('nav-2');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    console.log('Scroll Position:', scrollPosition);
    if (scrollPosition > 175) {
        staticHeader.className = 'glass-header-active';
        staticContainer.className = 'glass-container-inactive';
        nav1.id= 'nav-1-inactive';
        nav2.id= 'nav-2-inactive';
    }
    else if (scrollPosition < 130) {
        staticHeader.className = 'glass-header-inactive';
        staticContainer.className = 'glass-container';
        nav1.id= 'nav-1';
        nav2.id= 'nav-2';
    }
});

