import "./styles/reset.css";
import "./styles/main.css";
import "./styles/sections/hero.css";
import "./styles/sections/transition.css";
import "./styles/sections/intro.css";

import { heroAnimation } from "./js/animations/hero";
import { heroIntro } from "./js/animations/heroIntro";
import { heroOutro } from "./js/animations/heroOutro";
import { experienceEnter } from "./js/animations/experienceEnter.js";

if (document.querySelector(".hero")) {
  heroIntro();
  heroOutro();
  heroAnimation();
}

if (document.querySelector(".intro")) {
  experienceEnter();
}
