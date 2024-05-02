document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // gsap code here!

    const sectionSVG = document.querySelector("#sectionSVG");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionSVG,
            start: "top 40%",
            end: "bottom 60%",
            duration: 0.2,
            scrub: true,
        },
    });

    const svgElements = sectionSVG.querySelectorAll("#txtSousSVG svg");
    const svgSousTxt = sectionSVG.querySelectorAll("#txtSousSVG p");
    

    tl.from('#txtBlock', {
        y: '-40%',
        opacity: 0,
        ease: "ease-in-out",
    });
    
    svgElements.forEach((svg, index) => {
      // Get the corresponding text element
      let txt = svgSousTxt[index];
    
      tl.from(svg, {
        scale: 0.92,
        opacity: 0,
        ease: "ease-in-out",
      })
      .from(txt, {
        y: '-60%',
        opacity: 0,
        ease: "ease-in-out",
      }, "-=0.5"); // This will start the text animation 0.5 seconds before the end of the SVG animation
    });



    // Loop through each SVG element
    svgElements.forEach((element, index) => {

        element.addEventListener("mouseover", function () {
            gsap.to(this, { scale: 1.2, duration: 1 });
        });

        // Add event listener for mouseout
        element.addEventListener("mouseout", function () {
            gsap.to(this, { scale: 1, duration: 1 });
        });
    });
});
