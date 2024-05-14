document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!

    const sectionImages = document.querySelector("#sectionImages");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionImages,
            start: "-10% 70%",
            end: "bottom 70%",
            scrub: true,
            // markers: true, 
        },
    });

    const rangees = document.querySelectorAll(".rangee");
    rangees.forEach((rangee, index) => {
        tl.from(rangee.querySelector("img"), {
            x: index % 2 === 0 ? '92%' : '-92%',  
            opacity: 1,
            ease: "ease-in-out",
        })
        .from(rangee.querySelector("div"), {
            scale: 0.92,
            stagger: 0.5,
            duration: 0.1,
            opacity: 0.5,
            ease: "ease-in-out",
        });
    });
});
