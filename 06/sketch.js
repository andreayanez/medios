var miMusiquita;
var dur; //duracion
var miAnalizador;

function preload() {
  miMusiquita = loadSound('assets/Dance.mp3');

}

function setup() {
  createCanvas(400, 400);
  dur = miMusiquita.duration();

  miAnalizador = new p5.Amplitude();
  miAnalizador.setInput(miMusiquita);
}

function draw() {
  background(220);

  if (mouseIsPressed == true) {
    if (miMusiquita.isPlaying() == false) {
      miMusiquita.play(); //si le poongo loop se repite forever
      // miMusiquita.jump(dur/2); //me salta al segundo 5 miMusiquita.jump(5);
    } else {
      miMusiquita.pause(); //stop() si la para
    }
  }

  if (miMusiquita.currentTime() > (dur / 2) + 5) {
    background(220, 150, 0);
  }


  //text(miMusiquita.duration(), 20, 20);
  //text(miMusiquita.currentTime(), 20, 50); //imprime momento inicial


  var miVol = map(mouseY, height, 0, 0, 1); //vol min 0 max 1
  miMusiquita.setVolume(miVol);

  var miPan = map(mouseX, 0, width, -1, 1);
  miMusiquita.pan(miPan);

  miMusiquita.rate(1);

  var nivel = miAnalizador.getLevel(); //el nivel es entre 0-1 
  ellipse(width / 2, height / 2, nivel * 400, nivel * 400); //multiplico por 400 para ver cambios

  if (nivel > 0.2) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, width);
      var posY = random(0, height);
      
      fill(0,0,0,500);
      ellipse (posX, posY, 20, 20);
    }
  }

}