//creating variables
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    //loading sound
    music=loadSound("music.mp3");
}

function setup(){

    //creating canvas
    canvas = createCanvas(925,600);

    //creating ball sprite
    ball = createSprite(350,150, 40,40);

    //adding colour to the ball sprite
    ball.shapeColor = rgb(255,255,255);

    //adding velocityX and velocityY to the ball sprite
    ball.velocityX=-8;
    ball.velocityY=+6;

    //creating block sprites and adding colour
    block1 = createSprite(125,580,200,30);
    block1.shapeColor = "blue";
    block2 = createSprite(350,580,200,30);
    block2.shapeColor = "orange";
    block3 = createSprite(575,580,200,30);
    block3.shapeColor = "red";
    block4 = createSprite(800,580,200,30);
    block4.shapeColor = "green";  
}

function draw() {

    //mentioning background colour  
    background(rgb(169,169,169));

    //creating edge sprites
    edges=createEdgeSprites();

    //adding condition for the ball to bounceOff from the edges
    ball.bounceOff(edges);

    //adding conditions for the collision of the ball with each block sprite
    if(isTouching(ball,block1)){
    music.play();
    ball.shapeColor="blue";
    }     
    if(isTouching(ball,block2)){
    ball.shapeColor="orange";

    //writing code to set velocityX and velocityY of ball as 0
    ball.velocityY=0;
    ball.velocityX=0;

    //writing code to stop music
    music.stop();
    }

    if(isTouching(ball,block3)){
    ball.shapeColor="red";   
    }  

    if(isTouching(ball,block4)){
    ball.shapeColor="green";
    }

    //writing code to bounce off ball from block1
    bounceOff(ball,block1);

    //writing code to bounce off ball from block3
    bounceOff(ball,block3);

    //writing code to bounce off ball from block4   
    bounceOff(ball,block4); 

    //drawing sprites
    drawSprites();
}

//describing functions
function isTouching(object1,object2){

    //condition to detect collision
    if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){

    //returning values if conditon is satisfied
    return true;

    }else{   
    //not returning values if conditon is not satisfied
    return false;
    }
}
function bounceOff(object1,object2){

    //condition to detect collision
    if(object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){

    //multiplying velocity of object 1 with -1 if condition is satisfied
    object1.velocityY=object1.velocityY*(-1);
    }
}