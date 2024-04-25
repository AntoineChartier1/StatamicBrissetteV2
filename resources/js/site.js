// This is all you.

const initApp = () => {
    const body = document.body;
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        hamburgerBtn.disabled = true;
        setTimeout(() => {
            hamburgerBtn.disabled = false;
        }, 200);
        mobileMenu.classList.remove("animate-open-menu", "animate-close-menu");
        const isMenuOpen = mobileMenu.classList.contains("hidden");

        const animationClass = isMenuOpen
            ? "animate-open-menu"
            : "animate-close-menu";

        mobileMenu.classList.add(animationClass);

        if (isMenuOpen) {
            // If the menu is opening, we can immediately remove the 'hidden' class
            mobileMenu.classList.remove("hidden");
        } else {
            // If the menu is closing, we need to wait for the animation to finish before adding the 'hidden' class
            mobileMenu.addEventListener("animationend", () => {
                mobileMenu.classList.add("hidden");
            }, { once: true });
        }

        body.classList.toggle("overflow-hidden");
        hamburgerBtn.classList.toggle("toggle-btn");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);