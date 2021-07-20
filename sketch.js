var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

// moving rabbit
rabbit = World.MouseY;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.06
  apple.velocityY = -2
  apple.lifetime = 200;
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.06;
  leaf.velocityY = -2
  leaf.lifetime = 200;
}

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
     console.log(createApples);
    } else{
      console.log(createLeaves);
    }

  }
