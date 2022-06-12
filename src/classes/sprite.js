export class Sprite {
  constructor(options) {
    this.context = options.context;
    this.currentSprite = options.currentSprite;
    this.frames = options.frames;
    this.width = this.currentSprite.width / this.frames;
    this.height = this.currentSprite.height;
    this.scale = options.scale;
    this.ticksPerFrame = options.ticksPerFrame;
    this.tickCount = options.tickCount;
    this.frameIndex = options.frameIndex;
    this.position = options.position;
    this.gravity = options.gravity;
  }

  update = () => {
    this.tickCount += 1;
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.gravity) {
      this.velocity.y += this.gravity;
    }
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frames - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  draw() {
    this.context.drawImage(
      this.currentSprite,
      this.frameIndex * this.width, // The x-axis coordinate of the top left corner
      0, // The y-axis coordinate of the top left corner
      this.width, // The width of the sub-rectangle
      this.height, // The height of the sub-rectangle
      this.position.x, // The x coordinate
      this.position.y,// The y coordinate
      this.width * this.scale, // The width to draw the image
      this.height * this.scale // The width to draw the image
    );
  }
}