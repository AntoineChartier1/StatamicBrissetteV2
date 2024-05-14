const section_top = document.querySelector(".section_top");
const section_center = document.querySelector(".section_center");
// const txt_introuvable = document.querySelector(".txt_introuvable");
const cadenas = document.querySelector(".cadenas");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section_center,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    toggleActions: 'play reverse play reverse',
    // markers: true,
  }
});

tl.to(section_top, {
    y: -section_center.parentElement.clientHeight,
});


const tl2 = gsap.timeline()
.from(cadenas, { x: '+=100', scale:0.5, duration: 0.35 })
.set(cadenas, { clearProps: 'x,scale' });
// const timln = gsap.timeline({ paused: true });

// const timeLine = gsap.timeline();
// timeLine
//     .from(section_top, { y: 200, scale: 1, duration: 1 })
//     .to(section_top, { y: 0, scale: 0.5, duration: 1 })
//     .to(section_top, { y: 400, scale: 1, duration: 1 });

// timln.fromTo(
//     section_top,
//     { y: 0 },
//     { y: "100vh", duration: 1, ease: "none" },
//     0
// );

// const scroll_1 = ScrollTrigger.create({
//     animation: timln,
//     trigger: txt_introuvable,
//     start: "top top",
//     end: "bottom center",
//     scrub: true,
//     markers: true, // Add this line
// });
