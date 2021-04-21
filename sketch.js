var tom,tomImage1,tomImage2
var jerry,jerryImage1,jerryImage2
var backgroundImage
function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png")
    tomImage1=loadAnimation("images/cat1.png")
    tomimage2=loadAnimation("images/cat2.png","cat3.png")
    jerryImage1=loadAnimation("images/mouse1.png")
    jerryImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(850,600)
    tom.addAnimation("tomsleeping",tomImage1)
    tom.scale=0.3
    jerry=createSprite(250,600)
    jerry.addAnimation("jerrystanding",jerryImage1)
    jerry.scale=0.2
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode==="left"){
        tom.velocityX=-5
        tom.addAnimation("tomrunning",tomImage2)
        tom.changeAnimation("tomRunning")
        jerry.addAnimation("jerryteasing",jerryImage2)
        jerry.frameDelay=25
        jerry.changeAnimation("jerryteasing")
    }

}
}