// This is all you.

const initApp = () => {
    const body = document.body;
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        hamburgerBtn.disabled = true;

        mobileMenu.classList.remove("animate-open-menu", "animate-close-menu");
        const isMenuOpen = mobileMenu.classList.contains("hidden");
        const animationClass = isMenuOpen ? "animate-open-menu" : "animate-close-menu";

        if(isMenuOpen) {
            mobileMenu.classList.toggle("hidden");
            hamburgerBtn.disabled = false;
        }else
        {
            mobileMenu.addEventListener("animationend", () => {
                mobileMenu.classList.toggle("hidden");
                hamburgerBtn.disabled = false;
            }, { once: true });
        }

        mobileMenu.classList.add(animationClass);

        body.classList.toggle("overflow-hidden");
        hamburgerBtn.classList.toggle("toggle-btn");

    };

    hamburgerBtn.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
