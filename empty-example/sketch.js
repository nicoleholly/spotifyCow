
var cowImage, musicNoteImage, catImage, backgroundImage;
var cow, musicNote, cat, background;
var GRAVITY = .002;


function setup() {
  createCanvas(1000,1000);
  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");

<<<<<<< HEAD
  cow = createSprite(20, 20, 20, 20);
  note = createSprite(100, 100, 20, 20);
  cat = createSprite(200, 200, 20, 20);
  cat.addImage("normal", catImage);
  cat.scale = .25;
  cow.scale = .25;
  note.scale = .25;



=======
  cow = createSprite(130, 130, 20, 20);
  note = createSprite(300, 300, 20);
  cat = createSprite(450, 450, 20, 20);

  cow.velocity.x = .8;
  cow.addImage("normal", cowImage);
  cow.rotateToDirection = true;
>>>>>>> 704ddee99cea980df4f4fcad9b374ec49384d825

  camera.position.y = height/2;
}

function draw() {

<<<<<<< HEAD
=======
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

>>>>>>> 704ddee99cea980df4f4fcad9b374ec49384d825
	drawSprite(cow);
	drawSprite(note);
	drawSprite(cat);


}

function mousePressed() {
	note.addImage("normal", musicNoteImage);
}
