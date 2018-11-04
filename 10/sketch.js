//Estado 0= Intro
//estado 99= Ganó
//estado 98= Perdió
//estado 1= Nivel 1
//estado 2 = Nivel 2
//estado 3= Nivel 3
var estado = 0;
var miTime;
var lives = 32;
var noah;
var planta;
var astronauta;
var bike;
var boom;

//crear variables de posición y tamaño para la elipse del astronauta
var x1, x2;
var y1, y2;
var tam1, tam2;


//NIVEL 8 MAKE A BASKET
var x, y; //variable para la posicion de la bola en x y en y;
var velx, vely; //variables para velocidad o cambio de posicion en el tiempo
var tam = 90; //variable tamaño de la elipse



function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Gloria Hallelujah");
  textAlign(CENTER, CENTER);

  noah = loadImage("assets/noah.png"); //noah
  planta = loadImage("assets/planta.png"); //planta
  astronauta = loadImage("assets/astronauta.png"); //astronauta
  bike = loadImage("assets/bike.png"); //bike
  boom = loadImage("assets/boom.jpg"); //boom

  //inicia las posiciones en el cemtro de la pantalla
  x = width / 2;
  y = height / 2;

  //la velocidad inicial es 0
  velx = 0;
  velY = 0;

  //aca se define la posición inicial de la elipse astronauta
  // width / 2 - 70, 3*height / 4
  x1 = width / 2 - 70; //posicion en x
  y1 = 3 * height / 4; //posicion en y
  tam1 = 70; //tamaño

  //nivel7
  x2 = 3 * width / 4;
  y2 = 3 * height / 4 + 20;
  tam2 = 70;
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


  //nIVEL 6: DRAG THE ASTRONAUT TO THE MOON
  if (estado == 6) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Draw the astronaut", width / 2, (height / 2) - 100);
    text("to the moon", width / 2, (height / 2) - 60);
    pop();

    stroke(1);
    strokeWeight(2);
    fill(255);
    ellipse(width / 4 - 50, height / 4 + 200, 100, 100);
    image(astronauta, x1, y1, astronauta.width / 7, astronauta.height / 7); //mitad

  }

  //NIIVEL 7 drag to the non square
  if (estado == 7) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Drag the ball", width / 2, (height / 2) - 100);
    text("to the non-square", width / 2, (height / 2) - 60);
    pop();

    //pinta una elipse en la posicion x2, y2
    strokeWeight(2);
    fill(255, 0, 0);
    stroke(255);
    ellipse(x2, y2, tam2, tam2);

    noFill();
    stroke(1);
    rect(width / 4 + 70, height / 2 - 20, 100, 100);//izq
    rect(width / 4 + 300, height / 2 - 20, 120, 110);//dere

  }

  
  //NIVEL 8; MAke  a basket
  if (estado == 8) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Make a basket", width / 2, (height / 2) - 100);
    pop();

    rect(width / 2 - 100, 3 * height / 4 + 70, 200, 30);
    fill(255, 255, 255, 2);
    rect(width / 2 - 100, 3 * height / 4 + 100, 200, height);

    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -10, 10);
    vely = map(rotationX, -90, 90, -10, 10);

    //pinta la elipse
    fill(255, 140, 0);
    strokeWeight(2);
    stroke(1);
    ellipse(x, y, tam, tam);

    //suma la velocidad en x y en y a las posiciones de la elipse
    x = x + velx;
    y = y + vely;

    //evita que las posiciones se salgan del canvas
    x = constrain(x, tam / 2, width - tam / 2);
    y = constrain(y, tam / 2, height - tam / 2);

  }


  //Perder
  if (estado == 98) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Game Over", width / 2, (height / 2) - 100);
    textSize(60);
    text("LOSER!", width / 2, (height / 2) - 40);
    pop();

    fill(76, 153, 0);
    ellipse(width / 2, (height / 2) + 100, 100, 100); //circulo verde play

    fill(1);
    text("PLAY", width / 2, (height / 2) + 100); //texto play en circulo
    text("again", width / 2, (height / 2) + 120); //texto play en circulo

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
  if (estado == 1) {
    //lives=12;
    if (dist(mouseX, mouseY, width / 2, height / 2 + 45) < 15) {
      estado = 2; //PASA A NIVEL 2
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 110) < 15) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 175) < 15) {
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


  //NIVEL 6 : astronauta a la luna
  if (estado == 6) {
    if (dist(x1, y1, width / 4 - 50, height / 4 + 200) < 100) {
      estado = 7; //PASA A NIVEL 7
    }
  }

  //NIVEL 7 : drag to the non square
  if (estado == 7) {
    if (dist(x2, y2, width / 4 + 300, height / 2 - 20) < 100) {
      estado = 8; //PASA A NIVEL 7
    }
    else if (dist(x2, y2,  width / 4 + 70, height / 2 - 20) < 100) {
      lives = lives - 1;
    }
  }

  if (estado == 8) {
    if (dist(x, y, width / 2 - 100, 3 * height / 4 + 70) < 20) {
      estado = 9; //PASA A NIVEL 7
    }
  }

  if (lives == 0 || lives < 0) {
    estado = 98;
    if (dist(mouseX, mouseY, width / 2, (height / 2) + 100) < 30) {
      estado = 0; //PASA A NIVEL 1
    }
  }

} //CORCHETE QUE CIERRA MOUSEPRESSED


//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

  // NIVEL 6
  //revisa si la posición del astronauta es cercana a la posicion de la luna
  if (dist(mouseX, mouseY, x1, y1) < tam1 / 2 + 20) {

    //actualiza la posicion de la elipse con la posición del mouse
    x1 = mouseX;
    y1 = mouseY;
  }


  // NIVEL 7
  //revisa si la posición del CIRCULO es cercana a la posicion del no cuadrado
  if (dist(mouseX, mouseY, x2, y2) < tam2 / 2 + 20) {

    //actualiza la posicion de la elipse con la posición del mouse
    x2 = mouseX;
    y2 = mouseY;
  }
}