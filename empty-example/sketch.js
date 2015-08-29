
var cowImage, musicNoteImage, catImage, backgroundImage;
var cow, musicNote, cat, background;
var GRAVITY = .004;


function setup() {
  createCanvas(1000, 1000);
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
}

function draw() {
	cow.velocity.y += GRAVITY;

	if(keyWentDown("s")){
		cow.velocity.y = -.3;
	}
	if(keyWentDown("d")){
		cow.velocity.y = .3;
	}

	camera.position.x = cow.position.x + width/16;

 	background(0, 0, 0); 
	camera.off();
	camera.on();

	drawSprite(cow);
	drawSprite(note);
	drawSprite(cat);


}

function mousePressed() {
}
