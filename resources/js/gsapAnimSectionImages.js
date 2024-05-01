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

    tl.from("#block1 img", {
        x: '-100%',  
        opacity: 0.05,
        ease: "ease-in-out",

    })
      .from("#block1 div", {
          scale: 0.92,
          stagger: 0.5,
          duration: 0.1,
          opacity: 0,
          ease: "ease-in-out",
      })
      .from("#block2 img", {
          x: '100%',  
          opacity: 0.1,
          ease: "ease-in-out",
      })
      .from("#block2 div", {
        scale: 0.92,
        stagger: 0.5,
        duration: 0.1,
        opacity: 0,
        ease: "ease-in-out",
      });
});
