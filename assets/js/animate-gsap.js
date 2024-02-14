// lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// logo
document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementsByClassName("logoanimate");
    gsap.from(image, { opacity: 1, y: -50, duration: 1.5 });
});