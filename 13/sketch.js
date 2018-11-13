//Estado 0= Intro
//estado 99= Ganó
//estado 98= Perdió
//estado 1= Nivel 1
//estado 2 = Nivel 2
//estado 3= Nivel 3
var estado = 0;
var miTime;
var lives = 10;
var noah;
var planta;
var astronauta;
var bike;
var boom;
var trofeo;
var tick;
var equis;
var brujula;
var box;

//crear variables de posición y tamaño para la elipse del astronauta
var x1, x2;
var y1, y2;
var tam1, tam2;


//NIVEL 8 MAKE A BASKET
var x, y; //variable para la posicion de la bola en x y en y;
var velx, vely; //variables para velocidad o cambio de posicion en el tiempo
var tam = 90; //variable tamaño de la elipse

//nivel 18
var tiempo; //crea una lista de tiempo para guardar el tiempo entre dos clics
var vel; //variable para guardar la velocidad de los clics
var tamB; //tamaño de la bola
var mtam; //variable para suavizar el tamaño de la bola

/*/
// prevent scrolling of page
document.ontouchmove = function(event){
  event.preventDefault();
} /*/



function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Gloria Hallelujah");
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  //Draw the rectangle from the center and it will also be the
  //rotate around that center
  //rectMode(CENTER);

  noah = loadImage("assets/noah.png"); //noah
  planta = loadImage("assets/planta.png"); //planta
  astronauta = loadImage("assets/astronauta.png"); //astronauta
  bike = loadImage("assets/bike.png"); //bike
  boom = loadImage("assets/BOOM.jpg"); //boom
  trofeo = loadImage("assets/trofeo.png"); //trofeo Trophy by Susannanova from the Noun Project
  equis = loadImage("assets/equis.png"); //equis
  tick = loadImage("assets/tick.png"); //tick
  brujula = loadImage("assets/brujula.png"); //brujula
  box = loadImage("assets/box.png"); //brujula



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
  
  //nivel 18
  tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
  vel = 0; //velocidad inicial es cero
  //tamaño inicial es 10px
  tamB = 10;
  mtam = 10;


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
    text("Touch the blue square", width / 2, (height / 2) - 100);
    pop();
    fill(0, 255, 255);
    stroke(1);
    rect(width / 4, height / 2, 60, 60); //este es!
    rect(width / 2 - 40, height / 2, 80, 70);
    rect(3 * width / 4 - 25, height / 2, 50, 55);
  }



  /*/
    //NIVEL 5: KILL THE PLANTS
    if (estado >4 && estado <6){
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
    else if (estado == 5.1) {
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
    else if (estado >= 5.1 && estado == 5.2) {
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
    else if (estado >= 5.2 && estado == 5.3) {
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
    }
  /*/




  //NIIVEL6 PRESS GREEN TO NOT ADVANCE 
  else if (estado == 5) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Press the green circle", width / 2, (height / 2) - 100);
    text("to not-advance", width / 2, (height / 2) - 60);
    pop();


    fill(76, 153, 0);
    ellipse(width / 2 - 120, (height / 2) + 100, 100, 100); //circulo verde go mal
    fill(1);
    text("GO", width / 2 - 120, (height / 2) + 100); //texto go en circulo

    fill(255, 0, 0);
    ellipse(width / 2 + 80, (height / 2) + 100, 100, 100); //circulo rojo bien
    fill(1);
    text("NO", width / 2 + 80, (height / 2) + 100); //texto no en circulo
  }




  //NIIVEL 6 magnets
  if (estado == 6) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Quickly! Don´t touch", width / 2, (height / 2) - 100);
    text("the south magnet", width / 2, (height / 2) - 60);
    pop();

    stroke(1);
    fill(0, 255, 255);
    rect(width / 2 - 100, 3 * height / 5 + 50, 200, 50);
    fill(1);
    text("N", width / 2, 3 * height / 5 + 75);


    fill(255, 0, 0);
    rect(width / 2 - 100, 3 * height / 5 + 140, 200, 50);
    fill(1);
    text("S", width / 2, 3 * height / 5 + 165);
  }






  //nIVEL 7: DRAG THE ASTRONAUT TO THE MOON
  if (estado == 7) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Drag the astronaut", width / 2, (height / 2) - 100);
    text("to the moon and tap", width / 2, (height / 2) - 60);
    pop();

    stroke(1);
    strokeWeight(2);
    fill(255);
    ellipse(width / 4 - 50, height / 4 + 200, 100, 100);
    image(astronauta, x1, y1, astronauta.width / 7, astronauta.height / 7); //mitad
  }




  //NIIVEL 8 drag to the non square
  if (estado == 8) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Drag the ball", width / 2, (height / 2) - 100);
    text("to the non-square and tap", width / 2, (height / 2) - 60);
    pop();

    //pinta una elipse en la posicion x2, y2
    strokeWeight(2);
    fill(255, 0, 0);
    stroke(255);
    ellipse(x2, y2, tam2, tam2);

    noFill();
    stroke(1);
    rect(width / 4 + 70, height / 2 - 20, 100, 100); //izq
    rect(width / 4 + 300, height / 2 - 20, 120, 110); //dere
  }





  //NIIVEL  SALE TROFEO
  if (estado == 9) {
    //Instrucciones
    push();
    textSize(30);
    fill(153, 0, 0);
    text("You are still pretty dumb", width / 2, (height / 2) - 100);
    text("but at least you passed", width / 2, (height / 2) - 60);
    text("the first 10!", width / 2, (height / 2) - 20);
    pop();
    image(trofeo, width / 2 - 85, height / 2 + 50, trofeo.width / 3, trofeo.height / 3);
    fill(76, 153, 0);
    ellipse(width / 2, 3 * height / 4 + 60, 50, 50);
    fill(1);
    text("->", width / 2, 3 * height / 4 + 60);
  }






  //NIVEL TAP THE ANSWER
  if (estado == 10) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Tap the", width / 2, (height / 2) - 100);
    text("Answer", width / 2, (height / 2) - 50);
    pop();
    textSize(60);
    text("out of order ", random(width / 4, 3 * width / 4), random(height / 2, 3 * height / 4));
  }






  //nivel 11 CLICK THE SMALLEST
  if (estado == 11) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Click the smallest", width / 2, (height / 2) - 100);
    pop();
    fill(153, 0, 0);
    ellipse(width / 4, height / 2, 60, 60);
    ellipse(width / 2 - 40, height / 2, 80, 80);
    ellipse(3 * width / 4 - 25, height / 2, 95, 95);
    ellipse(width / 2 - 137, height / 2 - 113, 10, 10); // este es punto i
  }






  //nivel TOUCH THE WRONG ONE
  if (estado == 12) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Touch the wrong one", width / 2, (height / 2) - 100);
    text("on the left", width / 2, (height / 2) - 60);
    pop();

    stroke(1);
    noFill();
    ellipse(width / 2 - 150, height / 2 + 50, 150, 150); //círculo x
    ellipse(width / 2 + 125, height / 2 + 50, 150, 150); //circulo tick

    image(equis, width / 2 - 200, height / 2, equis.width / 2, equis.height / 2);
    image(tick, width / 2 + 75, height / 2, equis.width / 2, equis.height / 2);

  }







  //NIVEL 13 DO THE OPPOSITE OF QUESTION 1
  if (estado == 13) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Do the opposite of question 1", width / 2, (height / 2) - 100);
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






  //NIVEL 14 DO THE OPPOSITE OF QUESTION 1
  if (estado == 14) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Quickly! Press South", width / 2, (height / 2) - 100);
    text("to advance", width / 2, (height / 2) - 60);
    pop();

    noFill();
    ellipse(width / 2 - 5, 3 * height / 4 + 90, 40, 40); //south
    ellipse(width / 2 - 5, height / 2 + 50, 40, 40); //north
    ellipse(width / 4 + 100, 3 * height / 4 - 60, 40, 40); //west
    ellipse(3 * width / 4 - 130, 3 * height / 4 - 60, 40, 40); //east
    image(brujula, width / 2 - 200, height / 2, brujula.width * 1.5, brujula.height * 1.5);

  }







  //NIIVEL  15 SALE TROFEO
  if (estado == 15) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("You are getting pretty smart", width / 2, (height / 2) - 100);
    text("Good Job!", width / 2, (height / 2) - 50);
    pop();
    image(trofeo, width / 2 - 85, height / 2 + 50, trofeo.width / 3, trofeo.height / 3);

    push();
    fill(255);
    textSize(50);
    text("15!", width / 2 + 5, (height / 2) + 90);
    pop();
    fill(76, 153, 0);
    ellipse(width / 2, 3 * height / 4 + 60, 50, 50);
    fill(1);
    text("->", width / 2, 3 * height / 4 + 60);
  }








  //NIIVEL  16 REMEMBER ANSWER TO Q 19
  if (estado == 16) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Remember the Answer for", width / 2, (height / 2) - 100);
    text("question 19 is 19", width / 2, (height / 2) - 50);
    pop();

    fill(76, 153, 0);
    ellipse(width / 2, (height / 2) + 100, 100, 100); //circulo verde play

    fill(1);
    text("OKAY!", width / 2, (height / 2) + 100); //texto play en circulo
   

  }







  //NIIVEL 17 PUT 5 FINGERS
  if (estado == 17) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("Press the screen", width / 2, (height / 2) - 100);
    text("with 5 fingers", width / 2, (height / 2) - 50);
    pop();

    stroke(255);
    strokeWeight(4);
    fill(random(100, 250), 0, random(100, 250));

    //inicia una figura
    beginShape();

    //recorre todos los puntos en los que se esta tocando la pantalla
    for (var i = 0; i < touches.length; i++) {
      //en las coordenadas de cada punto crea un vertice
      vertex(touches[i].x, touches[i].y);
    }
    //cierra la figura
    endShape(CLOSE);

  }





  
  
  
  
  
  //NIIVEL  tap here many times
  if (estado == 18) {
    //Instrucciones
    push();
    textSize(40);
    fill(173,255,47);
    ellipse(width/2+160, height/2 -100, 120, 60);
    fill(153, 0, 0);
    text("Tap the screen HERE", width / 2, (height / 2) - 100);
    text("really fast!", width / 2, (height / 2) - 50);
    pop();
    
   
    
     //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
  //tiempo[1] = tiempo en el que se hizo el primer clic
  //tiempo[0] = tiempo en el que se hizo el segundo clic
  var vel = 60000 / (tiempo[1] - tiempo[0]);

  //si han pasado mas de 200 millisegundos entre un clic y otro se asigna un valor de 0 a la velocidad
  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }
    
    //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 clics por segundo
  if (vel != Infinity && floor(vel) > 200){

    //aumenta el tamaño de la elipse dependiendo de los clics por minuto
    tamB+= vel/400;

  } else if (tamB > 10){ //si la velocidad es menor a 200 y el tamaño de la elipse es mayor a 10

    //disminuye el tamaño de la elipse
    tamB-= 3;

  } else {

    //establece 10 como el tamaño mínimo para la elipse
    tamB = 10;

  }

  //esta parte del codigo permite suavizar el cambio de tamaño de la ellipse
  var dif = tamB - mtam; //resta del tamaño actual de la bola con el nuevo tamaño

  //si la bola debe cambiar de tamaño lo hace pero de manera suave
  if(abs(dif) > 1.0) {
    mtam = mtam + dif/8.0;
  }

  //pinta la ellipse con el nuevo tamaño
  fill(255, 0, 0);
  strokeWeight(3);
  stroke(255);
  ellipse (width/2, height/2, mtam, mtam);
    //print(vel);
  }
  
  
  
  
  
  
  //NIIVEL  19 ANSWER 19
  if (estado == 19) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("What was the answer", width / 2, (height / 2) - 100);
    text("to Question 19?", width / 2, (height / 2) - 50);
    pop();
    
    fill(255,140,0);
    ellipse(width/2-100, height/2+50, 60, 60);//izq up
    ellipse(width/2-100, height/2+120, 60, 60);//ixq down    ESTA ES !!
    ellipse(width/2+100, height/2+50, 60, 60); //dere up
    ellipse(width/2+100, height/2+120, 60, 60); //dere down
    
    
    fill(1);
    text("18", width/2-100, height/2+50);//izq up
    text("19", width/2-100, height/2+120);//ixq down    ESTA ES !!
    text("20", width/2+100, height/2+50); //dere up
    text("17", width/2+100, height/2+120); //dere down
  }
  
  
  
  
  
  
  
  
  
  //NIIVEL  20 SALE TROFEO
  if (estado == 20) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    text("You weren't as dumb", width / 2, (height / 2) - 100);
    text("You finished the game!", width / 2, (height / 2) - 50);
    pop();
    image(trofeo, width / 2 - 85, height / 2 + 50, trofeo.width / 3, trofeo.height / 3);

    push();
    fill(255);
    textSize(50);
    text("20!", width / 2 + 5, (height / 2) + 90);
    fill(76, 153, 0);
    ellipse(width / 2, 3 * height / 4 + 60, 70, 50);
    fill(1);
    textSize(20);
    text("again", width / 2, 3 * height / 4 + 60);
    pop();
  }
  
  
  
  
  
  
  
  
  
/*/
  //NIIVEL  28 BOX
  if (estado == 28) {
    //Instrucciones
    push();
    textSize(40);
    fill(153, 0, 0);
    //text("Turn the box", width / 2, (height / 2) - 100);
    image(box, width / 2 - 70, height / 2 - 50);
  }

  //NIVEL 1 MAke  a basket
  if (estado == 24) {
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
/*/



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
      lives = 10;
    }
  }





  //NIVEL 1 : TOUCH THE RED LIGHT
  else if (estado == 1) {
    if (dist(mouseX, mouseY, width / 2, height / 2 + 45) < 15) {
      estado = 2; //PASA A NIVEL 2
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 110) < 15) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 175) < 15) {
      lives = lives - 1;
    }
  }





  //NIVEL 2: TAP THE SQUARE WITH THE GUY
  else if (estado == 2) {
    if (dist(mouseX, mouseY, width / 4 + 40, height / 2 + 40) < 50) {
      estado = 3; //PASA A NIVEL 3
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 40) < 50) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, 3 * width / 4, height / 2 + 40) < 50) {
      lives = lives - 1;
    }
  }





  //NIVEL 3 : TAP THE BIGGEST CIRCLE
  else if (estado == 3) {
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
  else if (estado == 4) {
    if (dist(mouseX, mouseY, width / 4 + 30, height / 2 + 30) < 30) {
      estado = 5; //PASA A NIVEL 3
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 40) < 40) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, 3 * width / 4, height / 2 + 25) < 25) {
      lives = lives - 1;
    }
  }




  /*/
  //NIVEL 5: KILL THE PLANTS
  else if (estado == 5) {
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
/*/



  //NIVEL 6 PRESS GREEN TO NOT ADVANCE
  else if (estado == 5) {
    if (dist(mouseX, mouseY, width / 2 + 80, (height / 2) + 100) < 50) {
      estado = 6; //PASA A NIVEL 8
    } else if (dist(mouseX, mouseY, width / 2 - 120, (height / 2) + 100) < 50) {
      lives = lives - 1;
    }
  }




  //NIVEL 7 MAGNETS
  else if (estado == 6) {
    if (dist(mouseX, mouseY, width / 2, 3 * height / 5 + 75) < 30) { //magnet N
      estado = 7; //PASA A NIVEL 7
    } else if (dist(mouseX, mouseY, width / 2, 3 * height / 5 + 165) < 30) { //magnet S
      lives = lives - 1;
    }
  }




  //NIVEL 8 : astronauta a la luna
  else if (estado == 7) {
    if (dist(x1, y1, width / 4 - 50, height / 4 + 200) < 100) {
      estado = 8; //PASA A NIVEL 9
    }
  }






  //NIVEL 9 : drag to the non square
  else if (estado == 8) {
    if (dist(x2, y2, width / 4 + 300, height / 2 - 20) < 100) {
      estado = 9; //PASA A NIVEL 10
    } else if (dist(x2, y2, width / 4 + 70, height / 2 - 20) < 100) {
      lives = lives - 1;
    }
  }



  //nivel trofeo
  else if (estado == 9) {
    if (dist(mouseX, mouseY, width / 2, 3 * height / 4 + 60) < 25) {
      estado = 10; //PASA A NIVEL 10
    }
  }





  //niivel the answer
  else if (estado == 10) {
    if (dist(mouseX, mouseY, width / 2, (height / 2) - 50) < 40) {
      estado = 11; //PASA A NIVEL 10
    }
  }




  //smallest circle
  else if (estado == 11) {
    if (dist(mouseX, mouseY, width / 2 - 137, height / 2 - 113) < 10) { // este es punto i
      estado = 12;
    } else if (dist(mouseX, mouseY, width / 4, height / 2) < 30) { //dere
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 2 - 40, height / 2) < 40) { //miti
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, 3 * width / 4 - 25, height / 2) < 25) { //left
      lives = lives - 1;
    }

  }






  //nivel TOUCH THE WRONG ONE ON THE RIGHT
  else if (estado == 12) {
    if (dist(mouseX, mouseY, width / 2 - 150, height / 2 + 50) < 75) { // este es punto i
      estado = 13;
    } else if (dist(mouseX, mouseY, width / 2 + 125, height / 2 + 50) < 75) {
      lives = lives - 1;
    }
  }





  //nivel semáforo todos menos el rojo
  else if (estado == 13) {
    if (dist(mouseX, mouseY, width / 2, height / 2 + 45) < 15) {
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 110) < 15) {
      estado = 14;
    } else if (dist(mouseX, mouseY, width / 2, height / 2 + 175) < 15) {
      estado = 14;
    }
  }




  //nivel BRUJULA SUR
  else if (estado == 14) {
    if (dist(mouseX, mouseY, width / 2 - 5, 3 * height / 4 + 90) < 50) { //south
      estado = 15; //PASA A NIVEL 15
    } else if (dist(mouseX, mouseY, width / 2 - 5, height / 2 + 50) < 50) { //north
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, width / 4 + 100, 3 * height / 4 - 60) < 50) { //west
      lives = lives - 1;
    } else if (dist(mouseX, mouseY, 3 * width / 4 - 130, 3 * height / 4 - 60) < 50) { //east
      lives = lives - 1;
    }
  }



  //nivel trofeo
  else if (estado == 15) {
    if (dist(mouseX, mouseY, width / 2, 3 * height / 4 + 60) < 25) {
      estado = 16; //PASA A NIVEL 16
    }
  }






//nivel 16 remember
  else if (estado == 16) {
    if (dist(mouseX, mouseY, width / 2, (height / 2) + 100) < 50) {
      estado = 17; //PASA A NIVEL 17
    }
  }


  
  
  
//nivel 17 touch 5 fingers
  else if (estado == 17) {
    //recorre todos los puntos en los que se esta tocando la
    //pantalla y revisa su distancia con respecto al boton
    for (var j = 5; j < touches.length; j++) {
      estado = 18;
    }
  }
  
  
  
  
  
  //NIVEL 18tap many times
  else if(estado==18){
    if (vel>200||tamB>100){
      estado=19; //PASA A NIVEL 19
    }
  }
  
  
  
  //NIVEL 19 =19
  else if(estado==19){
    if (dist(mouseX, mouseY,width/2-100, height/2+120) < 30) {//IZQ DOWN SI ES!
      estado = 20; //PASA A NIVEL 20
    }else if (dist(mouseX, mouseY, width/2-100, height/2+50) < 30) { //IZQ UP
      lives = lives - 1;
    }else if (dist(mouseX, mouseY, width/2+100, height/2+50) < 30) { //DERE UP
      lives = lives - 1;
    }else if (dist(mouseX, mouseY, width/2+100, height/2+120) < 30) { //DERE UP
      lives = lives - 1;
    }
  }
  
  
  
  
  
    //nivel trofeo 20
  else if (estado == 20) {
    if (dist(mouseX, mouseY, width / 2, 3 * height / 4 + 60) < 25) {
      estado = 0; //PASA A NIVEL 0
    }
  }
  
  
  
  
  
  /*/
  //nivel caja
  else if(estado==28){
    if (dist(mouseX, mouseY, width / 2 - 35, height / 2 +20) < 50) {
      estado = 19; //PASA A NIVEL 17

    } 
  }
/*/



  
  if (lives == 0 || lives < 0) {
    estado = 98;
    if (dist(mouseX, mouseY, width / 2, (height / 2) + 100) < 30) {
      estado = 0; //PASA A NIVEL 1
    }
  }

} //CORCHETE QUE CIERRA MOUSEPRESSED








//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

  // NIVEL 8
  //revisa si la posición del astronauta es cercana a la posicion de la luna
  if (dist(mouseX, mouseY, x1, y1) < tam1 / 2 + 20) {

    //actualiza la posicion de la elipse con la posición del mouse
    x1 = mouseX;
    y1 = mouseY;
  }


  // NIVEL 9
  //revisa si la posición del CIRCULO es cercana a la posicion del no cuadrado
  else if (dist(mouseX + 30, mouseY + 30, x2, y2) < tam2 / 2 + 20) {

    //actualiza la posicion de la elipse con la posición del mouse
    x2 = mouseX;
    y2 = mouseY;
  }
  else {return false;}
}





//funcion que se llama cuando se hace clic
function mouseClicked() {

  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
}
