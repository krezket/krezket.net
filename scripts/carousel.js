const carousel = document.querySelector('.carousel-1');
const array = ['carousel-1','carousel-2','carousel-3'];

let i = 0;

function changeClass() {
    carousel.className = array[i];    
        
        i = (i + 1) % array.length;
};

setInterval(changeClass, 3000);
