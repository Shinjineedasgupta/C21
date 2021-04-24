var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200,250,50,50);
  fixedRect.shapeColor="green";
  movingRect= createSprite(300,250,50,50);
  movingRect.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
}