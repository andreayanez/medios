var Mex = 0;
var Yuca = 0;
var Col = 1;
var rex = 200;
var yat = 200;
var tex = 0;
var Yus = 400;
var bex = 400; //eje x
var yes = 400; //eje y
var ex = 0;
var eye = 600;

function setup() {
  createCanvas(600, 800);
  background(255);
}

function draw() {

  for (var x = 0; x < 10; x = x + 1) {
    noStroke();
    fill(Col);
    beginShape();
    vertex(Mex, Yuca);
    vertex(Mex, Yuca + 25);
    vertex(Mex + 50, Yuca + 25);
    vertex(Mex + 25, Yuca);
    vertex(Mex + 25, Yuca + 25);
    endShape(CLOSE);


    fill(Col);
    beginShape();
    vertex(Mex + 50, Yuca);
    vertex(Mex + 100, Yuca);
    vertex(Mex + 100, Yuca + 25);
    vertex(Mex + 75, Yuca);
    vertex(Mex + 75, Yuca + 25);
    endShape(CLOSE);

    Mex = Mex + 100;

    if (Mex >= 600 && Yuca < 25) {
      Mex = -25;
      Yuca = Yuca + 25;
    } else if (Mex >= 600 && Yuca < 50) {
      Mex = -50;
      Yuca = Yuca + 25;
    } else if (Mex >= 600 && Yuca < 75) {
      Mex = -75;
      Yuca = Yuca + 25;
    } else if (Mex >= 600 && Yuca < 100) {
      Mex = -100;
      Yuca = Yuca + 25;
    } else if (Mex >= 600 && Yuca < 125) {
      Mex = -125;
      Yuca = Yuca + 25;
    } else if (Mex >= 600 && Yuca < 150) {
      Mex = -150;
      Yuca = Yuca + 25;
    } else if (Mex >= 600 && Yuca < 175) {
      Mex = -175;
      Yuca = Yuca + 25;
    }
    fill(255);
    rect(200, 0, 200, 200);
    rect(400, 200, 200, 200);
  }



  for (var x2 = 0; x2 < 3; x2 = x2 + 25) {
    noStroke();
    fill(255, 198, 13);
    triangle(rex, yat, rex + 25, yat + 25, rex, yat + 25);
    triangle(rex + 25, yat, rex + 50, yat, rex + 50, yat + 25);
    triangle(rex + 50, yat, rex + 75, yat, rex + 75, yat + 25);
    triangle(rex + 75, yat, rex + 75, yat + 25, rex + 100, yat + 25);

    rex = rex + 100;

    if (rex >= 400 && yat < 225) {
      rex = -25;
      yat = 225;
    }

    if (rex >= 400 && yat < 250) {
      rex = -50;
      yat = yat + 25;
    }

    if (rex >= 400 && yat < 275) {
      rex = -75;
      yat = yat + 25;
    }


    if (rex >= 400 && yat < 300) {
      rex = -100;
      yat = yat + 25;
    }

    if (rex >= 400 && yat < 325) {
      rex = -25;
      yat = yat + 25;
    }

    if (rex >= 400 && yat < 350) {
      rex = -50;
      yat = yat + 25;
    }

    if (rex >= 400 && yat < 375) {
      rex = -75;
      yat = yat + 25;
    }

    fill(255);
    rect(0, 200, 200, 200);
  }


  for (var x3 = 0; x3 < 10; x3 = x3 + 1) {
    noStroke();
    fill(Col);
    beginShape();
    vertex(tex, Yus);
    vertex(tex, Yus + 25);
    vertex(tex + 50, Yus + 25);
    vertex(tex + 25, Yus);
    vertex(tex + 25, Yus + 25);
    endShape(CLOSE);


    fill(Col);
    beginShape();
    vertex(tex + 50, Yus);
    vertex(tex + 100, Yus);
    vertex(tex + 100, Yus + 25);
    vertex(tex + 75, Yus);
    vertex(tex + 75, Yus + 25);
    endShape(CLOSE);

    tex = tex + 100;

    if (tex >= 200 && Yus < 425) {
      tex = -25;
      Yus = Yus + 25;
    } else if (tex >= 200 && Yus < 450) {
      tex = -50;
      Yus = Yus + 25;
    } else if (tex >= 200 && Yus < 475) {
      tex = -75;
      Yus = Yus + 25;
    } else if (tex >= 200 && Yus < 500) {
      tex = -100;
      Yus = Yus + 25;
    } else if (tex >= 200 && Yus < 525) {
      tex = -25;
      Yus = Yus + 25;
    } else if (tex >= 200 && Yus < 550) {
      tex = -50;
      Yus = Yus + 25;
    } else if (tex >= 200 && Yus < 575) {
      tex = -75;
      Yus = Yus + 25;
    }
    fill(255);
    rect(200, 400, 200, 200);
  }


  //Crea el cuadro de la esquina inferior amarillo. 
  //En el se encuentran 4 triangulos en repetición
  for (var x4 = 0; x4 < 3; x4 = x4 + 25) {
    noStroke();
    fill(255, 198, 13);
    triangle(bex, yes, bex + 25, yes + 25, bex, yes + 25);
    triangle(bex + 25, yes, bex + 25, yes + 25, bex + 50, yes + 25);
    triangle(bex + 50, yes, bex + 75, yes, bex + 75, yes + 25);
    triangle(bex + 75, yes, bex + 100, yes + 25, bex + 100, yes);

    bex = bex + 100;

    if (bex >= 600 && yes < 425) {
      bex = 375;
      yes = yes + 25;
    } else if (bex >= 600 && yes < 450) {
      bex = 350;
      yes = yes + 25;
    } else if (bex >= 600 && yes < 475) {
      bex = 325;
      yes = yes + 25;
    } else if (bex >= 600 && yes < 500) {
      bex = 300;
      yes = yes + 25;
    } else if (bex >= 600 && yes < 525) {
      bex = 375;
      yes = yes + 25;
    } else if (bex >= 600 && yes < 550) {
      bex = 350;
      yes = yes + 25;
    } else if (bex >= 600 && yes < 575) {
      bex = 325;
      yes = yes + 25;
    }
  }

  for (var x5 = 0; x5 < 1; x5 = x5 + 25) {
    noStroke();
    fill(Col);
    triangle(ex, eye, ex, eye + 25, ex + 25, eye);
    triangle(ex + 25, eye + 25, ex + 50, eye + 25, ex + 50, eye);
    triangle(ex + 50, eye + 25, ex + 75, eye + 25, ex + 75, eye);
    triangle(ex + 75, eye + 25, ex + 75, eye, ex + 100, eye);

    ex = ex + 100;
    if (ex >= 600 && eye < 625) {
      ex = -75;
      eye = eye + 25;
    }

    if (ex >= 600 && eye < 650) {
      ex = -50;
      eye = eye + 25;
    }

    if (ex >= 600 && eye < 675) {
      ex = -25;
      eye = eye + 25;
    }

    if (ex >= 600 && eye < 700) {
      ex = 0;
      eye = eye + 25;
    }

    if (ex >= 600 && eye < 725) {
      ex = -75;
      eye = eye + 25;
    }

    if (ex >= 600 && eye < 750) {
      ex = -50;
      eye = eye + 25;
    }

    if (ex >= 600 && eye < 775) {
      ex = -25;
      eye = eye + 25;
    }

    fill(255);
    rect(200,600,200,200);
  }
}