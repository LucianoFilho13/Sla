
var trex ,trex_running;
var edges;
var solo;
var soloimage;
var soloin;

function preload(){ // funç~;ao que carregar todas as imagens e animações
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloimage = loadImage("ground2.png");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();
  solo = createSprite(300,190,600,20);
  solo.addImage(soloimage);

  soloin = createSprite(300,200,600,10);
  soloin.visible = 0;

}

function draw(){
  background("white");

  if(keyDown("space")){
    if(trex.y > 170){
      trex.velocityY = -10;

    }

  }
  trex.velocityY = trex.velocityY + 0.5; // gravidade

  trex.collide(soloin)
  solo.velocityX = -3;

  if (solo.x < 0) {
    solo.x = 300;

  }

  drawSprites();

}