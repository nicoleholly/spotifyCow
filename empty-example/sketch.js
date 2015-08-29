var cowImage, catImage, musicNoteImage, backgroundImage;
var cow, musicNote, background;

function setup() {
  createCanvas(800,800);
  cowImage = loadImage("assets/cow.png");
  musicNoteImage = loadImage("assets/note.jpg");
  catImage = loadImage("assets/cat.jpg")

  cow = createSprite(width/2, height/2);
  cow.addImage("normal", cowImage);



}

function draw() {

background(255,255,255);  
  
  
  drawSprite(cow);
}