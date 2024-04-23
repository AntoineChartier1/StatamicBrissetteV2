document.addEventListener("DOMContentLoaded", (event) => {
    // Get the carousel element
    const carouselElement = document.getElementById("carousel-example");

    // Get the carousel items
    const carouselItems = document.querySelectorAll("[data-carousel-item]");

    const items = Array.from(carouselItems).map((el, index) => {
        return {
            position: index,
            el: el,
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
    const $prevButton = document.getElementById("data-carousel-prev");
    const $nextButton = document.getElementById("data-carousel-next");

    let isTransitioning = false;

    $prevButton.addEventListener("click", () => {
        if (!isTransitioning) {
            isTransitioning = true;
            carousel.prev();
            setTimeout(() => {
                isTransitioning = false;
            }, 300); // Replace 300 with your transition duration
        }
    });

    $nextButton.addEventListener("click", () => {
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

    carouselElement.addEventListener(
        "touchstart",
        (event) => {
            touchStartX = event.changedTouches[0].screenX;
        },
        false
    );

    carouselElement.addEventListener(
        "touchend",
        (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        },
        false
    );

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            carousel.next();
        }

        if (touchEndX > touchStartX) {
            carousel.prev();
        }
    }

    let isDragging = false;
    let startPos = 0;
    let currentPos = 0;

    carouselElement.addEventListener("mousedown", (event) => {
        isDragging = true;
        startPos = event.clientX;
    });

    carouselElement.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
        currentPos = event.clientX;
        const diff = startPos - currentPos;

        // Change slide if mouse moved more than 100px
        // Adjust this value based on your needs
        if (diff > 100) {
            carousel.next();
            isDragging = false;
        } else if (diff < -100) {
            carousel.prev();
            isDragging = false;
        }
    });

    carouselElement.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
