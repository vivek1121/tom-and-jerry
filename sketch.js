var tom, jerry;
var tomSitting, tomRunning, tomCollide;
var garden, gardenImage;
var jerryCollide, jerryNormal;

function preload() {
    //load the images here
    gardenImage = loadImage ("images/garden.png");

    tomSitting = loadAnimation ("images/cat4.png");
    tomRunning = loadAnimation ("images/cat3.png");
    tomCollide = loadAnimation ("images/cat1.png");


    jerryCollide= loadAnimation ("images/mouse4.png");
    jerryNormal = loadAnimation ("images/mouse2.png");
}

function setup(){
    createCanvas(800,1100);
    //create tom and jerry sprites here
    garden = createSprite (550,550);
    garden.addImage (gardenImage);
    garden.scale=1.2;


    tom = createSprite (690,800,30,30);
    tom.addAnimation ("catRunning",tomRunning);
    tom.addAnimation ("catSitting",tomSitting);
    tom.addAnimation ("catCollide", tomCollide);
    tom.scale = 0.20;

    jerry = createSprite (150,790,30,30);
    jerry.addAnimation ("jerryNormal",jerryNormal);
    jerry.scale = 0.15;


    

}

function draw() {
    background(255);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2)
{
    tom.addAnimation ("tomCollide",tomCollide);
    tom.changeAnimation ("tomCollide");
    jerry.addAnimation ("jerryCollide",jerryCollide);
    jerry.changeAnimation ("jerryCollide");
    tom.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){
    
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
    }

}





