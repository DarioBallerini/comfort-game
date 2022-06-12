import { Sprite } from '../../classes/sprite';

const sprites = {
  run: {
    frames: 13,
    ticksPerFrame: 1.5
  },
  idle: {
    frames: 21,
    ticksPerFrame: 1.5
  },
  jump: {
    frames: 11,
    ticksPerFrame: 1.5
  },
  fall: {
    frames: 11,
    ticksPerFrame: 1.5
  }
}

const gravity = 2;
const speed = 7;

export class Player extends Sprite {
  constructor(context, images) {
    super({
      context: context,
      currentSprite: images.playerIdleRight,
      scale: 0.2,
      tickCount: 0,
      frameIndex: 0,
      frames: sprites.idle.frames,
      ticksPerFrame: sprites.idle.ticksPerFrame,
      gravity: gravity
    })
    this.idleRightImage = images.playerIdleRight;
    this.idleLeftImage = images.playerIdleLeft;
    this.runRightImage = images.playerRunRight;
    this.runLeftImage = images.playerRunLeft;
    this.jumpRightImage = images.playerJumpRight;
    this.jumpLeftImage = images.playerJumpLeft;
    this.fallRightImage = images.playerFallRight;
    this.fallLeftImage = images.playerFallLeft;
    this.position = {
      x: 150,
      y: 0
    };
    this.velocity = {
      x: 0,
      y: 0
    }
    this.speed = speed;
    this.lastDirection;
    this.isColliding = false;
  }

  run = (lastDirection) => {
    if (lastDirection === 'right') {
      if (this.currentSprite !== this.runRightImage) {
        this.lastDirection = 'right';
        this.currentSprite = this.runRightImage;
        this.frameIndex = 0;
        this.frames = sprites.run.frames;
        this.ticksPerFrame = sprites.run.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    } else {
      if (this.currentSprite !== this.runLeftImage) {
        this.lastDirection = 'left';
        this.currentSprite = this.runLeftImage;
        this.frameIndex = 0;
        this.frames = sprites.run.frames;
        this.ticksPerFrame = sprites.run.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    }
  }

  idle = () => {
    if (!this.lastDirection || this.lastDirection === 'right' ) {
      if (this.currentSprite !== this.idleRightImage) {
        this.currentSprite = this.idleRightImage;
        this.frameIndex = 0;
        this.frames = sprites.idle.frames;
        this.ticksPerFrame = sprites.idle.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    } else {
      if (this.currentSprite !== this.idleLeftImage) {
        this.currentSprite = this.idleLeftImage;
        this.frameIndex = 0;
        this.frames = sprites.idle.frames;
        this.ticksPerFrame = sprites.idle.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    }
  }

  jump = () => {
    if (!this.lastDirection || this.lastDirection === 'right' ) {
      if (this.currentSprite !== this.jumpRightImage) {
        this.currentSprite = this.jumpRightImage;
        this.frameIndex = 0;
        this.frames = sprites.jump.frames;
        this.ticksPerFrame = sprites.jump.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    } else {
      if (this.currentSprite !== this.jumpLeftImage) {
        this.currentSprite = this.jumpLeftImage;
        this.frameIndex = 0;
        this.frames = sprites.jump.frames;
        this.ticksPerFrame = sprites.jump.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    }
  }

  fall = () => {
    if (!this.lastDirection || this.lastDirection === 'right' ) {
      if (this.currentSprite !== this.fallRightImage) {
        this.currentSprite = this.fallRightImage;
        this.frameIndex = 0;
        this.frames = sprites.fall.frames;
        this.ticksPerFrame = sprites.fall.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    } else {
      if (this.currentSprite !== this.fallLeftImage) {
        this.currentSprite = this.fallLeftImage;
        this.frameIndex = 0;
        this.frames = sprites.fall.frames;
        this.ticksPerFrame = sprites.fall.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    }

  }
}