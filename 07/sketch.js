
/*/problemas: 
No se está muriendo nada
/*/


var bal;
var tib;
var misPeces1 = [];
var misPeces2 = [];
var miPulpo= [];
var misCamarones = [];
var misCangrejos = [];

function setup() {
  createCanvas(800, 800);

  //carga imagenes
  pescador = loadImage("assets/pescador.png"); //pescador
  ballena = loadImage("assets/ballena.png"); //ballena
  camaron = loadImage("assets/camaron.png"); //camaron
  gancho = loadImage("assets/gancho.png"); // gancho
  pez1 = loadImage("assets/pez1.png"); //pez 1
  pez2 = loadImage("assets/pez2.png"); //pez 2
  tiburon = loadImage("assets/tiburon.png"); //pez 3
  cangrejo = loadImage("assets/cangrejo.png"); //cangrejo
  pulpo =loadImage ("assets/pulpo.png"); //pulpo

  bal = new miBallena();
  tib =new miTiburon();

  //miPez1
  for (var i = 0; i < 15; i = i + 1) { // en el arreglo hay 15 pecesitos azules
    var tempX = random(0, width);
    var tempY = random(200, height);
    misPeces1[i] = new miPez1(tempX, tempY, 1);
  }
  
   //miPez2
  for (var i2 = 0; i2 < 15; i2 = i2 + 1) { // en el arreglo hay 15 pecesitos azules
    var X2 = random(0, width);
    var Y2 = random(200, height);
    misPeces2[i2] = new miPez2(X2, Y2, 1);
  }

  //misCamarones
  for (var q = 0; q < 30; q = q + 1) { //hay 30 camaroncitos
    var X = random(0, width);
    var Y = random(200, height);
    misCamarones[q] = new camaroncin(X, Y, 1);
  }

  //mis Cangrejos
  for (var w = 0; w < 8; w = w + 1) { //hay 30 camaroncitos
    var eX = random(0, width);
    var eY = random(200, height);
    misCangrejos[w] = new cangrejos(eX, eY, 1);
  }
  
  //mis Puplpos
  for (var a = 0; a < 5; a = a + 1) { //hay 5 pulpos
    var Xe = random(0, width);
    var Ye = random(200, height);
    miPulpo[a] = new pulpito(Xe, Ye, 1);
  }

}

function draw() {

  background(220);
  noStroke();

  fill(0, 255, 255);
  rect(0, 225, width, 600); //dibuja mar
  fill(1);
  rect(640, 225, 200, 30); //dibuja muelle negro 


  //dibuja al pescador en la esquina superior derecha a la mitad de su tamaño
  image(pescador, 500, 40, pescador.width / 2, pescador.height / 2);
  //dibuja el ganchito del pescador
  image(gancho, 495, 60, gancho.width / 2, mouseY);
  

  if (keyIsDown === 'a') {
    image(pulpo, mouseX+100, mouseY + 200, pulpo.width/2, pulpo.height/2);
  }

  //ballena
  bal.dibujarse();
  bal.moverse();
 // if ((mouseX>bal.x) && (mouseX<bal.x + bal.w) && (mouseY>bal.y) && (mouseY<bal.y+bal.h)) {
  
  //if (dist(mouseX, mouseY, miBallena.x, miBallena.y) < 20) {
		//miBallena.morir();
		//}
  
  
  //tiburon
  tib.dibujarse();
  tib.moverse();
  
  

  //peces azules
  for (var i = 0; i < misPeces1.length; i = i + 1) {
    misPeces1[i].dibujarse();
    misPeces1[i].moverse();
  }

  
  //peces amarillos
  for (var i2 = 0; i2 < misPeces2.length; i2 = i2 + 1) {
    misPeces2[i2].dibujarse();
    misPeces2[i2].moverse();
  }

  
    //pulpos
  for (var a = 0; a < miPulpo.length; a = a + 1) {
    miPulpo[a].dibujarse();
    miPulpo[a].moverse();
  }

  
  

  //camaroncitos
  for (var q = 0; q < misCamarones.length; q = q + 1) {
    misCamarones[q].dibujarse();
    misCamarones[q].moverse();

    //MATAR CAMARONES CON CANGREJOS AL TOCARLOS
    //cangrejos comen camarones
    for (var i3 = 0; i3 < cangrejos.length; i3 = i3 + 1) {
      if (dist(cangrejos[i3].w, cangrejos[i3].h, misCamarones[q].w, misCamarones[q].h) < 30) { //cambiar x por w yporh
        misCamarones[q].morir();
      }
      
      if (dist(miPulpo[i3].x, miPulpo[i3].y, misCamarones[q].x, misCamarones[q].y) < 30) { //cambiar x por w yporh
        misCamarones[q].morir();
      }
      
    }

  }
  //crea nuevos cangrejos con mouse oprimido
  if (mouseIsPressed == true) {
    misCamarones[misCamarones.length] = new camaroncin(mouseX, mouseY, 1);
  }



  //cangrejillos
  for (var w = 0; w < misCangrejos.length; w = w + 1) {
    misCangrejos[w].dibujarse();
    misCangrejos[w].moverse();
  }


} //corchete cierra draw

//la ballenita
function miBallena() {
  // caraceristicas
  this.x = random(0, width);
  this.y = (3 * height / 4, 650);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      ellipse(this.x + 55, this.y + 50, 55, 55);
      image(ballena, this.x, this.y, ballena.width / 2, ballena.height / 2);
    }
  }

  //la ballena va de un lado a otro
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX;//cambia la direccion al llegar al limite de ancho
    }
    this.x = this.x + (0.7 * this.dirX); //vel 0.7
  }


  this.morir = function() {
    this.estaVivo = false;
  }
}



//mi Pulpo
function pulpito() {
  // caraceristicas
  this.x = random(0, width);
  this.y = random(440, 600);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(pulpo, this.x, this.y, pulpo.width / 2, pulpo.height / 2);
    }
  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX;//cambia la direccion al llegar al limite de ancho
    }
    this.x = this.x + (3.5 * this.dirX);//vel 3.5
  }
}





//tiburon
function miTiburon() {
  // caraceristicas
  this.x = random(0, width);
  this.y = random(460, 550);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      //ellipse(this.x + 55, this.y + 50, 55, 55);
      image(tiburon, this.x, this.y, tiburon.width / 2, tiburon.height / 2);
    }
  }

  //la ballena va de un lado a otro
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX;//cambia la direccion al llegar al limite de ancho
    }
    this.x = this.x + (4 * this.dirX);//v4l 4
  }


  this.morir = function() {
    this.estaVivo = false;
  }
}



//miPez 1 azulito
function miPez1() {
  // caraceristicas
  this.x = random(-10, width);
  this.y = random(240, 350);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(pez1, this.x, this.y, pez1.width / 2, pez1.height / 2);
    }
  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX;//cambia la direccion al llegar al limite de ancho
    }
    this.x = this.x + (3 * this.dirX); //vel 3
  }
}




//miPez 2 yellow
function miPez2() {
  // caraceristicas
  this.x = random(-10, width);
  this.y = random(340, 550);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(pez2, this.x, this.y, pez2.width / 2, pez2.height / 2);
    }
  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX;//cambia la direccion al llegar al limite de ancho
    }
    this.x = this.x + (3.5 * this.dirX); //velocidad 3.5
  }
}





//mis camarones
function camaroncin() {
  // caraceristicas
  this.x = random(-10, width);
  this.y = random(270, 650);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      ellipse(this.x + 15, this.y + 10, 5, 5); //elipse atras de camaron para matar
      image(camaron, this.x, this.y, camaron.width / 2, camaron.height / 2);
    }
  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX; //cambia la direccion al llegar al limete
    }
    this.x = this.x + (2 * this.dirX); //velocidad 2
  }

  this.morir = function() {
    this.estaVivo = false;
  }
}



//cangrejoos
function cangrejos() {
  // caraceristicas
  this.x = random(0, width);
  this.y = random(340, 550);
  this.dirX = 1;
  this.estaVivo = true;

  // habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      ellipse(this.x + 35, this.y + 35, 15, 15); //elipse atras de cangrejo para matar
      image(cangrejo, this.x, this.y, cangrejo.width / 2, cangrejo.height / 2);
    }
  }

  //la ballena va de un lado a otro
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -1 * this.dirX; //cambia la direccion al llegar al limite de ancho
    }
    this.x = this.x + (1.3 * this.dirX); //vel 1.3
  }

  this.morir = function() {
    this.estaVivo = false;
  }
}