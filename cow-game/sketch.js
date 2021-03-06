
var cowImage, musicNoteImage, catImage, backgroundImage, earthImage, marsImage;
var cow, musicNote, background, earth, mars;
var GRAVITY = .004;
var obstacles;


function setup() {
  createCanvas(1200, 800);
  obstacles = new Group();
  cats = new Group();
  notes = new Group();
  planets = new Group();

  musicNoteImage = loadImage("assets/spotify.png");
  cowImage = loadImage("assets/cow2.png");
  catImage = loadImage("assets/cat2.gif");
  earthImage = loadImage("assets/earth.gif");
  marsImage = loadImage("assets/mars.jpg");

  earth = createSprite(500, 500, 700, 700);
  cow = createSprite(130, 130, 20, 20);
  earth.scale = .5;
  cow.scale = .25;

  cow.velocity.x = 1.2;
  cow.rotateToDirection = true;
  cow.addImage("normal", cowImage);

  camera.position.y = height/2;
  planets.add(earth);
  earth.addImage("normal", earthImage);

}

function draw() {
  console.log(frameCount);
	background(0, 0, 0); 
  	cow.velocity.y += GRAVITY;


  	if(keyWentDown("s")){
    	cow.velocity.y = -.3;
  	}
  	if(keyWentDown("d")){
    	cow.velocity.y = .3;
  	}
  	cow.velocity.y += GRAVITY;

 	 camera.position.x = cow.position.x + width/16;


 	//cow.collide(obstacles);
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
		newNote.scale = .15;
		newNote.velocity.x = -.75;
		notes.add(newNote);
	}

  if(frameCount ==750){
    var newPlanet = createSprite(cow.position.x + width, 500, 700, 700);
    newPlanet.addImage("normal", marsImage);
    newPlanet.scale = 1.3;
    newPlanet.velocity.x = -.3;
    planets.add(newPlanet);
  }

	if(cow.overlap(cats, collect)){
    	cow.scale -= .08;
  	}
  
  if(cow.overlap(notes, collect)){
  		cow.scale += .08;
  }

  	camera.on();
  	camera.position.x = cow.position.x + width/16;
    drawSprites(planets);
    drawSprites(obstacles);
    drawSprite(cow);
    drawSprites(notes);
    drawSprites(cats);
  }


function collect(collector, collected){
  collected.remove();
}

