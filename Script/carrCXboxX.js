let cant = 4;

const imagene = [];
for (let i = 1; i <= cant; i++) {
    imagene.push("../Imagenes/Xbox/XboxX/Imagen (" + i + ").png");
}
cant--;

const imga = document.getElementById("imc0");
const imgb = document.getElementById("imc1");
const imgc = document.getElementById("imc2");
const botonDer = document.getElementById("de1");
const botonIzq = document.getElementById("iz1");

var contI1x = 0;
var contIm2x = 1;
var contImg3x = 2;

function cambiarImg1() {
    imga.src = imagene[contI1x];
    imgb.src = imagene[contIm2x];
    imgc.src = imagene[contImg3x];
}

botonDer.addEventListener("click", () => {
    if (contImg3x == 0) {
        contImg3x = cant;
    } else {
        contImg3x = contImg3x - 1;
    }
    if (contIm2x == 0) {
        contIm2x = cant;
    } else {
        contIm2x--;
    }
    if (contI1x == 0) {
        contI1x = cant;
    } else {
        contI1x--;
    }
    cambiarImg1();
})
botonIzq.addEventListener("click", () => {
    if (contImg3x == cant) {
        contImg3x = 0;
    } else {
        contImg3x++;
    }
    if (contIm2x == cant) {
        contIm2x = 0;
    } else {
        contIm2x++;
    }
    if (contI1x == cant) {
        contI1x = 0;
    } else {
        contI1x++;
    }
    cambiarImg1();
})
