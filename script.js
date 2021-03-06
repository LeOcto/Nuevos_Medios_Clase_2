var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

if (document.body.classList.contains("pag")) {
  pagin = true;
} else {
  pagin = false;
}

if (document.body.classList.contains("dibujo")) {
  dibujo = true;
} else {
  dibujo = false;
}

var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Good morning";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Good afternoon";
} else {
    elSaludo = "Good night";
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(62, 180, 137);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    createA("dibujo.html", "dibujo").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
   
    if (dondeEstas) {
        portada();
    }
   
    if (pagin) {
        pagina();
      }
   
    if (dibujo) {
        drawing();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". You find yourself in: index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#50055E");
}
function pagina() {
    createSpan(". You find yourself in: page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#50055E");
}
function drawing() {
    createSpan(". I made something myself:").parent("title");
    select("a:nth-child(3)").style("font-weight", "bold").style("color", "#50055E");
}

