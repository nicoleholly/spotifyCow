var cowImage, musicNoteImage, catImage, backgroundImage;
var direction = 90; 
var cow, musicNote, cat, background;

function setup() {
  createCanvas(800,800);
  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");

  cow = createSprite(20, 20, 20, 20);
  note = createSprite(100, 100, 20, 20);
  cat = createSprite(200, 200, 20, 20);
  console.log("here");

}

function draw() {
	background("#fae");
	drawSprite(cow);
	drawSprite(note);
	drawSprite(cat);
}
function mousePressed() {
	cow.addImage("normal", cowImage);
	note.addImage("normal", musicNoteImage);
	cat.addImage("normal", catImage);
}
