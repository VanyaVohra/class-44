var pacman, pacmanImg;
var redGhost, redGhostImg;
var BlueGhost, BlueGhostImg;
var GreenGhost, GreenGhostImg;
var YellowGhost, YellowGhostImg;
var pinkScared, pinkScaredImg;
var BlueScared, BlueScaredImg;
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard8, cardboard9, cardboard10, cardboard11;
var cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20, cardboard21, cardboard22;
var cardboard23, cardboard24, cardboard25, cardboard26, cardboard27, cardboard28, cardboard29, cardboard30, cardboard31, cardboard32, cardboard33;
var cardboard34, cardboard35, cardboard36, cardboard37, cardboard38, cardboard39, cardboard40, cardboard41, cardboard42, cardboard43, cardboard44;

function preload() {
  pacmanImg = loadAnimation("pacman_full.png", "pacman_half.png", "pacman_open.png", "pacman_half.png")
  redGhostImg = loadImage("red_ghost.png");
  BlueGhostImg = loadImage("blue_ghost.png");
  GreenGhostImg = loadImage("green_ghost.png");
  YellowGhostImg = loadImage("yellow_ghost.png");
}

function setup() {
  createCanvas(400,400);

  //adding images and creating main characters
  pacman = createSprite(200,200, 0, 0);
  pacman.addAnimation("pacmanImg", pacmanImg);
  pacman.scale = 0.2
  redGhost = createSprite(150,200,0,0);
  redGhost.addImage(redGhostImg);
  redGhost.scale = 0.05;
  BlueGhost = createSprite(100,200,0,0);
  BlueGhost.addImage(BlueGhostImg);
  BlueGhost.scale = 0.05;
  GreenGhost = createSprite(250,200,0,0);
  GreenGhost.addImage(GreenGhostImg);
  GreenGhost.scale = 0.05;
  YellowGhost = createSprite(300,200,0,0);
  YellowGhost.addImage(YellowGhostImg);
  YellowGhost.scale = 0.05;

  //creating a maze
  cardboard1 =createSprite(0,35,120,15);
  cardboard1.shapeColor ="pink";
  
  cardboard2 =createSprite(100,0,15,140);
  cardboard2.shapeColor ="pink";
  
  cardboard3 =createSprite(100,70,120,15);
  cardboard3.shapeColor ="pink";
  
   cardboard4 =createSprite(7,120,15,120);
  cardboard4.shapeColor ="pink";
  
   cardboard5 =createSprite(118,110,152,15);
  cardboard5.shapeColor ="pink";
  
   cardboard6 =createSprite(197,70,15,95);
  cardboard6.shapeColor ="pink";
  
   cardboard7 =createSprite(160,30,60,15);
  cardboard7.shapeColor ="pink";
  
   cardboard8 =createSprite(240,70,15,95);
  cardboard8.shapeColor ="pink";
  
   cardboard9 =createSprite(300,30,110,15);
  cardboard9.shapeColor ="pink";
  
   cardboard10 =createSprite(390,30,15,160);
  cardboard10.shapeColor ="pink";
  
   cardboard11 =createSprite(332,65,105,15);
  cardboard11.shapeColor ="pink";
  
   cardboard12 =createSprite(110,150,190,15);
  cardboard12.shapeColor ="pink";
  
   cardboard13 =createSprite(129,129,15,26);
  cardboard13.shapeColor ="pink";
  
   cardboard14 =createSprite(330,125,15,65);
  cardboard14.shapeColor ="pink";
  
   cardboard15 =createSprite(285,110,76,15);
  cardboard15.shapeColor ="pink";
  
   cardboard16 =createSprite(240,180,15,75);
  cardboard16.shapeColor ="pink";
  
   cardboard17 =createSprite(280,180,15,75);
  cardboard17.shapeColor ="pink";
  
   cardboard18 =createSprite(260,150,27,15);
  cardboard18.shapeColor ="pink";
  
   cardboard19 =createSprite(180,185,105,15);
  cardboard19.shapeColor ="pink";
  
   cardboard20 =createSprite(380,140,40,15);
  cardboard20.shapeColor ="pink";
  
   cardboard21 =createSprite(330,190,95,15);
  cardboard21.shapeColor ="pink";
  
   cardboard22 =createSprite(330,170,15,27);
  cardboard22.shapeColor ="pink";
  
   cardboard23 =createSprite(385,205,15,75);
  cardboard23.shapeColor ="pink";
  
   cardboard24 =createSprite(121,205,15,55);
  cardboard24.shapeColor ="pink";
  
   cardboard25 =createSprite(85,225,15,90);
  cardboard25.shapeColor ="pink";
  
   cardboard26 =createSprite(25,190,55,15);
  cardboard26.shapeColor ="pink";
  
   cardboard27 =createSprite(187,225,121,15);
  cardboard27.shapeColor ="pink";
  
   cardboard28 =createSprite(170,262,156,15);
  cardboard28.shapeColor ="pink";
  
   cardboard29 =createSprite(205,243,15,23);
  cardboard29.shapeColor ="pink";
  
   cardboard30 =createSprite(53,225,50,15);
  cardboard30.shapeColor ="pink";
  
   cardboard31 =createSprite(45,300,15,90);
  cardboard31.shapeColor ='pink';
  
   cardboard32 =createSprite(31,300,15,15);
  cardboard32.shapeColor ="pink";
  
   cardboard33 =createSprite(280,240,15,60);
  cardboard33.shapeColor ="pink";
  
   cardboard34 =createSprite(195,300,285,15);
  cardboard34.shapeColor ="pink";
  
   cardboard35 =createSprite(330,260,15,70);
  cardboard35.shapeColor ="pink";
  
   cardboard36 =createSprite(357,270,40,15);
  cardboard36.shapeColor ="pink";
  
   cup =createSprite(390,360,15,80);
  cup.shapeColor ="yellow";
  
   cardboard38 =createSprite(380,310,35,15);
  cardboard38.shapeColor ="pink";
  
   cardboard39 =createSprite(370,330,15,30);
  cardboard39.shapeColor ="pink";
  
   cardboard40 =createSprite(83,337,62,15);
  cardboard40.shapeColor ="pink";
  
   cardboard41 =createSprite(106,360,15,40);
  cardboard41.shapeColor ="pink";
  
   cardboard42 =createSprite(50,372,100,15);
  cardboard42.shapeColor ="pink";
  
   cardboard43 =createSprite(262,337,201,15);
  cardboard43.shapeColor ="pink";
  
   cardboard44 =createSprite(248,371,270,15);
  cardboard44.shapeColor ="pink";
}

function draw() {
  background("black"); 
  pacman.collide(cardboard1);
  pacman.collide(cardboard2);
  pacman.collide(cardboard3);
  pacman.collide(cardboard4);
  pacman.collide(cardboard5);
  pacman.collide(cardboard6);
  pacman.collide(cardboard7);
  pacman.collide(cardboard8);
  pacman.collide(cardboard9);
  pacman.collide(cardboard10);
  pacman.collide(cardboard11);
  pacman.collide(cardboard12);
  pacman.collide(cardboard13);
  pacman.collide(cardboard14);
  pacman.collide(cardboard15);
  pacman.collide(cardboard16);
  pacman.collide(cardboard17);
  pacman.collide(cardboard18);
  pacman.collide(cardboard19);
  pacman.collide(cardboard20);
  pacman.collide(cardboard21);
  pacman.collide(cardboard22);
  pacman.collide(cardboard23);
  pacman.collide(cardboard24);
  pacman.collide(cardboard25);
  pacman.collide(cardboard26);
  pacman.collide(cardboard27);
  pacman.collide(cardboard28);
  pacman.collide(cardboard29);
  pacman.collide(cardboard30);
  pacman.collide(cardboard31);
  pacman.collide(cardboard32);
  pacman.collide(cardboard33);
  pacman.collide(cardboard34);
  pacman.collide(cardboard35);
  pacman.collide(cardboard36);
  pacman.collide(cardboard37);
  pacman.collide(cardboard38);
  pacman.collide(cardboard39);
  pacman.collide(cardboard40);
  pacman.collide(cardboard41);
  pacman.collide(cardboard42);
  pacman.collide(cardboard43);
  pacman.collide(cardboard44);

  if(keyDown(UP_ARROW)){
    pacman.y = pacman.y -5;
  }

  if(keyDown(DOWN_ARROW)){
    pacman.y = pacman.y +5;
  }

  if(keyDown(LEFT_ARROW)){
    pacman.x = pacman.x -5;
  }

  if(keyDown(RIGHT_ARROW)){
    pacman.x = pacman.x +5;
  }


  drawSprites();
}