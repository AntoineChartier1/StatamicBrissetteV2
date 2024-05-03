document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // gsap code here!

    const sectionCTA = document.querySelector("#sectionCTA");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionCTA,
            start: "top center",
            end: "bottom 40%",
            duration: 0.05,
            // markers: true,
        },
    });


    

    tl.from(sectionCTA, {
        y: '-10%',
        opacity: 0,
        ease: "ease-in-out",
    });
    


});
