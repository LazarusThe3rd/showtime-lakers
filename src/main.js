import "./styles/reset.css";
import "./styles/main.css";
import "./styles/sections/hero.css";
import "./styles/sections/intro.css";

import lenis from "./js/lenis";

import { heroAnimation } from "./js/animations/hero";
import { heroIntro } from "./js/animations/heroIntro";
import { heroOutro } from "./js/animations/heroOutro";

heroOutro();

heroIntro();

heroAnimation();
