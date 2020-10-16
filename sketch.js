const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var stage=0;
var ballIMG,brickIMG,brick;
var paddle,paddleIMG;
 
var form;
var canvas;
var ball;
var nextStage;

function setup(){
    engine = Engine.create();
    world = engine.world;
canvas=createCanvas(displayWidth-30,displayHeight-30)
form= new Form();

///nextStage=NextPage();

}
function preload(){
	ballIMG=loadImage("ball.png")
    brickIMG=loadImage("brick.png")
    paddleIMG=loadImage("paddle.png")
}





function draw(){
    
background("pink")
form.display();
//nextStage.display()
if(stage===0){
    form.display();
}else if(stage===2){

      for(var i=300; i<1000;i=i+85){
        brick = createSprite(i,200,50,20);
       brick.addImage(brickIMG);
      brick.scale=0.35;
          
        }
        for(var i=300; i<1000;i=i+85){
            brick = createSprite(i,200,50,20);
           brick.addImage(brickIMG);
          brick.scale=0.35;
              
            } 
        for(var i=300; i<1000;i=i+85){
         brick = createSprite(i,240,50,20);
          brick.addImage(brickIMG);
        brick.scale=0.35;
                  
                }
                for(var i=300; i<1000;i=i+85){
                    brick = createSprite(i,280,50,20);
                   brick.addImage(brickIMG);
                  brick.scale=0.35;
                      
                    }
            for(var i=300; i<1000;i=i+85){
                        brick = createSprite(i,320,50,20);
                       brick.addImage(brickIMG);
                      brick.scale=0.35;
                          
             }
            for(var i=300; i<1000;i=i+85){
                brick = createSprite(i,360,50,20);
                   brick.addImage(brickIMG);
                brick.scale=0.35;
                              
         } 
                            
        for(var i=300; i<1000;i=i+85){
           brick = createSprite(i,400,50,20);
         brick.addImage(brickIMG);
           brick.scale=0.35;
                                  
           }
           for(var i=300; i<1000;i=i+85){
            brick = createSprite(i,440,50,20);
           brick.addImage(brickIMG);
          brick.scale=0.35;
              
            }
        

         ball=createSprite(580,565,40,40);
   
            ball.addImage(ballIMG);
         ball.scale=0.16;
        paddle=createSprite(600,600,20,20);
           paddle.addImage(paddleIMG);
             paddle.scale=0.2;

      

}



drawSprites();
}





