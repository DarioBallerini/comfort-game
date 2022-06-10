import { Player } from "./components/Player/Player";

let player;
let context;
let canvas;
let keyPresses = {};
let keys = {
  right: false,
  left: false,
  up: false,
  down: false,
}
const gravity = 1;

export const init = (images) => {
  canvas = document.querySelector('canvas');
  context = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  player = new Player(context, images);
  gameLoop();
};

const checkPlayerVelocity = () => {
  if (keys.right && player.position.x < 450) {
    player.run('right');
    player.velocity.x = player.speed;
  } else if (keys.left && player.position.x > 100) {
    player.run('left');
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right) {
      player.run('right');
    } else if (keys.left) {
      player.run('left')
    } else {
      player.idle();
    }
  }
}

const gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
  checkPlayerVelocity();
  player.draw();
  player.update();
  window.requestAnimationFrame(gameLoop);
}


window.addEventListener('keydown', ({key}) => {
  switch (key) {
    case 'w':
      player.velocity.y -= 25;
      break;
    case 'a':
      keys.left = true;
      break;
    case 'd':
      keys.right = true;
      break;
    default:
      break;
  }
});

window.addEventListener('keyup', ({key}) => {
  switch (key) {
    case 'w':
      break;
    case 'a':
      keys.left = false;
      break;
    case 'd':
      keys.right = false;
      break;
    default:
      break;
  }
});