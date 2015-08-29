
var cowImage, musicNoteImage, catImage, backgroundImage;
var cow, musicNote, cat, background;

function setup() {
  createCanvas(1000,1000);
  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");

  cow = createSprite(20, 20, 20, 20);
  note = createSprite(100, 100, 20, 20);
  cat = createSprite(200, 200, 20, 20);
  cat.addImage("normal", catImage);
  cat.scale = .25;
  cow.scale = .25;
  note.scale = .25;




}

function draw() {

	drawSprite(cow);
	drawSprite(note);
	drawSprite(cat);


}
function mousePressed() {
	cow.addImage("normal", cowImage);
	note.addImage("normal", musicNoteImage);
}
