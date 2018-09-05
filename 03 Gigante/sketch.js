var x = 100*4; //posición en x de lunita
var y = 250*4; //posición en y de lunita
var posX = 450*4; //pos x estrella fugaz
var posY = 250*4; //pos y estrella fugaz
var star1 = 1*4; //estrellas amarillas x
var star2 = 600*4; //estrellitas axulitas x



function setup() {
  createCanvas(3600, 2000); //antes era 900x500
  background(1); //fondo del canvas negro
}

function draw() {
  noStroke();
  background(1);

 // frameRate(4);

  //crea la luna estática en la esquina inferior derecha
  fill(255, 248, 240); //color hueso luna 
  ellipse(470*width/900, 250*height/500, 400*width/900, 400*height/500); //circulo grande luna

  //circulos sombra luna
  fill(200); //circ oscuritos
  ellipse(580*width/900, 250*height/500, 50*width/900, 50*height/500); //dere med
  ellipse(340*width/900, 270*height/500, 35*width/900, 35*height/500); //izq med
  ellipse(580*width/900, 370*height/500, 50*width/900, 50*height/500); //dere down
  ellipse(400*width/900, 180*height/500, 80*width/900, 80*height/500); //izq up
  ellipse(530*width/900, 100*height/500, 50*width/900, 50*height/500); //dere up

  fill(230); //circ claritos
  ellipse(610*width/900, 270*height/500, 30*width/900, 30*height/500); //der med
  ellipse(550*width/900, 120*height/500, 40*width/900, 40*height/500); //der up
  ellipse(540*width/900, 350*height/500, 35*width/900, 35*height/500); //izq down

  //crea muchas elipses blancas en el fondo del canvas que simulan ser stars
  //su posición es aleatoria entre el ancho y el alto del canvas
  //miden 15x15 y aparecen hasta que el frameCount es menor a 200
  if (frameCount >= 0 && frameCount < 200) {
    fill(255);
    ellipse(random(width), random(height), 15*width/900, 15*height/500);
  }

  //hace que una elipse negra tape la luna y de el efecto de aparición de la luna
  if (frameCount >= 0 && frameCount < 200) {
    fill(1);
    ellipse(x, y, 410*(width/900), 410*(height/500)); //cuando cuenta los 300 frames se mueve la luna
    x = x + 3.5*4;
  }

  //Hace una estrellita fugaz amarilla que empieza a la izquierda y va a la derecha
  if (frameCount >= 0 && frameCount < 150) {
    fill(255, 222, 0);
    ellipse(posX*(width/900), posY*(height/500), 30*(width/900), 30*(height/500)); //cuando cuenta los 300 frames se mueve la luna
    posX = posX - 3*4;
    posY = posY - 1*4;
  }

  //su vel es de 6  //si el frame count es menor a 200 dos estrellas se mueven de izq a der
  if (frameCount >= 0 && frameCount < 200) {
    fill(255, 222, 30);
    triangle(star1*(width/900), 100*(height/500), (star1 + 50)*(width/900), 100*(height/500), (star1 + 25)*(width/900), 50*(height/500));
    triangle(star1*(width/900), 70*(height/500), (star1 + 50)*(width/900), 70*(height/500), (star1 + 25)*(width/900), 120*(height/500));

    fill(255, 153, 207);
    triangle((star1 - 300)*(width/900), 400*(height/500), (star1 - 250)*(width/900), 400*(height/500), (star1 - 275)*(width/900), 350*(height/500));
    triangle((star1 - 300)*(width/900), 370*(height/500), (star1 - 250)*(width/900), 370*(height/500), (star1 - 275)*(width/900), 420*(height/500));
    star1 = star1 + 6*4;
  }

  //su vel es de 6  //si el frame count es menor a 200 dos estrellas se mueven de der a izq
  if (frameCount >= 0 && frameCount < 200) {
    fill(0, 255, 255);
    triangle(star2*(width/900), 50*(height/500), (star2 + 10)*(width/900), 20*(height/500), (star2 + 20)*(width/900), 50*(height/500));
    triangle(star2*(width/900), 30*(height/500), (star2 + 10)*(width/900), 60*(height/500), (star2 + 20)*(width/900), 30*(height/500));

    fill(255, 153, 124);
    triangle((star2 + 320)*(width/900), 470*(height/500), (star2 + 330)*(width/900), 440*(height/500), (star2 + 340)*(width/900), 470*(height/500));
    triangle((star2 + 320)*(width/900), 450*(height/500), (star2 + 330)*(width/900), 480*(height/500), (star2 + 340)*(width/900), 450*(height/500));
    star2 = star2 - 2.5*4;

  }

  //identifica que se acabo la animació´n al llegar a los 200 frames
  if (frameCount == 200) {
    background(255, 0, 0);
  }

  
  if (frameCount <= 200) {
    if (frameCount % 4 == 0) {
    //  saveCanvas("miFlipbookitoDos" + frameCount, 'jpg'); //guarda las imágenes hasta las 400
    }
  }

  print(frameCount); //me cuenta los frames y los muestra en consola

}