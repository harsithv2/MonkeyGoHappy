
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var survivalTime=0;


function preload(){
  
  
monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")          
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  createCanvas(400,400)
   monkey = createSprite(50,295,20,50);
  monkey.addAnimation("running", monkey_running);
  
monkey.scale= 0.1;
   ground = createSprite(30,300,10000,10)
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white")
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50)
   
  if(ground.x<0){
    ground.x=ground.width/2
    
  }

  if(keyDown("space")&& monkey.y>=264){
    monkey.velocityY= -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(ground);

drawSprites();
banana();
  obstacle();

}
function banana(){
  if (frameCount%80===0){
    var banana= createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.liftime= 200
    bananaGroup.add(banana)
    
  }
  
  
}
function obstacle(){
  if (frameCount%300===0){
    var obstacle = createSprite(600,275,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.14;  
    obstacle.velocityX=-3
    obstacle.liftime=200
    obstacleGroup.add(obstacle)
    
    
  }
  
  
}
