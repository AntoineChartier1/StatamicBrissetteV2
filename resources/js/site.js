// This is all you.
// Import the Carousel class from Flowbite
import { Carousel } from 'flowbite';

const initApp = () => {
    const body = document.body;
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        body.classList.toggle("overflow-hidden"); // 
        // body.style.overflow = 'hidden';
        // mobileMenu.classList.toggle("flex");
        hamburgerBtn.classList.toggle("toggle-btn");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu); // close when clicking outside any links



    




};


document.addEventListener("DOMContentLoaded", initApp);


