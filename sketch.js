var posXbot1 = 25;
var posYbot1 = 20; //boton negro
var tamBot1 = 20;

var posXbot2 = 25;
var posYbot2 = 50; //boton rojo 
var tamBot2 = 20;

var posXbot3 = 25;
var posYbot3 = 80; //boton naranja
var tamBot3 = 20;

var posXbot4 = 25;
var posYbot4 = 110; //boton amarillo
var tamBot4 = 20;

var posXbot5 = 25;
var posYbot5 = 140; //boton verde
var tamBot5 = 20;

var posXbot6 = 25;
var posYbot6 = 170; //boton blu
var tamBot6 = 20;

var posXbot7 = 25;
var posYbot7 = 200; //boton bly dark
var tamBot7 = 20;

var posXbot8 = 25;
var posYbot8 = 230; //boton purple
var tamBot8 = 20;

var posXbot9 = 25;
var posYbot9 = 260; //boton pink
var tamBot9 = 20;

var posXbot10 = 25;
var posYbot10 = 290; //boton gris
var tamBot10 = 20;

var posXbot11 = 25;
var posYbot11 = 320; //boton blanco erraser
var tamBot11 = 20;

var posXbot12 = 8;
var posYbot12 = 360; //boton clear all
var tamBot12 = 35;


var herramientaSelect = 0; //qué herramineta tengo selc

function setup() {
  createCanvas(700, 700);
  background(255);

}

function draw() {
  noFill();
  //crea un rectangulo para delimitar el área de trabajo
  stroke(1);
  strokeWeight(3);
  rect(50, 0, 649, 699);

  //crea rectángulo en donde van a estar los colores
  noStroke();
  fill(220);
  rect(0, 0, 50, 700);


  //crea los botones de colores
  fill(1); //negro
  ellipse(posXbot1, posYbot1, tamBot1, tamBot1);

  fill(255, 51, 51); //rojo
  ellipse(posXbot2, posYbot2, tamBot2, tamBot2);

  fill(255, 128, 0); //naranja
  ellipse(posXbot3, posYbot3, tamBot3, tamBot3);

  fill(255, 255, 0); //yellow
  ellipse(posXbot4, posYbot4, tamBot4, tamBot4);

  fill(128, 255, 0); //green
  ellipse(posXbot5, posYbot5, tamBot5, tamBot5);

  fill(0, 255, 255); //blu
  ellipse(posXbot6, posYbot6, tamBot6, tamBot6);

  fill(0, 0, 153); //blu dark
  ellipse(posXbot7, posYbot7, tamBot7, tamBot7);

  fill(127, 0, 255); //purple
  ellipse(posXbot8, posYbot8, tamBot8, tamBot8);

  fill(255, 102, 178); //pink
  ellipse(posXbot9, posYbot9, tamBot9, tamBot9);

  fill(100); //gris
  ellipse(posXbot10, posYbot10, tamBot10, tamBot10);

  fill(255); //white
  ellipse(posXbot11, posYbot11, tamBot11, tamBot11);
  strokeWeight(1);
  stroke(2);
  rect(posXbot12, posYbot12, tamBot12, tamBot12);

  noStroke();

  if (mouseIsPressed) {
    //ellipse(mouseX, mouseY, 20, 20);

    if (herramientaSelect == 1) {
      stroke(1);
      translate(mouseX, mouseY); //hace líneas negras que van rotando
      rotate(frameCount / 10.0);
      line(0, 0, 50, 0);
    }
    if (herramientaSelect == 2) {
      fill(255, 51, 51);
      rect(mouseX, mouseY, 15, 15); //rectángulos rojos 15x15
    }
    if (herramientaSelect == 3) {
      stroke(255, 128, 0);
      strokeWeight(1);
      line(width / 2, height / 2, mouseX - 20, mouseY - 20); //una linea desde el centro a la posicion del mouse
    }
    if (herramientaSelect == 4) {
      stroke(255, 255, 0);
      line(mouseX + 20, mouseY, mouseX, mouseY - 20); //lineas amarillitas
    }
    if (herramientaSelect == 5) {
      fill(128, 255, 0);
      ellipse(mouseX, mouseY, 10, 10); //punticos verdes
    }
    if (herramientaSelect == 6) {
      stroke(0, 255, 255);
      line(mouseX - 33, mouseY, mouseX + 33, mouseY); //una cruz azulita
      line(mouseX, mouseY - 33, mouseX, mouseY + 33);
    }
    if (herramientaSelect == 7) {
      stroke(0, 0, 153);
      line(windowWidth, mouseY, 0, mouseY); //linea azul oscura al ancho de la pantalla
    }
    if (herramientaSelect == 8) {
      stroke(127, 0, 255);
      line(mouseX, mouseY, mouseX + 70, mouseY); //linea morada horizontal
    }
    if (herramientaSelect == 9) {
      stroke(255, 102, 178);
      line(mouseX, windowHeight, mouseX, 0); //lineas verticales rosadas del alto de la pantalla
    }
    if (herramientaSelect == 10) {
      fill(180);
      stroke(1);
      translate(mouseX, mouseY); //hace un triangulo gris que se mueve con el mouse y va rotando
      rotate(frameCount / 25.0);
      triangle(40, 40, 80, 40, 60, 0);
    }
    if (herramientaSelect == 11) {
      fill(255);
      rect(mouseX, mouseY, 20, 20); //borrador hace un cuadradito blanco
    }
    if (herramientaSelect == 12) {
      background(255); //clear all canvas
    }



    if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 + 3 &&
      mouseY > posYbot1 && mouseY < posYbot1 + tamBot1 + 3) {
      herramientaSelect = 1;
    }
    if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
      mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {
      herramientaSelect = 2;
    }
    if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
      mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {
      herramientaSelect = 3;
    }
    if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
      mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {
      herramientaSelect = 4;
    }
    if (mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 &&
      mouseY > posYbot5 && mouseY < posYbot5 + tamBot5) {
      herramientaSelect = 5;
    }
    if (mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 &&
      mouseY > posYbot6 && mouseY < posYbot6 + tamBot6) {
      herramientaSelect = 6;
    }
    if (mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 &&
      mouseY > posYbot7 && mouseY < posYbot7 + tamBot7) {
      herramientaSelect = 7;
    }
    if (mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 &&
      mouseY > posYbot8 && mouseY < posYbot8 + tamBot8) {
      herramientaSelect = 8;
    }
    if (mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 &&
      mouseY > posYbot9 && mouseY < posYbot9 + tamBot9) {
      herramientaSelect = 9;
    }
    if (mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 &&
      mouseY > posYbot10 && mouseY < posYbot10 + tamBot10) {
      herramientaSelect = 10;
    }
    if (mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
      mouseY > posYbot11 && mouseY < posYbot11 + tamBot11) {
      herramientaSelect = 11;
    }
    if (mouseX > posXbot12 && mouseX < posXbot12 + tamBot11 &&
      mouseY > posYbot12 && mouseY < posYbot12 + tamBot11) {
      herramientaSelect = 12;
    }

  }


}
