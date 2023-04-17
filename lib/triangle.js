module.exports= Triangle 
class Triangle {
    constructor(shapeSelect) {
    this.shapeSelect = shapeSelect;
  }
}
const newTriangle = new Triangle(shapeSelect).render() 
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="200,10 250,190 160,210" fill="blue" />

  </svg>`;
