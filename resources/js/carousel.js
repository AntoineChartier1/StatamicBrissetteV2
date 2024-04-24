document.addEventListener("DOMContentLoaded", (event) => {
    const carousel = document.querySelector(".carousel");

    let isDragging = false;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
    }

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = e.pageX;
    };

    const dragStop = (e) => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
});
