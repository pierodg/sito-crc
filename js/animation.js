gsap.registerPlugin(ScrollTrigger);

gsap.to(".fade-2, .fade-1",
{
    scrollTrigger: {
        trigger: ".fade-2, .fade-1",
        markers: true,
        start: "100px",
        toggleActions:"play none restart none"
    },
        duration: 2, 
        x: 300,
        ease: Sine.easeOut, 
        opacity: 1 });
/*
gsap.to(".fade-1", {
    scrollTrigger: {
        trigger: ".fade-1",
        markers: true,
        start: "0%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 3
});

gsap.to(".fade-2", {
    scrollTrigger: {
        trigger: ".fade-2",
        markers: true,
        start: "0%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 3
});*/

