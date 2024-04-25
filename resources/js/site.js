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

console.log(duration); // Outputs the animation duration in milliseconds
console.log(animationDuration); // Outputs the animation duration, e.g., "2s" or "500ms"
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

        body.classList.toggle("overflow-hidden");
        hamburgerBtn.classList.toggle("toggle-btn");
        firstClick = false;
    };

    hamburgerBtn.addEventListener("click", toggleMenu);


};

document.addEventListener("DOMContentLoaded", initApp);
