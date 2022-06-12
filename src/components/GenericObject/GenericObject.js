export class GenericObject {
  constructor({x, y, image}, context) {
    this.position = {
      x,
      y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.context = context;
  }

  draw = () => {
    this.context.drawImage(this.image, this.position.x, this.position.y);
  }
}