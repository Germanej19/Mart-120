class Shape {
    constructor(x, y, width, height, r, g, b) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color(r, g, b);
    }
  
    draw() 
    {
      fill(this.color);
      rect(this.x, this.y, this.width, this.height);
    }
  }
  
  // create shapes
  let shape1, shape2, shape3;
  function display() {
    createCanvas(500, 600);
    shape1 = new Shape(100, 100, 20, 30, 120, 20, 200);
    shape2 = new Shape(200, 300, 50, 80, 220, 120, 20);
    shape3 = new Shape(150, 225, 35, 50, 175, 19, 200);
  }


  