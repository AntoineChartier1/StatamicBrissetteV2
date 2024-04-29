document.addEventListener("DOMContentLoaded", (event) => {

    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper button");
    const carouselChildrens = [...carousel.children]
    

    let isDragging = false, startX, startScrollLeft, timeoutId;

    let slidePerView = 1;

    carouselChildrens.slice(-slidePerView).reverse().forEach((slide) => {
        carousel.insertAdjacentHTML("afterbegin", slide.outerHTML);
    });
    carouselChildrens.slice(0, slidePerView).forEach((slide) => {
        carousel.insertAdjacentHTML("beforeend", slide.outerHTML);
    });


    // Add event listeners to the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {  
           carousel.scrollLeft += btn.id === "left" ? -carousel.querySelector(".slide").offsetWidth : carousel.querySelector(".slide").offsetWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX -startX);
    };

    const dragStop = (e) => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
        if(window.innerWidth < 800) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += carousel.querySelector(".slide").offsetWidth, 5000);
    }
    autoPlay();

    const infiniteScroll = () => {
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    }

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});
