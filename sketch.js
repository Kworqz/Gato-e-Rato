var gato,rato;

function preload() {
    backgroundImg = loadImage(images/garden.png)
    gatoImg1 = loadImage(images/cat1.png);
    ratoImg1 = loadImage(images/mouse1.png);
    gatoImg2 = loadImage(images/cat2.png, images/cat3.png)
    ratoImg2 = loadImage(images/mouse2.png, images/mouse3.png);
}

function setup(){
    createCanvas(1000,800);
    gato = createSprite(850,600);
    gato.addAnimation("gatoSentado",gatoImg1);
    gato.scale  = 0.2;
    rato = createSprite(250,600);
    rato.addAnimation("rato1", ratoImg1);
    rato.scale = 0.3;  
}

function draw() {

    background(255);
    if(gato.x - rato.x < (gato.width + rato.width)/2 ){
    gato.velocityX = 0
    gato.addAnimation("gatofeliz",catImg3);
    gato.changeAnimation("gatofeliz");
    cat.x = 300;
    cat.scale = 0.2;


    }
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
