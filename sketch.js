var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(200,300,50,80);
  movingRectangle = createSprite(400,700,80,30);
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";
}

function draw() {
  background("white");

  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  //console.log(movingRectangle-fixedRectangle);

  if (movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2 + movingRectangle.width/2 && 
    fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2 + movingRectangle.width/2 &&
    movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2 + movingRectangle.width/2 && 
    fixedRectangle.y-movingRectangle.y<fixedRectangle.width/2 + movingRectangle.width/2 ) {
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";

  }
  else {fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green"}













  drawSprites();
}