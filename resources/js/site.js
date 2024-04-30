import Lenis from 'lenis'
// This is all you.


const initApp = () => {
    const body = document.body;
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

const animationDuration = window.getComputedStyle(mobileMenu).animationDuration;

// Remove 's' or 'ms' from the end of the string and convert to a number
let duration = parseFloat(animationDuration);

// If the original duration was in seconds, convert to milliseconds
if (animationDuration.includes('s')) {
    duration *= 1000;
}

    mobileMenu.classList.remove('animate-close-menu', 'animate-open-menu');
    let firstClick = true;

    const toggleMenu = () => {
        hamburgerBtn.disabled = true;
        const isMenuOpen = mobileMenu.classList.contains("hidden");

        if (firstClick) {
            mobileMenu.classList.toggle("hidden");
            hamburgerBtn.disabled = false;
            mobileMenu.classList.toggle("animate-open-menu");
        } else {
            console.log("close");
            mobileMenu.classList.toggle("animate-open-menu");
            mobileMenu.classList.toggle("animate-close-menu");
            if (!isMenuOpen) {
                // Add a delay before toggling the 'hidden' class
                setTimeout(() => {
                    mobileMenu.classList.toggle("hidden");
                    hamburgerBtn.disabled = false;
                }, duration); // Change this value to adjust the delay
            } else {
                mobileMenu.classList.toggle("hidden");
                hamburgerBtn.disabled = false;
            }
        }

        hamburgerBtn.classList.toggle("toggle-btn");
        firstClick = false;
    };

    hamburgerBtn.addEventListener("click", toggleMenu);





// smooth scrolling 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

};

document.addEventListener("DOMContentLoaded", initApp);
