document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // gsap code here!

    const sectionImages = document.querySelector("#sectionImages");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionImages,
            start: "-10% 70%",
            end: "bottom 70%",
            scrub: true,
            markers: true, 
            // stagger: {
            //   each: 0.1,
            //   from: 'center',
            //   grid: 'auto',
            //   ease: 'power2.inOut',
            //   repeat: -1
            // },
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
