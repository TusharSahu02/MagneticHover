var circle = document.querySelector(".circle");
var frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
  });
});

frames.forEach((frame) => {
  frame.addEventListener("mouseenter", function (dets) {
    var dims = frame.getBoundingClientRect();
    var xstart = dims.x;
    var xend = dims.x + dims.width;

    var zo = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    gsap.to(circle, {
      scale: 6,
    });
    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw",
    });
    gsap.to(frame.children, {
      x: lerp(-50, 50, zo),
      duration: 0.3,
    });
  });
  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: "#111",
      y: 0,
    });
    gsap.to(frame.children, {
      x: 0,
      duration: 0.3,
    });
  });
});
