import { Player } from "./components/Player/Player";

let player;
let context;
let canvas;
let keys = {
  right: false,
  left: false,
  up: false,
  down: false,
}

export const init = (images) => {
  canvas = document.querySelector('canvas');
  context = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  player = new Player(context, images);
  gameLoop();
};

const moveSprites = () => {
  // animate jump and fall
  if (player.velocity.y > 0) {
    player.fall();
  } else if (player.velocity.y < 0) {
    player.jump()
  }

  // animate right and left
  if (keys.right && player.position.x < 450) {
    if (player.isColliding) {
      player.run('right');
    }
    player.velocity.x = player.speed;
  } else if (keys.left && player.position.x > 100) {
    if (player.isColliding) {
      player.run('left');
    }
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right) {
      if (player.isColliding) {
        player.run('right');
      }
    } else if (keys.left) {
      if (player.isColliding) {
        player.run('left');
      }
    }
  }
}

const collisionDetection = () => {
  if (
    player.position.y + player.height * player.scale <= innerHeight
    && player.position.y + player.height * player.scale + player.velocity.y >= innerHeight
  ) {
    player.isColliding = true;
    player.velocity.y = 0;
    if (!keys.right && !keys.left) {
      player.idle();
    }
  } else {
    if (player.velocity.y > 0) {
      player.fall();
    }
    player.isColliding = false;
  }
}

const gameLoop = () => {
  window.requestAnimationFrame(gameLoop);
  context.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
  moveSprites();
  player.draw();
  player.update();
  collisionDetection();
}


window.addEventListener('keydown', ({key}) => {
  switch (key) {
    case 'w':
      if (player.isColliding) {
        player.velocity.y -= 30;
        player.jump();
      }
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
      player.idle();
      break;
    case 'd':
      keys.right = false;
      player.idle();
      break;
    default:
      break;
  }
});