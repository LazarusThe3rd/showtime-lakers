import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  //raf = Request Animation Frame
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;
