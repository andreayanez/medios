//Estado 0= Intro
//estado 99= Ganó
//estado 98= Perdió
//estado 1= Nivel 1
//estado 2 = Nivel 2
//estado 3= Nivel 3
var estado = 0;
var miTime;
var lives = 12;
var noah;
var planta;
var astronauta;
var bike;
var boom;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Gloria Hallelujah");
  textAlign(CENTER, CENTER);

  noah = loadImage("assets/noah.png"); //noah
  planta = loadImage("assets/planta.png"); //planta
  astronauta = loadImage("assets/astronauta.png"); //astronauta
  bike = loadImage("assets/bike.png"); //bike
  boom = loadImage("assets/boom.jpg"); //boom
}

function draw() {
  miTime = millis(); //me dice el tiempo transcurrido en el juego

  if (estado == 0) {
    background(255, 255, 204);
    push();
    noStroke();
    textSize(30);
    fill(153, 0, 0);
    text("WELCOME TO", width / 2, (height / 2) - 70);
    text("THE IMPOSSIBLE TEST", width / 2, (height / 2) - 30);

    fill(76, 153, 0);
    ellipse(width / 2, (height / 2) + 100, 100, 100); //circulo verde play

    fill(1);
    text("PLAY", width / 2, (height / 2) + 100); //texto play en circulo
    pop();
  }

  if (estado > 0) {
    background(255, 255, 204);
    noStroke();
    textSize(20);
    fill(1);
    text('Time:', width / 4 - 50, height / 4);
    text(floor(miTime / 1000), width / 4, height / 4);
    text('Lives:', 3 * width / 4 - 50, height / 4);
    text(floor(lives), 3 * width / 4, height / 4);
  }

  //NIVEL 1 SEMAFORO
  if (estado == 1) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Touch the red light", width / 2, (height / 2) - 100);
    pop();

    //Semáforo
    fill(1);
    rect(width / 2 - 50, height / 2, 100, 210); //semaforo outline negro
    fill(255, 0, 0);
    ellipse(width / 2, height / 2 + 45, 50, 50); //circulo rojo
    fill(255, 255, 51);
    ellipse(width / 2, height / 2 + 110, 50, 50); //circulo amarillo
    fill(76, 153, 0);
    ellipse(width / 2, height / 2 + 175, 50, 50); //circulo verde 
  }

  //NIVEL 2 Square Noah
  if (estado == 2) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Tap the square", width / 2, (height / 2) - 100);
    text("with the guy", width / 2, (height / 2) - 60);
    pop();
    stroke(1);
    fill(76, 153, 0, 50);
    rect(width / 4, height / 2, 90, 90);
    image(noah, width / 4, height / 2, noah.width / 5, noah.height / 5);
    rect(width / 2 - 30, height / 2, 85, 20);
    rect(3 * width / 4 - 40, height / 2, 60, 80);

  }

  //NIVEL 3 BIGGEST CIRCLE
  if (estado == 3) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Tap the biggest circle", width / 2, (height / 2) - 100);
    pop();
    fill(random(255, 0), 255, 0);
    stroke(1);
    ellipse(width / 2, height / 2, 50, 50);
    ellipse(width / 2, height / 2 + 100, 75, 75);
    ellipse(3 * width / 4 - 100, height / 2 + 80, 85, 85); //este es el más grande
    ellipse(1 * width / 4 + 50, height / 2 + 30, 80, 80);
  }

  //nivel 4 CYAN SQUARE
  if (estado == 4) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Touch the cyan square", width / 2, (height / 2) - 100);
    pop();
    fill(0, 255, 255);
    stroke(1);
    rect(width / 4, height / 2, 60, 60); //este es!
    rect(width / 2 - 40, height / 2, 80, 70);
    rect(3 * width / 4 - 25, height / 2, 50, 55);
  }

  //NIVEL 5: KILL THE PLANTS
  if (estado == 5) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Kill the plants", width / 2, (height / 2) - 100);
    text("from right to left", width / 2, (height / 2) - 60);
    pop();
    fill(1);
    rect(width / 4 - 60, height / 2, 100, 180) //rect dere
    rect(width / 2 - 60, height / 2, 100, 180) //rect mid
    rect(3 * width / 4 - 60, height / 2, 100, 180) //rect left

    image(planta, width / 4 - 70, height / 2, planta.width / 7, planta.height / 7); //right
    image(planta, width / 2 - 70, height / 2, planta.width / 7, planta.height / 7); //mitad
    image(planta, 3 * width / 4 - 70, height / 2, planta.width / 7, planta.height / 7); //izq
  }

  //nivel 5.1
  //NIVEL 5: KILL THE PLANTS
  if (estado == 5.1) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Kill the plants", width / 2, (height / 2) - 100);
    text("from right to left", width / 2, (height / 2) - 60);
    pop();
    fill(1);
    rect(width / 4 - 60, height / 2, 100, 180) //rect dere
    rect(width / 2 - 60, height / 2, 100, 180) //rect mid
    rect(3 * width / 4 - 60, height / 2, 100, 180) //rect left

    image(planta, width / 4 - 70, height / 2, planta.width / 7, planta.height / 7); //right
    image(planta, width / 2 - 70, height / 2, planta.width / 7, planta.height / 7); //mitad

  }

  //nivel 5.2
  //NIVEL 5: KILL THE PLANTS
  if (estado >= 5.1 && estado == 5.2) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Kill the plants", width / 2, (height / 2) - 100);
    text("from right to left", width / 2, (height / 2) - 60);
    pop();
    fill(1);
    rect(width / 4 - 60, height / 2, 100, 180) //rect dere
    rect(width / 2 - 60, height / 2, 100, 180) //rect mid
    rect(3 * width / 4 - 60, height / 2, 100, 180) //rect left

    image(planta, width / 4 - 70, height / 2, planta.width / 7, planta.height / 7); //right

  }


  //nivel 5.3
  //NIVEL 5: KILL THE PLANTS
  if (estado >= 5.2 && estado == 5.3) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Kill the plants", width / 2, (height / 2) - 100);
    text("from right to left", width / 2, (height / 2) - 60);
    pop();
    fill(1);
    rect(width / 4 - 60, height / 2, 100, 180) //rect dere
    rect(width / 2 - 60, height / 2, 100, 180) //rect mid
    rect(3 * width / 4 - 60, height / 2, 100, 180) //rect left

  }

  //NIVEL 6: KILL THE PLANTS
  if (estado == 6) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Nivel 6", width / 2, (height / 2) - 100);
    pop();
  }
    
} //corchete cierra draw

function mousePressed() {

  //ANTES DE EMPEZAR
  if (estado == 0) {
    if (dist(mouseX, mouseY, width / 2, (height / 2) + 100) < 50) {
      estado = 1; //PASA A NIVEL 1
    }
  }

  //NIVEL 1 : TOUCH THE RED LIGHT
  if (estado == 1 ) {
    if (dist(mouseX, mouseY, width / 2, height / 2 + 45) < 25) {
      estado = 2; //PASA A NIVEL 2
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 110) < 25) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 175) < 25) {
      lives = lives - 1;
    }

  }

  //NIVEL 2: TAP THE SQUARE WITH THE GUY
  if (estado == 2) {
    if (dist(mouseX, mouseY, width / 4 + 40, height / 2 + 40) < 50) {
      estado = 3; //PASA A NIVEL 3
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 40) < 50) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, 3 * width / 4, height / 2 + 40) < 50) {
      lives = lives - 1;
    }
  }

  //NIVEL 3 : TAP THE BIGGEST CIRCLE
  if (estado == 3) {
    if (dist(mouseX, mouseY, 3 * width / 4 - 100, height / 2 + 80) < 40) {
      estado = 4; //PASA A NIVEL 3
    } else if (dist(mouseX, mouseY, width / 4 + 50, height / 2 + 30) < 35) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 100) < 38) {
      lives = lives - 1;
    }
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < 25) {
    lives = lives - 1;
  }

  //NIVEL 4 : TOUCH THE CYAN SQUARE
  if (estado == 4) {
    if (dist(mouseX, mouseY, width / 4 + 30, height / 2 + 30) < 30) {
      estado = 5; //PASA A NIVEL 3
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 40) < 40) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, 3 * width / 4, height / 2 + 25) < 25) {
      lives = lives - 1;
    }
  }

  //NIVEL 5: KILL THE PLANTS
  if (estado == 5) {
    if (dist(mouseX, mouseY, 3 * width / 4 - 70, height / 2) < 100) {
      //rect(3*width / 4-60, height / 2, 100, 180) //rect left
      estado = 5.1;
    }
  }
  if (estado >= 5.1 && dist(mouseX, mouseY, width / 2 - 70, height / 2 + 50) < 100) {
    // lives = lives -1;
    estado = 5.2
  }
  if (estado <= 5.1 && dist(mouseX, mouseY, width / 2 - 70, height / 2 + 50) < 100) {
    lives = lives - 1;
  }
  if (estado >= 5.2 && dist(mouseX, mouseY, width / 4 - 70, height / 2 + 50) < 100) {
    estado = 5.3;
  }
  if (estado <= 5.2 && dist(mouseX, mouseY, width / 4 - 70, height / 2 + 50) < 100) {
    lives = lives - 1;
  }
  if (estado >= 5.3) {
    estado = 6;
  }
  




} //CORCHETE QUE CIERRA MOUSEPRESSED