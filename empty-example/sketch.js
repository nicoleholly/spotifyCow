
var cowImage, catImage, musicNoteImage, backgroundImage;
var cow, musicNote, background;

function setup() {
  createCanvas(800,800);
  background('#fae');
  //cowImage = loadImage("assets/cow.png");
  //musicNoteImage = loadImage("assets/note.jpg");
  //catImage = loadImage("assets/cat.jpg")

  cow = createSprite(10,10,50,50);
  //cow.addImage("normal", cowImage);


}

function draw() {

  drawSprite(cow);

}

