const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const amountSlides = mainSlide.querySelectorAll('div').length;

activeSlideIndex = 0;

sideBar.style.top = `-${100 * (amountSlides - 1)}vh`;

downBtn.addEventListener('click', () => {
    changeSlide('down');
});
upBtn.addEventListener('click', () => {
    changeSlide('up');
});

document.addEventListener('keydown', (e) => {
    if (e.key = 'arrowDown') {
        changeSlide('down');
    } else if (e.key = 'arrowUp') {
        changeSlide('up');
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex = activeSlideIndex === amountSlides-1
        ? 0
        : ++activeSlideIndex;
    } else if (direction === 'down') {
        activeSlideIndex = activeSlideIndex === 0
        ? amountSlides - 1
        : --activeSlideIndex;
    }
    
    mainSlide.style.transform = `translateY(-${100 * activeSlideIndex}vh)`;
    sideBar.style.transform = `translateY(${100 * activeSlideIndex}vh)`;
}
