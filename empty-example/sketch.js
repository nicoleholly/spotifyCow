<<<<<<< HEAD

var cowImage, catImage, musicNoteImage, backgroundImage;
var cow, musicNote, background;
/**
function preload(){
	cowImage = loadImage('assets/cow.png');
}
***/
function setup() {
  createCanvas(800,800);
  background('#fae');
  //musicNoteImage = loadImage("assets/note.jpg");
  //catImage = loadImage("assets/cat.jpg")

  cow = createSprite(10,10,50,50);
  //ow.addImage("normal", cowImage);
=======
var cowImage, musicNoteImage, catImage, backgroundImage;
var direction = 90; 
var cow, musicNote, cat, background;

function setup() {
  createCanvas(800,800);
  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");
>>>>>>> 6556db6b24a38538e61f50e46f9375b5672b170c

  cow = createSprite(20, 20, 20, 20);
  note = createSprite(100, 100, 20, 20);
  cat = createSprite(200, 200, 20, 20);
  console.log("here");

}

function draw() {
<<<<<<< HEAD

  drawSprite(cow);
  //cow.changeAnimation("normal");

=======
	background("#fae");
	drawSprite(cow);
	drawSprite(note);
	drawSprite(cat);
}
function mousePressed() {
	cow.addImage("normal", cowImage);
	note.addImage("normal", musicNoteImage);
	cat.addImage("normal", catImage);
>>>>>>> 6556db6b24a38538e61f50e46f9375b5672b170c
}
