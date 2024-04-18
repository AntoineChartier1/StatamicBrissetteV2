// This is all you.
// Import the Carousel class from Flowbite
import { Carousel } from 'flowbite';

const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        // mobileMenu.classList.toggle("flex");
        hamburgerBtn.classList.toggle("toggle-btn");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu); // close when clicking outside any links



    


// Get the carousel element
const carouselElement = document.getElementById('carousel-example');

// Get the carousel items
const carouselItems = document.querySelectorAll('[data-carousel-item]');

const items = Array.from(carouselItems).map((el, index) => {
    return {
        position: index,
        el: el
    };
});
// const items = [
//     {
//         position: 0,
//         el: document.getElementById('carousel-item-1'),
//     },
//     {
//         position: 1,
//         el: document.getElementById('carousel-item-2'),
//     },
//     {
//         position: 2,
//         el: document.getElementById('carousel-item-3'),
//     },
//     // Add more items as needed...
// ];

// Set the options
const options = {
    // Add your options here...
    interval: 6000, // interval pour le carousel automatique (static / slide)
};

// Create the carousel
const carousel = new Carousel(carouselElement, items, options);

// Add event listeners for the next and previous buttons
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');


let isTransitioning = false;


$prevButton.addEventListener('click', () => {
    if (!isTransitioning) {
        isTransitioning = true;
        carousel.prev();
        setTimeout(() => {
            isTransitioning = false;
        }, 300); // Replace 300 with your transition duration
    }
});

$nextButton.addEventListener('click', () => {
    if (!isTransitioning) {
        isTransitioning = true;
        carousel.next();
        setTimeout(() => {
            isTransitioning = false;
        }, 300); // Replace 300 with your transition duration
    }
});



// Add touch event listeners for swipe gestures
let touchStartX = 0;
let touchEndX = 0;

carouselElement.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, false);

carouselElement.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX) {
        carousel.next();
    }
    
    if (touchEndX > touchStartX) {
        carousel.prev();
    }
}


};

document.addEventListener("DOMContentLoaded", initApp);
