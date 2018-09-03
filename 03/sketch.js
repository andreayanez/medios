var x = 100; //posición en x de lunita
var y = 250; //posición en y de lunita
var posX = 450; //pos x estrella fugaz
var posY = 250; //pos y estrella fugaz
var star1=0;//estrellas amarillas x
var star2=600; //estrellitas axulitas x



function setup() {
  createCanvas(800, 500); //antes era 700 el h
  background(1); //fondo del canvas negro
}

function draw() {
  noStroke();
  background(1);
  
  //crea la luna estática en la esquina inferior derecha
  fill(255, 248, 240); //color hueso luna 
  ellipse(470, 250, 400, 400); //circulo grande luna

  //circulos sombra luna
  fill(200); //circ oscuritos
  ellipse(580, 250, 50, 50); //dere med
  ellipse(340, 270, 35, 35); //izq med
  ellipse(580, 370, 50, 50); //dere down
  ellipse(400, 180, 80, 80); //izq up
  ellipse(530, 100, 50, 50); //dere up

  fill(230); //circ claritos
  ellipse(610, 270, 30, 30); //der med
  ellipse(550, 120, 40, 40); //der up
  ellipse(540, 350, 35, 35); //izq down

  //crea muchas elipses blancas en el fondo del canvas que simulan ser stars
  //su posición es aleatoria entre el ancho y el alto del canvas
  //miden 15x15 y aparecen hasta que el frameCount es menor a 200
  if (frameCount >= 0 && frameCount < 200) {
    fill(255);
    ellipse(random(width), random(height), 15, 15);
  }

  //hace que una elipse negra tape la luna y de el efecto de aparición de la luna
  if (frameCount >= 0 && frameCount < 200) {
    fill(1);
    ellipse(x, y, 410, 410); //cuando cuenta los 300 frames se mueve la luna
    x = x + 3.5;
  }

  //Hace una estrellita fugaz amarilla que empieza a la izquierda y va a la derecha
  if (frameCount >= 0 && frameCount < 150) {
    fill(255, 222, 0);
    ellipse(posX, posY, 30, 30); //cuando cuenta los 300 frames se mueve la luna
    posX = posX - 3;
    posY = posY - 1;
  }
  
//su vel es de 6  //si el frame count es menor a 200 dos estrellas se mueven de izq a der
 if (frameCount >= 0 && frameCount < 200) {
  fill(255,222,30);
  triangle(star1,100, star1+50,100, star1+25,50);
  triangle(star1,70, star1+50,70, star1+25,120);
   
 fill(255,153,207);
  triangle(star1-300,400, star1-250,400, star1-275,350);
  triangle(star1-300,370, star1-250,370, star1-275,420);
   star1=star1+6;
 }
  
  //su vel es de 6  //si el frame count es menor a 200 dos estrellas se mueven de der a izq
 if (frameCount >= 0 && frameCount < 200) {
  fill(0,255,255);
  triangle(star2,50, star2+10,20, star2+20,50);
  triangle(star2,30, star2+10,60, star2+20,30);
   
   fill(255,153,124);
  triangle(star2+320,470, star2+330,440, star2+340,470);
  triangle(star2+320,450, star2+330,480, star2+340,450);
   star2=star2 - 2.5;
  
 }

  //identifica que se acabo la animació´n al llegar a los 200 frames
  if (frameCount == 200) {
    background(255, 0, 0);
  }

}