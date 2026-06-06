import "./styles/reset.css";
import "./styles/main.css";
import "./styles/sections/hero.css";
import "./styles/sections/transition.css";
import "./styles/sections/intro.css";
import "./styles/components/navbar.css";
import lenis from "./js/lenis";

import { heroAnimation } from "./js/animations/hero";
import { heroIntro } from "./js/animations/heroIntro";
import { heroOutro } from "./js/animations/heroOutro";
import { experienceEnter } from "./js/animations/experienceEnter.js";
import { videoScrub } from "./js/animations/videoScrub";
import { navbar } from "./js/animations/navbar";
import { videoShrink } from "./js/animations/videoShrink";
import { chapterReveal } from "./js/animations/chapterReveal";

if (document.querySelector(".hero")) {
  heroIntro();
  heroOutro();
  heroAnimation();
}

if (document.querySelector(".intro")) {
  experienceEnter();
  videoScrub();
  navbar();
  videoShrink();
  chapterReveal();
}
