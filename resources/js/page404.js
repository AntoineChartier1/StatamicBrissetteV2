


// Wait for the page to load
window.addEventListener('load', () => {
    // After a short delay, open the storage unit
    setTimeout(() => {
        const storageUnit = document.getElementById('storage-unit');
        storageUnit.classList.remove('storage-unit-closed');
        storageUnit.classList.add('storage-unit-open');

        // After the storage unit is open, reveal the 404 sign
        const errorSign = document.getElementById('error-sign');
        errorSign.classList.remove('hidden');

        // Animate the 404 sign to catch the user's attention
        gsap.to(errorSign, {
            duration: 1,
            scale: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }, 2000);
});