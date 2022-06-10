import { Sprite } from '../../classes/sprite';

const sprites = {
  run: {
    frames: 13,
    ticksPerFrame: 1
  },
  idle: {
    frames: 21,
    ticksPerFrame: 2
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
    this.idleImageRight = images.playerIdleRight;
    this.idleImageLeft = images.playerIdleLeft;
    this.runRightImage = images.playerRunRight;
    this.runRightLeft = images.playerRunLeft;
    this.jumpImage = images.playerJump;
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
      if (this.currentSprite !== this.runRightLeft) {
        this.lastDirection = 'left';
        this.currentSprite = this.runRightLeft;
        this.frameIndex = 0;
        this.frames = sprites.run.frames;
        this.ticksPerFrame = sprites.run.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    }
  }

  idle = () => {
    if (!this.lastDirection || this.lastDirection === 'right' ) {
      if (this.currentSprite !== this.idleImageRight) {
        this.currentSprite = this.idleImageRight;
        this.frameIndex = 0;
        this.frames = sprites.idle.frames;
        this.ticksPerFrame = sprites.idle.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    } else {
      if (this.currentSprite !== this.idleImageLeft) {
        this.currentSprite = this.idleImageLeft;
        this.frameIndex = 0;
        this.frames = sprites.idle.frames;
        this.ticksPerFrame = sprites.idle.ticksPerFrame;
        this.width = this.currentSprite.width / this.frames;
      }
    }
  }

  jump = () => {
    if (this.currentSprite !== this.jumpImage) {
      this.currentSprite = this.jumpImage;
      this.frames = 11;
      this.frameIndex = 0;
      this.ticksPerFrame = 2;
      this.width = this.currentSprite.width / this.frames;
    }
  }
}