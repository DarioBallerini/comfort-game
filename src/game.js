import { GenericObject } from "./components/GenericObject/GenericObject";
import { Player } from "./components/Player/Player";

let player;
let background = [];
let clouds = [];
let context;
let canvas;
let keys = {
  right: false,
  left: false,
  up: false,
  down: false,
}
let scrollOffset = 0;

export const init = (images) => {
  canvas = document.querySelector('canvas');
  context = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  player = new Player(context, images);
  background = [
    new GenericObject({x: 0, y: 0, image: images.sky}, context),
    new GenericObject({x: 0, y: 0, image: images.rocks1}, context),
    new GenericObject({x: 0, y: 0, image: images.rocks2}, context)
  ];
  clouds = [
    new GenericObject({x: 0, y: 0, image: images.clouds1}, context),
    new GenericObject({x: images.clouds1.width, y: 0, image: images.clouds1}, context)
  ];
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
  if (keys.right && player.position.x < 450 || keys.right && scrollOffset / 4 >= background[0].image.width - canvas.width && player.position.x + player.width * player.scale <= background[0].image.width - (background[0].image.width - canvas.width)) {
    if (player.isColliding) {
      player.run('right');
    }
    player.velocity.x = player.speed;
  } else if (keys.left && player.position.x > 100 || keys.left && scrollOffset === 0 && player.position.x > 0) {
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
      if (scrollOffset / 4 < background[0].image.width - canvas.width) {
        scrollOffset += player.speed;
        background.forEach(element => element.position.x -= player.speed / 4);
        clouds.forEach(cloud => cloud.position.x -= player.speed / 3);
      }
    } else if (keys.left) {
      if (player.isColliding) {
        player.run('left');
      }
      if (scrollOffset > 0) {
        scrollOffset -= player.speed;
        background.forEach(element => element.position.x += player.speed / 4);
        clouds.forEach(cloud => cloud.position.x += player.speed / 3);
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
  background.forEach(element => element.draw());
  clouds.forEach(cloud => {
    cloud.draw();
    cloud.position.x -= 0.5;
  });
  if (clouds[clouds.length- 1].position.x + clouds[0].image.width <= clouds[0].image.width) {
    clouds.push(new GenericObject({x: clouds[0].image.width, y: 0, image: clouds[0].image}, context));
    if (clouds.length > 4) {
      clouds.shift();
    }
  }
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