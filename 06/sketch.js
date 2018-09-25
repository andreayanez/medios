/*/
Song: Stay with you - Cheat Codes
/*/

var miSegundo;
var miMusic;
var dur; //duracion
var amplitude;
var osc; //oscillator
var miAngulo1 = 0;
var miAngulo2 = 0;
var miAnalizador;
var tri;
var bed;
var cora;
//colores: 
//(255,255,0) yellow
//(0,255,255) blu
//(255,102,102) pink


function preload() {
  miMusic = loadSound('assets/music.mp3');
  tri = loadImage('assets/tri.png');
  bed = loadImage('assets/bed.png');
  cora = loadImage('assets/cora.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  dur = miMusic.duration(); //obtener la duración
  amplitude = new p5.Amplitude();
  osc = new p5.Oscillator();
  textFont("Permanent Marker");
  textAlign(CENTER, CENTER);
  //miMusic.jump(200); PARA EDITAR
}

function draw() {
   background(1);
  push();
     noStroke();
    textSize(20);
    fill(255,255,0);
    text("THIS IS AN INTERACTIVE VIDEO", width / 2, height / 2);
    fill(0,255,255);
    text("MOVE THE MOUSE AROUND TO GET THE WHOLE EXPERIENCE", width / 2, (height / 2)+40);
    fill(255,101,112);
    text("CLICK TO PLAY", width / 2, (height / 2)+80);
  	pop();
  //text(miMusic.duration(), 20, 20);

  //si mouse oprimido play 
  if (mouseIsPressed == true) {
    if (miMusic.isPlaying() == false) {
      miMusic.play(); //si le poongo loop se repite forever
    } else {
      miMusic.stop(); //stop() si la para
    
    }
  }

  //sets the vol depending on the mouse position up=high, down=low
  var miVol = map(mouseY, height, 0, 0, 1); //vol min 0 max 1
  miMusic.setVolume(miVol);

  //Set the stereo panning to a floating point number between -1.0 (left) and 1.0 (right). 
  var miPan = map(mouseX, 0, width, -1, 1);
  miMusic.pan(miPan);

  //Set the playback rate of a sound file. 
  //Will change the speed and the pitch. 
  //Values less than zero will reverse the audio buffer.
  miMusic.rate(1.5); //acelera a 1.5 el rate

  //parte 1 canción beat lento
  if (miMusic.currentTime() > 0 && miMusic.currentTime() < 15) {
    background(1);
    fill(0, 255, 255);
    ellipse(width / 2, height / 2, 3000 * amplitude.getLevel(), 3000 * amplitude.getLevel());
  }

  //parte 2 canción beat lento
  if (miMusic.currentTime() > 15 && miMusic.currentTime() < 26) {
    background(1);
    noStroke();
    //circ up blu
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ down izq blu
    fill(0, 255, 255);
    ellipse(3 * width / 4, 3 * height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, 3 * height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());


    //circ  pink abajo dere
    fill(255, 102, 102);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ down dere
    fill(255, 102, 102);
    ellipse(width / 4, 3 * height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, 3 * height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());

  }

  //parte 3 canción coro parte 1 I WANT TO SATY WITH YOU
  if (miMusic.currentTime() > 26 && miMusic.currentTime() < 40) {
    noStroke();
    textSize(180);


    if (miMusic.currentTime() > 26 && miMusic.currentTime() < 26.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);

    }

    if (miMusic.currentTime() > 26.5 && miMusic.currentTime() < 29.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 27 && miMusic.currentTime() < 27.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 27.5 && miMusic.currentTime() < 28) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 28 && miMusic.currentTime() < 28.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 28.5 && miMusic.currentTime() < 29.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }


  }

  //coro parte 2 MAKE LOVE
  if (miMusic.currentTime() > 29.5 && miMusic.currentTime() < 33) {
    textSize(40);

    // CIRCULO CON RECTS GIRANDO
    background(255, 102, 102);
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 1500 * amplitude.getLevel(), 1500 * amplitude.getLevel());

    //el push y pop me funcionan como un beginshape,end shape-solo lo de adentro se afecta
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo1); //rota todo el canvas
    fill(1);
    rect(230, 0, 40, 40);
    miAngulo1 = miAngulo1 + (20 * amplitude.getLevel());
    pop();

    push();
    translate(width / 2, height / 2);
    rotate(miAngulo2); //rota todo el canvas
    fill(0, 255, 255);
    rect(180, 0, 40, 40);
    miAngulo2 = miAngulo2 + (20 * amplitude.getLevel());
    pop();

    fill(1); //text fill black
    text("MAKE LOVE", width / 2, height / 2);
  }

  //coro parte 3 Stay sipping champagne with you
  if (miMusic.currentTime() > 33 && miMusic.currentTime() < 36) {
    background(255, 255, 0);
    stroke(1); //negra
    strokeWeight(14);
    line(width / 2, height / 2, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(0, 255, 255); //blu
    line(3 * width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(3 * width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(255, 102, 102); //pink
    line(width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);

    textSize(40);
    fill(1); //text fill black
    noStroke();
    text("SIPPING CHAMPAGNE", width / 2, 3 * height / 4);
  }

  //coro parte 4 If you wanna do drugs, come through
  if (miMusic.currentTime() > 36 && miMusic.currentTime() < 39.5) {
    background(1); //pink
    fill(255, 102, 102);
    rect(width / 4, height / 2, width - 300, 1500 * amplitude.getLevel());


    //circ up blu izq
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());

    //circ up blu dere
    fill(0, 255, 255);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
  }


  //COROO REPEEEAAAATT

  //coro repeaat parte 1 i want to saty with you
  if (miMusic.currentTime() > 39.5 && miMusic.currentTime() < 43) {
    noStroke();
    textSize(180);


    if (miMusic.currentTime() > 39.5 && miMusic.currentTime() < 40) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);

    }

    if (miMusic.currentTime() > 40 && miMusic.currentTime() < 40.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 40.5 && miMusic.currentTime() < 41) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 41 && miMusic.currentTime() < 41.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 41.5 && miMusic.currentTime() < 42) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 42 && miMusic.currentTime() < 43) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }


  }

  //coro repeat parte 2 MAKE LOVE
  if (miMusic.currentTime() > 43 && miMusic.currentTime() < 47) {
    textSize(40);

    // CIRCULO CON RECTS GIRANDO
    background(255, 102, 102);
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 1500 * amplitude.getLevel(), 1500 * amplitude.getLevel());

    //el push y pop me funcionan como un beginshape,end shape-solo lo de adentro se afecta
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo1); //rota todo el canvas
    fill(1);
    rect(230, 0, 40, 40);
    miAngulo1 = miAngulo1 + (20 * amplitude.getLevel());
    pop();

    push();
    translate(width / 2, height / 2);
    rotate(miAngulo2); //rota todo el canvas
    fill(0, 255, 255);
    rect(180, 0, 40, 40);
    miAngulo2 = miAngulo2 + (20 * amplitude.getLevel());
    pop();

    fill(1); //text fill black
    text("MAKE LOVE", width / 2, height / 2);
  }

  //coro parte 3 Stay sipping champagne with you
  if (miMusic.currentTime() > 47 && miMusic.currentTime() < 50) {
    background(255, 255, 0);
    stroke(1); //negra
    strokeWeight(14);
    line(width / 2, height / 2, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(0, 255, 255); //blu
    line(3 * width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(3 * width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(255, 102, 102); //pink
    line(width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);

    textSize(40);
    fill(1); //text fill black
    noStroke();
    text("SIPPING CHAMPAGNE", width / 2, 3 * height / 4);
  }

  //coro REPEAT parte 4 If you wanna do drugs, come through
  if (miMusic.currentTime() > 50 && miMusic.currentTime() < 53.5) {
    background(1); //pink
    fill(255, 102, 102);
    rect(width / 4, height / 2, width - 300, 1500 * amplitude.getLevel());
    //circ up blu izq
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ up blu dere
    fill(0, 255, 255);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
  }

  if (miMusic.currentTime() > 53.5 && miMusic.currentTime() < 55.5) {
    background(255, 102, 102);
    fill(255, 255, 0); //text fill black
    ellipse(random(width), random(height), 35, 35);
    fill(1);
    text("I WANT TO STAY WITH", width / 2, height / 2);
  }

  //parte 1 genial de beats
  if (miMusic.currentTime() > 55.5 && miMusic.currentTime() < 58) {
    background(0, 255, 255);
    var nivel = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel * 400, nivel * 400); //multiplico por 400 para ver cambios

    if (nivel > 0.1) {
      for (var i = 0; i < 400; i = i + 1) {
        var posX = random(0, width);
        var posY = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX, posY, 20, 20);
      }
    }
  }

  //parte 2 genial de beats
  if (miMusic.currentTime() > 58 && miMusic.currentTime() < 63) {
    background(255, 255, 0);
    var nivel2 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel2 * 400, nivel2 * 400); //multiplico por 400 para ver cambios

    if (nivel2 > 0.1) {
      for (var i2 = 0; i2 < 400; i2 = i2 + 1) {
        var posX2 = random(0, width);
        var posY2 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX2, posY2, 20, 20);
      }
    }
  }

  //parte 3 genial de beats
  if (miMusic.currentTime() > 63 && miMusic.currentTime() < 69.5) {
    background(255, 102, 102);
    var nivel3 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel3 * 400, nivel3 * 400); //multiplico por 400 para ver cambios

    if (nivel3 > 0.1) {
      for (var i3 = 0; i3 < 400; i3 = i3 + 1) {
        var posX3 = random(0, width);
        var posY3 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX3, posY3, 20, 20);
      }
    }
  }

  //VERSE 2
  //so lets start where we left
  if (miMusic.currentTime() > 69.5 && miMusic.currentTime() < 83) {
    if (miMusic.currentTime() > 69.5 && miMusic.currentTime() < 72.5) {
      background(1);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 3000 * amplitude.getLevel(), 3000 * amplitude.getLevel());
      image(tri, width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
      image(tri, 3 * width / 4, 3 * height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    }

    //We can lay in my bed, but we won't go to bed no we wont
    //im not one for taking it slow
    if (miMusic.currentTime() > 72.5 && miMusic.currentTime() < 78) {
      background(1);
      image(bed, width / 2, height / 2, 400 * amplitude.getLevel(), 400 * amplitude.getLevel());
    }
    if (miMusic.currentTime() > 78 && miMusic.currentTime() < 83) {
      background(1);
      fill(255, 255,0);
      ellipse(width / 2, height / 2, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
      image(bed, width / 4, height / 4, 400 * amplitude.getLevel(), 400 * amplitude.getLevel());
      image(bed, width / 4, 3 * height / 4, 400 * amplitude.getLevel(), 400 * amplitude.getLevel());
      image(bed, 3 * width / 4, height / 4, 400 * amplitude.getLevel(), 400 * amplitude.getLevel());
      image(bed, 3 * width / 4, 3 * height / 4, 400 * amplitude.getLevel(), 400 * amplitude.getLevel());
    }
  }

  //So when you come again and again
  //With the sheets in your hand
  //You can't even pretend that you don't
  //Love how I make you moan
   if (miMusic.currentTime() > 83 && miMusic.currentTime() < 94.5) {
     background(1);
     background(1);
    noStroke();
    //circ up blu
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ down izq blu
    fill(0, 255, 255);
    ellipse(3 * width / 4, 3 * height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, 3 * height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ  pink abajo dere
    fill(255, 102, 102);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ down dere
    fill(255, 102, 102);
    ellipse(width / 4, 3 * height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, 3 * height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
   }

  
  
		//COROO parte 1 I WANT TO STAY WITH YOU
  if (miMusic.currentTime() > 94.5 && miMusic.currentTime() < 98.5) {
    noStroke();
    textSize(180);

    if (miMusic.currentTime() > 94.5 && miMusic.currentTime() < 95) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 95 && miMusic.currentTime() < 95.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 95.5 && miMusic.currentTime() < 96) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 96 && miMusic.currentTime() < 96.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 96.5 && miMusic.currentTime() < 97) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 97 && miMusic.currentTime() < 98.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  }

  //coro parte 2 MAKE LOVE
  if (miMusic.currentTime() > 98.5 && miMusic.currentTime() < 102) {
    textSize(40);

    // CIRCULO CON RECTS GIRANDO
    background(255, 102, 102);
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 1500 * amplitude.getLevel(), 1500 * amplitude.getLevel());
    //el push y pop me funcionan como un beginshape,end shape-solo lo de adentro se afecta
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo1); //rota todo el canvas
    fill(1);
    rect(230, 0, 40, 40);
    miAngulo1 = miAngulo1 + (20 * amplitude.getLevel());
    pop();
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo2); //rota todo el canvas
    fill(0, 255, 255);
    rect(180, 0, 40, 40);
    miAngulo2 = miAngulo2 + (20 * amplitude.getLevel());
    pop();
    fill(1); //text fill black
    text("MAKE LOVE", width / 2, height / 2);
  }

  //coro parte 3 Stay sipping champagne with you
  if (miMusic.currentTime() > 102 && miMusic.currentTime() < 105) {
    background(255, 255, 0);
    stroke(1); //negra
    strokeWeight(14);
    line(width / 2, height / 2, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(0, 255, 255); //blu
    line(3 * width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(3 * width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(255, 102, 102); //pink
    line(width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    textSize(40);
    fill(1); //text fill black
    noStroke();
    text("SIPPING CHAMPAGNE", width / 2, 3 * height / 4);
  }

  //coro parte 4 If you wanna do drugs, come through
  if (miMusic.currentTime() > 105 && miMusic.currentTime() < 108.5) {
    background(1); //pink
    fill(255, 102, 102);
    rect(width / 4, height / 2, width - 300, 1500 * amplitude.getLevel());
    //circ up blu izq
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ up blu dere
    fill(0, 255, 255);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
  }
  
  
		//COROO parte 1 I WANT TO STAY WITH YOU
  if (miMusic.currentTime() > 108 && miMusic.currentTime() < 112.5) {
    noStroke();
    textSize(180);
    
    if (miMusic.currentTime() > 108 && miMusic.currentTime() < 108.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 108.5 && miMusic.currentTime() < 109) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 109 && miMusic.currentTime() < 109.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 109.5 && miMusic.currentTime() < 110) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 110 && miMusic.currentTime() < 110.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 110.5 && miMusic.currentTime() < 112) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  }

  //coro parte 2 MAKE LOVE
  if (miMusic.currentTime() > 112 && miMusic.currentTime() < 115.5) {
    textSize(40);
    // CIRCULO CON RECTS GIRANDO
    background(255, 102, 102);
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 1500 * amplitude.getLevel(), 1500 * amplitude.getLevel());
    //el push y pop me funcionan como un beginshape,end shape-solo lo de adentro se afecta
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo1); //rota todo el canvas
    fill(1);
    rect(230, 0, 40, 40);
    miAngulo1 = miAngulo1 + (20 * amplitude.getLevel());
    pop();
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo2); //rota todo el canvas
    fill(0, 255, 255);
    rect(180, 0, 40, 40);
    miAngulo2 = miAngulo2 + (20 * amplitude.getLevel());
    pop();
    fill(1); //text fill black
    text("MAKE LOVE", width / 2, height / 2);
  }

  //coro parte 3 Stay sipping champagne with you
  if (miMusic.currentTime() > 115.5 && miMusic.currentTime() < 118.5) {
    background(255, 255, 0);
    stroke(1); //negra
    strokeWeight(14);
    line(width / 2, height / 2, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(0, 255, 255); //blu
    line(3 * width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(3 * width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(255, 102, 102); //pink
    line(width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    textSize(40);
    fill(1); //text fill black
    noStroke();
    text("SIPPING CHAMPAGNE", width / 2, 3 * height / 4);
  }

  //coro parte 4 If you wanna do drugs, come through
  if (miMusic.currentTime() > 118.5 && miMusic.currentTime() < 122) {
    background(1); //pink
    fill(255, 102, 102);
    rect(width / 4, height / 2, width - 300, 1500 * amplitude.getLevel());

    //circ up blu izq
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());

    //circ up blu dere
    fill(0, 255, 255);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
  }


  if (miMusic.currentTime() > 122 && miMusic.currentTime() < 124.5) {
    noStroke();
    textSize(180);
    if (miMusic.currentTime() > 122 && miMusic.currentTime() < 122.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 122.5 && miMusic.currentTime() < 123) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 123 && miMusic.currentTime() < 123.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 123.5 && miMusic.currentTime() < 124) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 124 && miMusic.currentTime() < 124.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }
  }

  
  //parte 1 genial de beats
  if (miMusic.currentTime() > 124.5 && miMusic.currentTime() < 128) {
    background(0, 255, 255);
    var nivel4 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel4 * 400, nivel4 * 400); //multiplico por 400 para ver cambios

    if (nivel4 > 0.1) {
      for (var i4 = 0; i4 < 400; i4 = i4 + 1) {
        var posX4 = random(0, width);
        var posY4 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX4, posY4, 20, 20);
      }
    }
  }

  //parte 2 genial de beats
  if (miMusic.currentTime() > 128 && miMusic.currentTime() < 130) {
    background(255, 255, 0);//YELLOW
    var nivel5 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel5 * 400, nivel5 * 400); //multiplico por 400 para ver cambios

    if (nivel5 > 0.1) {
      for (var i5 = 0; i5 < 400; i5 = i5 + 1) {
        var posX5 = random(0, width);
        var posY5 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX5, posY5, 20, 20);
      }
    }
  }
  
  if (miMusic.currentTime() > 130 && miMusic.currentTime() < 130.5) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 130.5 && miMusic.currentTime() < 131) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

  //parte 3 genial de beats
  if (miMusic.currentTime() > 131 && miMusic.currentTime() <137.5) {
    background(255, 102, 102);
    var nivel6 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel6 * 400, nivel6 * 400); //multiplico por 400 para ver cambios

    if (nivel6 > 0.1) {
      for (var i6 = 0; i6 < 400; i6 = i6 + 1) {
        var posX6 = random(0, width);
        var posY6 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX6, posY6, 20, 20);
      }
    }
  }

  
   //parte 1 genial de beats
  if (miMusic.currentTime() > 137.5 && miMusic.currentTime() < 141.5) {
    background(0, 255, 255);
    var nivel7 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel7 * 400, nivel7 * 400); //multiplico por 400 para ver cambios

    if (nivel7 > 0.1) {
      for (var i7 = 0; i7 < 400; i7 = i7 + 1) {
        var posX7 = random(0, width);
        var posY7 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX7, posY7, 20, 20);
      }
    }
  }

  //parte 2 genial de beats
  if (miMusic.currentTime() > 141.5 && miMusic.currentTime() < 144) {
    background(255, 255, 0);
    var nivel8 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel8 * 400, nivel8 * 400); //multiplico por 400 para ver cambios

    if (nivel8 > 0.1) {
      for (var i8 = 0; i8 < 400; i8 = i8 + 1) {
        var posX8 = random(0, width);
        var posY8 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX8, posY8, 20, 20);
      }
    }
  }
  
  if (miMusic.currentTime() > 144 && miMusic.currentTime() < 144.5) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 144.5 && miMusic.currentTime() < 145) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

  //parte 3 genial de beats
  if (miMusic.currentTime() > 145 && miMusic.currentTime() <150.5) {
    background(255, 102, 102);
    var nivel9 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel9 * 400, nivel9 * 400); //multiplico por 400 para ver cambios

    if (nivel9 > 0.1) {
      for (var i9 = 0; i9 < 400; i9 = i9 + 1) {
        var posX9 = random(0, width);
        var posY9 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX9, posY9, 20, 20);
      }
    }
  }
  
  if (miMusic.currentTime() > 150.5 && miMusic.currentTime() < 151) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 151 && miMusic.currentTime() < 151.5) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 151.5 && miMusic.currentTime() < 154) {
      background(0, 255, 255); //blu
      noStroke();
    textSize(180);
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  
  //REPEAT
  
  if (miMusic.currentTime() > 154 && miMusic.currentTime() < 154.5) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 154.5 && miMusic.currentTime() < 155) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 155 && miMusic.currentTime() < 157.5) {
      background(0, 255, 255); //blu
      noStroke();
    textSize(180);
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  
  
  //REPEAT X2
  
  if (miMusic.currentTime() > 157.5 && miMusic.currentTime() < 158) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 158 && miMusic.currentTime() < 158.5) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 158.5 && miMusic.currentTime() < 160) {
      background(0, 255, 255); //blu
      noStroke();
    textSize(180);
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  
  //IM NOT LOOKING FOR SOMEONE NEW
  if (miMusic.currentTime() > 160 && miMusic.currentTime() < 163) {
    background(255,255,0)//yellow
    image(cora, width / 4, height / 4, 3400 * amplitude.getLevel(), 3400 * amplitude.getLevel());
  }
  
  //COROO parte 1 I WANT TO STAY WITH YOU
  if (miMusic.currentTime() > 163 && miMusic.currentTime() < 167) {
    noStroke();
    textSize(180);
    
    if (miMusic.currentTime() > 163 && miMusic.currentTime() < 163.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 163.5 && miMusic.currentTime() < 164) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 164 && miMusic.currentTime() < 164.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 164.5 && miMusic.currentTime() < 165) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 165 && miMusic.currentTime() < 165.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 165.5 && miMusic.currentTime() < 167) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  }
  
  
  //coro parte 2 MAKE LOVE
  if (miMusic.currentTime() > 167 && miMusic.currentTime() < 170) {
    textSize(40);
    // CIRCULO CON RECTS GIRANDO
    background(255, 102, 102);
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 1500 * amplitude.getLevel(), 1500 * amplitude.getLevel());
    //el push y pop me funcionan como un beginshape,end shape-solo lo de adentro se afecta
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo1); //rota todo el canvas
    fill(1);
    rect(230, 0, 40, 40);
    miAngulo1 = miAngulo1 + (20 * amplitude.getLevel());
    pop();
    push();
    translate(width / 2, height / 2);
    rotate(miAngulo2); //rota todo el canvas
    fill(0, 255, 255);
    rect(180, 0, 40, 40);
    miAngulo2 = miAngulo2 + (20 * amplitude.getLevel());
    pop();
    fill(1); //text fill black
    text("MAKE LOVE", width / 2, height / 2);
  }

  //coro parte 3 Stay sipping champagne with you
  if (miMusic.currentTime() > 170 && miMusic.currentTime() < 173.5) {
    background(255, 255, 0);
    stroke(1); //negra
    strokeWeight(14);
    line(width / 2, height / 2, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(0, 255, 255); //blu
    line(3 * width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    line(3 * width / 4, height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    stroke(255, 102, 102); //pink
    line(width / 4, 3 * height / 4, 1000 * amplitude.getLevel() - 20, 2000 * amplitude.getLevel() - 20);
    textSize(40);
    fill(1); //text fill black
    noStroke();
    text("SIPPING CHAMPAGNE", width / 2, 3 * height / 4);
  }

  //coro parte 4 If you wanna do drugs, come through
  if (miMusic.currentTime() > 173.5 && miMusic.currentTime() < 176.5) {
    background(1); //pink
    fill(255, 102, 102);
    rect(width / 4, height / 2, width - 300, 1500 * amplitude.getLevel());
    //circ up blu izq
    fill(0, 255, 255);
    ellipse(width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
    //circ up blu dere
    fill(0, 255, 255);
    ellipse(3 * width / 4, height / 4, 750 * amplitude.getLevel(), 750 * amplitude.getLevel());
    fill(255, 255, 0);
    ellipse(3 * width / 4, height / 4, 500 * amplitude.getLevel(), 500 * amplitude.getLevel());
  }
  
  
  //COROO parte 1 I WANT TO STAY WITH YOUUU
  if (miMusic.currentTime() > 176.5 && miMusic.currentTime() < 181.5) {
    noStroke();
    textSize(180);
    
    if (miMusic.currentTime() > 176.5 && miMusic.currentTime() < 177) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1); //text fill black
      text("I", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 177 && miMusic.currentTime() < 177.5) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WANT", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 177.5 && miMusic.currentTime() < 178) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("TO", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 178 && miMusic.currentTime() < 178.5) {
      background(255, 255, 0); //amarillo
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 178.5 && miMusic.currentTime() < 179) {
      background(255, 102, 102); //pink
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 179 && miMusic.currentTime() < 181.5) {
      background(0, 255, 255); //blu
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("YOU", width / 2, height / 2);
    }
  }
  
  
  //parte 1 genial de beats
  if (miMusic.currentTime() > 181.5 && miMusic.currentTime() < 183) {
    background(0, 255, 255);
    var nivel10 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel10 * 400, nivel10 * 400); //multiplico por 400 para ver cambios

    if (nivel10 > 0.1) {
      for (var i10 = 0; i10 < 400; i10 = i10 + 1) {
        var posX10 = random(0, width);
        var posY10 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX10, posY10, 20, 20);
      }
    }
  }

  //parte 2 genial de beats
  if (miMusic.currentTime() > 183 && miMusic.currentTime() < 185.5) {
    background(255, 255, 0);//YELLOW
    var nivel11 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel11 * 400, nivel11 * 400); //multiplico por 400 para ver cambios

    if (nivel11 > 0.1) {
      for (var i11 = 0; i11 < 400; i11 = i11 + 1) {
        var posX11 = random(0, width);
        var posY11 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX11, posY11, 20, 20);
      }
    }
  }
  
  if (miMusic.currentTime() > 185.5 && miMusic.currentTime() < 186) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 186 && miMusic.currentTime() < 186.5) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }

  //parte 3 genial de beats
  if (miMusic.currentTime() > 186.5 && miMusic.currentTime() <193.5) {
    background(255, 102, 102);
    var nivel12 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel12 * 400, nivel12 * 400); //multiplico por 400 para ver cambios

    if (nivel12 > 0.1) {
      for (var i12 = 0; i12 < 400; i12 = i12 + 1) {
        var posX12 = random(0, width);
        var posY12 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX12, posY12, 20, 20);
      }
    }
  }
  
  //FINAAL
  //parte 1 genial de beats
  if (miMusic.currentTime() > 193.5 && miMusic.currentTime() < 197) {
    background(0, 255, 255);
    var nivel13 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel13 * 400, nivel13 * 400); //multiplico por 400 para ver cambios

    if (nivel13 > 0.1) {
      for (var i13 = 0; i13 < 400; i13 = i13 + 1) {
        var posX13 = random(0, width);
        var posY13 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX13, posY13, 20, 20);
      }
    }
  }

  //parte 2 genial de beats
  if (miMusic.currentTime() > 197 && miMusic.currentTime() < 199) {
    background(255, 255, 0);//YELLOW
    var nivel14 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel14 * 400, nivel14 * 400); //multiplico por 400 para ver cambios

    if (nivel14 > 0.1) {
      for (var i14 = 0; i14 < 400; i14 = i14 + 1) {
        var posX14 = random(0, width);
        var posY14 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX14, posY14, 20, 20);
      }
    }
  }
  
  if (miMusic.currentTime() > 199 && miMusic.currentTime() < 199.5) {
      background(255, 255, 0); //amarillo
    noStroke();
    textSize(180);
      fill(255, 102, 102);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("STAY", width / 2, height / 2);
    }

    if (miMusic.currentTime() > 199.5 && miMusic.currentTime() < 200) {
      background(255, 102, 102); //pink
      noStroke();
    textSize(180);
      fill(0, 255, 255);
      ellipse(width / 2, height / 2, 2000 * amplitude.getLevel(), 2000 * amplitude.getLevel());
      fill(1);
      text("WITH", width / 2, height / 2);
    }
  
  //parte 3 genial de beats
  if (miMusic.currentTime() > 200 && miMusic.currentTime() <207) {
    background(255, 102, 102);
    var nivel15 = amplitude.getLevel(); //el nivel es entre 0-1 
    ellipse(width / 2, height / 2, nivel15 * 400, nivel15 * 400); //multiplico por 400 para ver cambios

    if (nivel15 > 0.1) {
      for (var i15 = 0; i15 < 400; i15 = i15 + 1) {
        var posX15 = random(0, width);
        var posY15 = random(0, height);
        fill(0, 0, 0, 500);
        ellipse(posX15, posY15, 20, 20);
      }
    }
  }
  
  if (miMusic.currentTime() > 207 && miMusic.currentTime() <212) {
   miMusic.rate(1);
    background(1);
     noStroke();
    textSize(20);
    fill(255,255,0);
    text("STAY WITH YOU - CHEAT CODES", width / 2, height / 2);
    fill(0,255,255);
    text("VIDEO BY: ANDREA YAÑEZ HUTTER", width / 2, (height / 2)+40);
  }
}