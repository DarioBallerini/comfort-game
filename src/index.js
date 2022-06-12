import "./styles.scss";
import { init as gameInit } from "./game";

import playerIdleRight from "./assets/playerIdleRight.png";
import playerIdleLeft from "./assets/playerIdleLeft.png";
import playerRunRight from "./assets/playerRunRight.png";
import playerRunLeft from "./assets/playerRunLeft.png";
import playerJumpRight from "./assets/playerJumpRight.png";
import playerJumpLeft from "./assets/playerJumpLeft.png";
import playerFallRight from "./assets/playerFallRight.png";
import playerFallLeft from "./assets/playerFallLeft.png";

let count = 0;
const images = {};

const add = (title, src) => {
  const image = new Image();
  image.src = src;
  images[title] = image;
  count++;
}

const init = () => {
  add('playerIdleRight', playerIdleRight);
  add('playerIdleLeft', playerIdleLeft);
  add('playerRunRight', playerRunRight);
  add('playerRunLeft', playerRunLeft);
  add('playerJumpRight', playerJumpRight);
  add('playerJumpLeft', playerJumpLeft);
  add('playerFallRight', playerFallRight);
  add('playerFallLeft', playerFallLeft);
}

window.addEventListener("load", () => {
  gameInit(images);
});

init();