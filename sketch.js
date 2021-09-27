var gato,rato;
var backgroundImg, gatoImg1, ratoImg1, ratoImg2, gatoImg2, gatoImg3, ratoImg3;

function preload() {
    backgroundImg = loadImage("images/garden.png");
    gatoImg1 = loadAnimation("images/cat1.png");
    ratoImg1 = loadAnimation("images/mouse1.png");
    gatoImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    ratoImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    gatoImg3 = loadAnimation("images/cat4.png");
    ratoImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800); 
    gato = createSprite(850,600);
    gato.addAnimation("gatoSentado",gatoImg1);
    rato = createSprite(250,600);
    rato.addAnimation("rato1", ratoImg1);
}

function draw() {
    background(backgroundImg);
    if(gato.x - rato.x < gato.width/2 + rato.width/2 ){
    gato.velocityX = 0;
    gato.addAnimation("gatofeliz",gatoImg3);
    gato.changeAnimation("gatofeliz");
    rato.addAnimation("ratofeliz",ratoImg3);
    rato.changeAnimation("ratofeliz");
    //gato.x = 300;   
    }
   
    keyPressed();
   
    drawSprites();

}

function keyPressed(){
    if(keyDown("left")){

        rato.addAnimation("ratoProvocando", ratoImg2);
        rato.changeAnimation("ratoProvocando");
        gato.addAnimation("gatoAndando", gatoImg2);
        gato.changeAnimation("gatoAndando");
        rato.frameDelay = 25; //tia eu absolutamente n sei oq é esse código de framedelay...
        gato.velocityX = -5;
         }


}
