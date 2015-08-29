var cowImage, musicNoteImage, backgroundImage;
var cow, musicNote, background;

function setup() {
  createCanvas(800,800);
  cowImage = loadImage("assets/cow.png");
  cow = createSprite(width/2, height/2);
  cow.addImage("normal", cowImage);



}

function draw() {

background(255,255,255);  
  
  
  drawSprite(cow);
}