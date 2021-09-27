var gato,rato;

function preload() {
    backgroundImg = loadImage("images/garden.png")
    gatoImg1 = loadImage("images/cat1.png");
    ratoImg1 = loadImage("images/mouse1.png");
    gatoImg2 = loadImage("images/cat2.png")
    ratoImg2 = loadImage("images/mouse2.png");
    gatoImg3 = loadImage("images/cat3.png");
    ratoImg3 = loadImage("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    background1 = createSprite(420,320,10,10)
    background1.addImage(backgroundImg);  
    background1.scale = 1.5;
    gato = createSprite(850,600);
    gato.addAnimation("gatoSentado",gatoImg1);
    gato.scale  = 0.2;
    rato = createSprite(250,600);
    rato.addAnimation("rato1", ratoImg1);
    rato.scale = 0.3;  
}

function draw() {

    background(backgroundImg);
    if(gato.x - rato.x < (gato.width + rato.width)/2 ){
    gato.velocityX = 0
    gato.addAnimation("gatofeliz",gatoImg3);
    gato.changeAnimation("gatofeliz");
    gato.x = 300;
    gato.scale = 0.2;   }
   
    keyPressed();

    
    drawSprites();
    }
    


function keyPressed(){

    if(keyDown("left")){

        mouse.addAnimation("ratoProvocando", ratoImg2);
        mouse.changeAnimation("ratoProvocando");
        mouse.frameDelay = 25; //tia eu absolutamente n sei oq é esse código de framedelay...
        gato.velocityX = -5;
         }


}
