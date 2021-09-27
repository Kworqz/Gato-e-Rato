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
    gato = createSprite(850,600);
    gato.addAnimation("gatoSentado",gatoImg1);
    rato = createSprite(250,600);
    rato.addAnimation("rato1", ratoImg1);
}

function draw() {

    background(backgroundImg);
    if(gato.x - rato.x < (gato.width + rato.width)/2 ){
    gato.velocityX = 0;
    gato.addAnimation("gatofeliz",gatoImg3);
    gato.changeAnimation("gatofeliz");
    gato.x = 300;   
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
