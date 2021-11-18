var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds;
var cloudsimg;

var obstacle, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacleGroup;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudsimg = loadImage("cloud.png");
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle3 = loadImage("obstacle3.png");
    obstacle4 = loadImage("obstacle4.png");
    obstacle5 = loadImage("obstacle5.png");
    obstacle6 = loadImage("obstacle6.png");
    
    


}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200, 180, 400, 20);
    ground.addImage("ground", groundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

    var ran = Math.round(random(10, 60));
    console.log(ran);
}

function draw() {
    background(255);
    //jump when the space button is pressed
    if (keyDown("space")&&trex.y >= 161 ) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8;
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);

    spawnClouds();

    spawnObstacles();

    drawSprites();
    
}
function spawnClouds(){
    
    if(frameCount %90 === 0){
    clouds = createSprite(600,100,40,10);
    clouds.addImage(cloudsimg);
    clouds.y = Math.round(random(10,60));
    clouds.scale = 0.8;
    clouds.velocityX = -3;

    clouds.lifetime = 210;

    console.log(trex.depth,clouds.depth);
    clouds.depth = trex.depth;
    trex.depth = trex.depth+1;
    }
}

function spawnObstacles(){
    if(frameCount %90 === 0){
        obstacle = createSprite(600,165,10,40);
        obstacle.velocityX = -3;
        var rand = Math.round(random(1,6));
        switch(rand){
            case 1:obstacle.addImage(obstacle1);
            break;

            case 2:obstacle.addImage(obstacle2);
            break;

            case 3:obstacle.addImage(obstacle3);
            break;

            case 4:obstacle.addImage(obstacle4);
            break;

            case 5:obstacle.addImage(obstacle5);
            break;

            case 6:obstacle.addImage(obstacle6);
            break;


            default:break;
        }
        obstacle.scale = 0.1;
        obstacle.lifetime = 210;
        }
}