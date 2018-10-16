
var bal;
var tib;
var misPeces1 = [];
var misPeces2 = [];
var miPulpo= [];
var misCamarones = [];
var misCangrejos = [];
var area; //variable que guarda el area total de al pantalla

//mouse speed variables
var vel = 0; //variable para guardar la velocidad del mouse
var r, g; //variables para colores del fondo;

//tamaño de ventana
//variables para guardar el ancho y alto de la pantalla
var w = 0;
var h = 0;

function setup() {
  //crea un canvas de pantalla completa
createCanvas(windowWidth, windowHeight);
//guarda el ancho de la pantalla en la variable w
w = windowWidth;
//guarda el alto de la pantalla en la variable h
h = windowHeight;
  
  //variables mouse speed
  r = 0; //cantidad de rojo del color de fondo inicia en 0
  g = 255; //cantidad de verde del color de fondo inicia en 255

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
  for (var a = 0; a < 10; a = a + 1) { //hay 5 pulpos
    var Xe = random(0, width);
    var Ye = random(200, height);
    miPulpo[a] = new pulpito(Xe, Ye, 1);
  }

}

function draw() {

  background(220);
  noStroke();

  fill(r,g, 255); //asigna las variables de color al fondo
  rect(0, 225, width, height); //dibuja mar
  fill(1);
  rect(640, 225, windowWidth, 30); //dibuja muelle negro 
  
  //difX es la resta de la posicion x del mouse actual con la posicion del mouse anterior
  var difX = abs(mouseX - pmouseX);

  //difY es la resta de la posicion y del mouse actual con la posicion del mouse anterior
  var difY = abs(mouseY - pmouseY);

  //con floor() se redondea la velocidad a un numero entero
  //para simplificar, se puede tomar la velocidad como la suma de las diferencias en posicion en x y en y
  var vel = floor(difX + difY);
  
  //revisa que la velocidad del mouse sea mayor a 80
  if (vel > 80) {

    r+= vel/60; //aumenta el valor del rojo --> esto hace que el mar se me oscuresca a moradis oscuro
    g-= vel/40; //disminuye el valor del verde

  } else { //si la velocidad es menor a 80

    r--; //disminuye el valor del rojo
    g++; //aumenta el valor del verde

  }

  //constrain: evita que las variables se salgan de un rango entre 0 y 255
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  
  
  


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
 
  
  
  //tiburon
  tib.dibujarse();
  tib.moverse();
  
  

  //peces azules
  for (var i = 0; i < misPeces1.length; i = i + 1) {
    misPeces1[i].dibujarse();
    misPeces1[i].moverse();
    
    
    for (var f = 0; f < misPeces1.length; f = f + 1) {
      if (dist(495, mouseY, misPeces1[f].x, misPeces1[f].y) < 30) { //cambiar x por w yporh
        misPeces1[f].morir();
        print('Pez1morir');
      }
    }
  }

  
  //peces amarillos
  for (var i2 = 0; i2 < misPeces2.length; i2 = i2 + 1) {
    misPeces2[i2].dibujarse();
    misPeces2[i2].moverse();
    
    
    for (var f2 = 0; f2 < misPeces2.length; f2 = f2 + 1) {
      if (dist(495, mouseY, misPeces2[f2].x, misPeces2[f2].y) < 30) { //cambiar x por w yporh
        misPeces2[f2].morir();
        print('Pez2morir');
      }
    }
  }

  
    //pulpos
  for (var a = 0; a < miPulpo.length; a = a + 1) {
    miPulpo[a].dibujarse();
    miPulpo[a].moverse();
    
    for (var i3 = 0; i3 < miPulpo.length; i3 = i3 + 1) {
      if (dist(495, mouseY, miPulpo[a].x, miPulpo[a].y) < 30) { //cambiar x por w yporh
        miPulpo[a].morir();
        print('morir');
      }
    }
    
  }
  

  //camaroncitos
  for (var q = 0; q < misCamarones.length; q = q + 1) {
    misCamarones[q].dibujarse();
    misCamarones[q].moverse();

    //MATAR CAMARONES CON CANGREJOS AL TOCARLOS
    //cangrejos comen camarones
    for (var i13 = 0; i13 < misCangrejos.length; i13 = i13 + 1) {
      if (dist(misCangrejos[i13].x, misCangrejos[i13].y, misCamarones[q].x, misCamarones[q].y) < 30) { //cambiar x por w yporh
        misCamarones[q].morir();
        print('morir');
      }
    }
      for (var i7 = 0; i7 < miPulpo.length; i7 = i7 + 1) {
      if (dist(miPulpo[i7].x, miPulpo[i7].y, misCamarones[q].x, misCamarones[q].y) < 30) { //cambiar x por w yporh
        misCamarones[q].morir();
      }
      }
    
    
      for (var i17 = 0; i17 < misPeces2.length; i17 = i17 + 1) {
      if (dist(misPeces2[i17].x, misPeces2[i17].y, misCamarones[q].x, misCamarones[q].y) < 30) { //cambiar x por w yporh
        misCamarones[q].morir();
      }
      }
      

  }
  
  
  
  
  //crea nuevos cangrejos con mouse oprimido
  if (mouseIsPressed == true) {
    misCamarones[misCamarones.length] = new camaroncin(mouseX, mouseY, 1);
  }
  //revive los pulpos que pesca
  if(keyIsPressed ==true){
     miPulpo[miPulpo.length] = new pulpito (mouseX, mouseY,1);
    misPeces1[misPeces1.length]=new miPez1 (mouseX, mouseY, 1);
    misPeces2[misPeces2.length]=new miPez2 (mouseX, mouseY, 1);
    misCangrejos [misCangrejos.length] = new cangrejos (mouseX, mouseY, 1);
    bal.dibujarse();
     }



  //cangrejillos
  for (var w = 0; w < misCangrejos.length; w = w + 1) {
    misCangrejos[w].dibujarse();
    misCangrejos[w].moverse();
    
    for (var iq = 0; iq < misCangrejos.length; iq = iq + 1) {
      if (dist(495, mouseY, misCangrejos[iq].x, misCangrejos[iq].y) < 30) { //cambiar x por w yporh
        misCangrejos[iq].morir();
        print('morirCrab');
      }
    }
    
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
  
  this.morir = function() {
    this.estaVivo = false;
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
  
   this.morir = function() {
    this.estaVivo = false;
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
  
   this.morir = function() {
    this.estaVivo = false;
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



 
  //funcion que se activa cuando cambia el tamaño de la
//ventana del navegador
function windowResized() {
//si la ventana es agrandada
  if (windowWidth * windowHeight > area) {
//ballena
  bal.dibujarse();
  bal.moverse();
 
  }
  else { //si la ventana se hace más pequeña

    //ballena dies
   bal.morir();
  }
  
  //se actualiza el nuevo tamano de la pantalla  en las variables w y h
  w = windowWidth;
  h = windowHeight;
  area = w * h; //se recalcula el area de la pantalla

  //se cambia el tamano del canvas para que sea del nuevo tamano de la pantalla
  resizeCanvas(w, h);
    
}




//gdj