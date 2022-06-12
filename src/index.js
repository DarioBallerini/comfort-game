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

import background from "./assets/background.png";
import sky from "./assets/sky.png";
import rocks1 from "./assets/rocks_1.png";
import rocks2 from "./assets/rocks_2.png";
import clouds1 from "./assets/clouds_1.png";
import clouds2 from "./assets/clouds_2.png";
import clouds3 from "./assets/clouds_3.png";
import clouds4 from "./assets/clouds_4.png";

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
  add('sky', sky);
  add('rocks1', rocks1);
  add('rocks2', rocks2);
  add('background', background);
  add('clouds1', clouds1);
  add('clouds2', clouds2);
  add('clouds3', clouds3);
  add('clouds4', clouds4);
}

window.addEventListener("load", () => {
  gameInit(images);
});

init();