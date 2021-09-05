var chrono , coin , slab
var score=0
function preload(){
bgImg=loadImage("bg.jpg")
chronoImg=loadImage("chrono.png")
coinImg=loadImage("coin.jpg")


}
function setup(){
createCanvas(1000,600);

bg1=createSprite(50,100,500,20)
bg1.addImage(bgImg)
bg1.velocityX=-2
bg1.scale=3

chrono=createSprite(200,100);
chrono.shapeColor="blue";
chrono.addImage(chronoImg)
chrono.scale=0.3

ground=createSprite(500,320,1000,20)
ground.visible=false

coinGroup=createGroup()
slabGroup=createGroup()




}
function draw(){
background("white");
//resetting the ground
 if(bg1.x<100){
   bg1.x=250;
 }
 if(coinGroup.isTouching(chrono)){
  console.log("hello")
  score++

    
 }
camera.x= chrono.x
camera.y= chrono.y

chrono.velocityY=chrono.velocityY+0.7


chrono.collide(ground)
chrono.collide(slabGroup)
//calling the keycontrol funtion
keyControls();
spawnCoin();
spawnSlabs();




drawSprites()
textSize(30)
fill("yellow")
text("SCORE:"+score,400,200)

chrono.debug=true
chrono.setCollider("rectangle",0,0,chrono.width,chrono.height)

}
// this is a function definition of keycontrols 



function keyControls(){
 
      if(keyWentDown (RIGHT_ARROW)){
        chrono.velocityX=10                     
      }
    if(keyWentUp(RIGHT_ARROW)){
      chrono.velocityX=0
    }
    if(chrono.y >-100){
      if(keyDown("space")){
        chrono.velocityY=-4
      }
    }
        
        
}
function spawnCoin(){
  if(frameCount%60==0){
     coin=createSprite(random(50,1000),random(50,250),50,50)
    coinGroup.add(coin)
    coin.addImage(coinImg)
    coin.scale=0.04
    coin.velocityX=-7;
  }

}

function spawnSlabs(){
  if(frameCount%200==0){
     slab=createSprite(random(50,1000),random(50,250),300,20)
    slabGroup.add(slab)
   // slab.addImage(coinImg)
    slab.scale=1
    slab.velocityX=-7;
    
  }

}


























