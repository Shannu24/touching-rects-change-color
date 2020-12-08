
var rect1,rect2;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 30, 70);
  rect1.shapeColor=("blue");

  rect2=createSprite(200,200,70,30);
  rect2.shapeColor=("blue")

  obj1 = createSprite(200,100,50,50);
  obj1.shapeColor="blue";

  obj2 = createSprite(200,300,50,50);
  obj2.shapeColor="blue";

  obj3 = createSprite(600,100,50,50);
  obj3.shapeColor="blue";

  obj4 = createSprite(600,300,50,50);
  obj4.shapeColor="blue";

}

function draw() {
  background("RED"); 
  
  rect2.x=mouseX;
  rect2.y=mouseY;

if(isTouching(rect2,obj1)){
  rect2.shapeColor = ("green");
  rect1.shapeColor = ("green");

} else {
  rect2.shapeColor = ("blue");
  rect1.shapeColor = ("blue");
}





  drawSprites()
}

function isTouching(o1,o2){
  if(o1.x-o2.x<o2.width/2+o1.width/2  &&  o2.x-o1.x<o2.width/2+o1.width/2
    && o1.y-o2.y<o2.height/2+o1.height/2  &&  o2.y-o1.y<o2.height/2+o1.height/2){
    return true;
  } else {
    return false;
  }
}
