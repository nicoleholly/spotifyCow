
var cowImage, musicNoteImage, catImage, backgroundImage;
var cow, musicNote, background;
var GRAVITY = .004;
var obstacles;


function setup() {
  createCanvas(1200, 800);

  musicNoteImage = loadImage("assets/note.jpg");
  cowImage = loadImage("assets/cow.png");
  catImage = loadImage("assets/cat.jpg");

  cow = createSprite(130, 130, 20, 20);
  note = createSprite(300, 300, 20);

  note.scale = .25;
  cow.scale = .25;

  cow.velocity.x = 1.2;
  cow.rotateToDirection = true;
  cow.addImage("normal", cowImage);
  note.addImage("normal", musicNoteImage);

  camera.position.y = height/2;

  
  obstacles = new Group();
  cats = new Group();
  notes = new Group();
  
}

function draw() {

  cow.velocity.y += GRAVITY;

  if(keyWentDown("s")){
    cow.velocity.y = -.3;
  }
  if(keyWentDown("d")){
    cow.velocity.y = .3;
  }
  cow.velocity.y += GRAVITY;

  camera.position.x = cow.position.x + width/16;

  if (frameCount%90 == 0){
  	for(i=0;i<3;i++){
  		var box = createSprite(cow.position.x + width, random(0 + (height*.15), height), random(0,40), random(0,40));
    	obstacles.add(box);
  		}
  	}

  	if(frameCount%110 == 0){
  		var newCat = createSprite(cow.position.x + width, random(0+(height*.15), height), 20, 20);
		newCat.addImage("normal", catImage);
		newCat.scale = .25;
		newCat.velocity.x = -1.5;
		cats.add(newCat);
	}

	if(frameCount%150 == 0){
		var newNote = createSprite(cow.position.x + width, random(0+(height*.15), height), 20, 20);
		newNote.addImage("normal", musicNoteImage);
		newNote.scale = .25;
		newNote.velocity.x = -.75;
		notes.add(newNote);
	}

	if(cow.overlap(cats, collect)){
    	cow.scale -= .08;
  	}
  
  if(cow.overlap(notes, collect)){
  		cow.scale += .04;
  	}

//	cow.collide(obstacles);
  background(0, 0, 0); 
  camera.off();
  camera.on();
  camera.position.x = cow.position.x + width/16;
  drawSprites();

}

function collect(collector, collected){
  collected.remove();
}
