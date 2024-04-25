// This is all you.

const initApp = () => {
    const body = document.body;
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");
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
                }, 1000); // Change this value to adjust the delay
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
