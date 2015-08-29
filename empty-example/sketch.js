var cowImage, musicNoteImage, catImage, backgroundImage;
var direction = 90; 
var cow, musicNote, cat, background;
var GRAVITY = .002;


function setup() {
  createCanvas(800,800);
  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");

  cow = createSprite(130, 130, 20, 20);
  note = createSprite(300, 300, 20);
  cat = createSprite(450, 450, 20, 20);

  cow.velocity.x = .8;
  cow.addImage("normal", cowImage);
  cow.rotateToDirection = true;

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

	camera.position.x = cow.position.x + width/4;

 	background(247, 134, 131); 
	camera.off();
//	image(backgroundImage, 0, 450-190);
	camera.on();

	drawSprite(cow);
	drawSprite(note);
	drawSprite(cat);
}

function mousePressed() {
	note.addImage("normal", musicNoteImage);
	cat.addImage("normal", catImage);
}
