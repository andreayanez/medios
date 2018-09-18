var miSegundo;
var miHora;
var miSegundoModificado;
var ojo1;
var ojo2;
var hBambu = 240;

function setup() {
  createCanvas(700, 700);

}

function draw() {
  background(253, 198, 137);

  noStroke();
  fill(1);
  ellipse(200, 200, 150, 150); //oreja izq
  ellipse(500, 200, 150, 150); //oreja dere

  fill(255);
  ellipse(width / 2, height / 2, 400, 350); //cabeza

  fill(1);
  ellipse(270, 350, 150, 130); //ojera izq
  ellipse(430, 350, 150, 130); //ojera dere

  push();
  fill(255);
  stroke(1);
  ellipse(350, 440, 170, 140); //hocico
  stroke(255);
  fill(1);
  ellipse(350, 370, 50, 30); //nariz
  pop();

  //contador tiempo bambú
  miSegundo = second();
  miSegundoModificado = map(miSegundo, 0, 59, 0, 240);
  miHora = hour();



  //0-2am Giant Panda is Resting
  if (0 < miHora < 2) {
    fill(1);
    ojo1 = ellipse(290, 350, 30, 30); //ojo izq
    ojo2 = ellipse(400, 350, 30, 30); // ojo dere
  }



  //2am-8am Giant Panda is Eating its Breakfast
  if (2 <= miHora < 8) {
    fill(255);
    ojo1 = ellipse(290, 350, 20, 20); //ojo izq
    ojo2 = ellipse(400, 350, 20, 20); // ojo dere
    fill(1);
    ellipse(350, 450, 50, 50); //boca
    push();
    fill(104, 199, 31);
    rect(335, 445, 30, hBambu - miSegundoModificado); //bambú
    strokeWeight(3);
    stroke(0, 153, 0);
    line(340, 685 - miSegundoModificado, 360, 685 - miSegundoModificado);
    pop();
  }



  //8am-10:30am Giant Panda is Resting
  if (8 <= miHora < 10.3) {
    fill(1);
    ojo1 = ellipse(290, 350, 30, 30); //ojo izq
    ojo2 = ellipse(400, 350, 30, 30); // ojo dere
    
  }



  //8am-10:30am Giant Panda is Playing
  if (10.3 <= miHora < 11) {
    fill(255);
    ojo1 = ellipse(290, 350, 30, 30); //ojo izq
    ojo2 = ellipse(400, 350, 30, 30); // ojo dere   //plaaayy
  }


  
  //11am-13pm Giant Panda in Eating Lunch
  if (11 <= miHora < 13) {
    fill(255);
    ojo1 = ellipse(290, 350, 20, 20); //ojo izq
    ojo2 = ellipse(400, 350, 20, 20); // ojo dere
    fill(1);
    ellipse(350, 450, 50, 50); //boca
    push();
    fill(104, 199, 31);
    rect(335, 445, 30, hBambu - miSegundoModificado); //bambú
    strokeWeight(3);
    stroke(0, 153, 0);
    line(340, 685 - miSegundoModificado, 360, 685 - miSegundoModificado);
    pop();
  }


  
  
  //13pm-15pm Giant Panda is Playing
  if (13 <= miHora < 15) {
    fill(255);
    ojo1 = ellipse(290, 350, 30, 30); //ojo izq
    ojo2 = ellipse(400, 350, 30, 30); // ojo dere   //plaaayy
  }


  
  
  //15pm-21pm Giant Panda is Eating Dinner
  if (15 <= miHora < 19) {
    fill(255);
    ojo1 = ellipse(290, 350, 20, 20); //ojo izq
    ojo2 = ellipse(400, 350, 20, 20); // ojo dere
    fill(1);
    ellipse(350, 450, 50, 50); //boca
    push();
    fill(104, 199, 31);
    rect(335, 445, 30, hBambu - miSegundoModificado); //bambú
    strokeWeight(3);
    stroke(0, 153, 0);
    line(340, 685 - miSegundoModificado, 360, 685 - miSegundoModificado);
    pop();
  }

  
  
  //19-23pm Giant Panda is Resting
  if (19 <= miHora < 23) {
    fill(1);
    ojo1 = ellipse(290, 350, 40, 40); //ojo izq
    ojo2 = ellipse(400, 350, 40, 40); // ojo dere
  }
  
  
  
  if (23 <= miHora < 23.5) {
    fill(255);
    ojo1 = ellipse(290, 350, 20, 20); //ojo izq
    ojo2 = ellipse(400, 350, 20, 20); // ojo dere
    fill(1);
    ellipse(350, 450, 50, 50); //boca
    push();
    fill(104, 199, 31);
    rect(335, 445, 30, hBambu - miSegundoModificado); //bambú
    strokeWeight(3);
    stroke(0, 153, 0);
    line(340, 685 - miSegundoModificado, 360, 685 - miSegundoModificado);
    pop();
  }
 
  
  text('Giant Panda Daily Life', 290, 50);
  //text('About 54.8% time for food, 43.06% for rest, and 2.08% to play.', 190, 650);
  //http://www.chinagiantpanda.com/pandafaq/pandaactivitytime.htm
}