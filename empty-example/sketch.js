
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


}

function draw() {

  drawSprite(cow);
  //cow.changeAnimation("normal");

}

