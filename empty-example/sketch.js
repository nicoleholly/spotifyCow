
var cowImage, musicNoteImage, catImage, backgroundImage;
var cow, musicNote, cat, background;
var GRAVITY = .004;
var obstacles;
var boxes = true;


function setup() {
  createCanvas(1200, 800);

 // earthImage = loadImage("assets/earth.gif");
  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");

  cow = createSprite(130, 130, 20, 20);
  note = createSprite(300, 300, 20);
  cat = createSprite(450, 450, 20, 20);

  cat.scale = .25;
  note.scale = .25;
  cow.scale = .25;

  cow.velocity.x = 1.2;
  cow.rotateToDirection = true;
  cow.addImage("normal", cowImage);
  cat.addImage("normal", catImage);
  note.addImage("normal", musicNoteImage);

  camera.position.y = height/2;
  obstacles = new Group();
  if (frameCount%20 == 0){
    for(i=0;i<10;i++){
    var box = createSprite(random(0,width), random(0,height));
    obstacles.add(box);
  }
  }
}

function draw() {
  cow.velocity.y += GRAVITY;

  if(keyWentDown("s")){
    cow.velocity.y = -.3;
  }
  if(keyWentDown("d")){
    cow.velocity.y = .3;
  }
	cow.velocity.y += GRAVITY;

  camera.position.x = cow.position.x + width/16;

  background(0, 0, 0); 
  camera.off();
  camera.on();
  cow.collide(obstacles);
	camera.position.x = cow.position.x + width/16;

 	background(0, 0, 0); 
	camera.off();
	camera.on();



 drawSprites();

}

