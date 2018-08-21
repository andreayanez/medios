function setup() {
  createCanvas(600, 600);
  background (255, 250, 205);
}

function draw() {
  stroke(51);
  fill(255);
  triangle(150,675, 338,5, 586,675); //triangulo gigante amarillo
  
  
  
  //circulos completos//
  
  noFill();
  ellipse(450,180, 60,60);//circ negro afuera de la azul
  
  noStroke();
  fill (193, 193, 193);
  ellipse(256,106, 60,60);//circ gris
  
 	noStroke();
  fill (255, 217, 15);
  triangle(360,150, 400,90, 430,150);//triangulo amarillo
  
  fill (120, 138, 189);
  ellipse(450,180, 45,45);// circ azul
  
  stroke(51);
  fill(255, 130, 91);
  ellipse(150,250, 30,30);//circ rojito
  
  noStroke();
  fill(249, 222, 158);
  ellipse(340,340, 60,60);//circ afuera centro

  stroke(51);
  fill(244, 245, 233);
  ellipse(340,340, 45,45);//circ centro
  
  
  
  
  // arquitos giant//
  
  
  noFill();
  stroke(5);
  arc(450,355, 900,770, PI, PI + QUARTER_PI);
	arc(390,355, 750,500, PI, PI + QUARTER_PI); //arquitos
  
  
  
  //ciculos//
  
  stroke (51);
  fill(254, 255, 253);
  ellipse(150,400, 120,120);//circ blanco grande
  
  fill(43, 45, 31);
  ellipse(150,400, 85,85);// inside circulo negro
  
  fill(255, 99, 71);
	ellipse(150,400, 72,72);//inside circ rojito
  
  fill(250, 250, 250);
  noStroke();
  ellipse (153,398, 65,65);//circ inside white
  
  fill(255, 182, 193);
  rect(570,280, 65,95); //cuadradito pink
  
  
  
  
  //triangulo abajo//
  stroke(1);
  line(0,480, 140,600);
  noStroke();
  fill (193, 231, 241);
  triangle(0,600, 0,480, 140, 600);
  fill(255);
  triangle (35,600, 60,575, 65,600);//triangulo azul
  
  fill(1);
  quad(10,600, 45,560, 60,575, 35,600);
	quad(60,575, 80,550, 95,560, 65,600);
  fill(255);
  stroke(1);
  quad (80,550, 100,520, 120,530, 95,560);
  fill(1);
  quad (100,520, 115,495, 135,510, 120,530);
  fill(255);
  stroke(1);
  quad (115,495, 125,480, 150,490, 135,510);
  fill(1);
  quad (125,480, 135,465, 155,480, 150,490);//blackwhite sq
  
  
  
  
  //líneas arriba derecha//
  
  stroke(5);
  strokeWeight(2);
  line (560,0, 560,200);
  line (550,0, 550,200);//líneas verticales
  
  line(520,20, 590,20);
  line(520,30, 590,30);//líneas horizontales arriba
  
  line(520,165, 590,165);
  line(520,170, 590,170);
  line(520,175, 590,175);
  line(520,180, 590,180);//líneas horizontales abajo
  
  
  noFill();
  arc(570,85, 60,57, HALF_PI, PI+ HALF_PI); //circulito mitad abierto hacia derecha
  
  
  
  
  //arquitos//
  stroke(255, 99, 71);
  strokeWeight (5);
  ellipse(350,570, 110,110);
  ellipse (420,500, 90, 90);
  ellipse(495,450, 90, 90);
  ellipse(535, 395, 50, 50);
  strokeWeight (2);
  stroke(1);
  ellipse(350,573, 110,110);
  strokeWeight (4);
  ellipse (421,503, 90, 90);
  
  fill(255);
  noStroke();
  triangle(300,600, 498,440, 500,600);
  
  fill(255, 250, 205);
  quad (498,440, 570,370, 570,560, 510,470);
  
  
  //arc(390, 530, 100, 100,2, HALF_PI, PI + HALF_PI);
  //arc(300, 575, 50, 50, 0, PI); //circulito mitad smily face
  //arc(50, 55, 70, 70, PI, PI + PI);//circulito mitad sad face
  
  
  //diagonales//
	strokeWeight(6);
  stroke(5);//color
  line (165,600,350,390);
  line (350,390, 600, 530);//trianglines black
  stroke(160, 171, 104);
  line (169,600,350,396);
  line (350,396, 600, 536);//trianglines green
  
  stroke(5);
  strokeWeight(1);
  line(150,90, 540,300);
  line(150,190, 510,310); //líneas diagonales arriba
  
  line(170,485, 410,390);
  line(175,490, 405,405);//lineas diagonales up peques
  
	line(360,510, 585,340);
  line(310,600, 600,350);//lineas diagonales up big
  
  strokeWeight(3);
  line (440,540, 585, 430);
  strokeWeight(4);
  stroke (255, 217, 15);
  line (440,546, 587, 433);//diagonal con amarillo
  
  strokeWeight(6);
  stroke(255, 99, 71);
  line(153, 547, 503,377);
  stroke (5);
  strokeWeight(2);
  line(150, 550, 500,380);//diagonal con naranja
  
  
  
  
  //triangulo abajo//
  
  fill(103, 120, 67);
	triangle(400,600, 560,525, 600,600);//triang verde down
  noStroke();
  fill(220,163,87);
  triangle (400,600, 540,535, 540,600);
  
  fill(1);
  ellipse (510,610, 100, 100);
  fill(255);
  ellipse(510,610, 80, 80);
  
  fill(120,131,167);
  rect (470, 570, 40, 10);
  

  
}