var box1
var box2

function setup() 
{
  box1 = new Box(30,30,30,30,2,2);
  createCanvas(400, 400);
  box2 = new Box(350,30,30,30,-2,2)
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.moveUp();

  box2.show();
  box2.move();
  box2.moveUp();
}
