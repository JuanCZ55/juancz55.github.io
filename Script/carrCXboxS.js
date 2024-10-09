let canti = 4;

const imagenes = [];
for (let i = 1; i <= canti; i++) {
    imagenes.push("../Imagenes/Xbox/XboxS/Imagen (" + i + ").png");
}
canti--;

const imgOne = document.getElementById("imc3");
const imgTwo = document.getElementById("imc4");
const imgTree = document.getElementById("imc5");
const botonDere = document.getElementById("de2");
const botonIzqu = document.getElementById("iz2");

var contI1 = 0;
var contIm2 = 1;
var contImg = 2;

function cambiarImg() {
    imgOne.src = imagenes[contI1];
    imgTwo.src = imagenes[contIm2];
    imgTree.src = imagenes[contImg];
}

botonDere.addEventListener("click", () => {
    if (contImg == 0) {
        contImg = canti;
    } else {
        contImg = contImg - 1;
    }
    if (contIm2 == 0) {
        contIm2 = canti;
    } else {
        contIm2--;
    }
    if (contI1 == 0) {
        contI1 = canti;
    } else {
        contI1--;
    }
    cambiarImg();
})
botonIzqu.addEventListener("click", () => {
    if (contImg == canti) {
        contImg = 0;
    } else {
        contImg++;
    }
    if (contIm2 == canti) {
        contIm2 = 0;
    } else {
        contIm2++;
    }
    if (contI1 == canti) {
        contI1 = 0;
    } else {
        contI1++;
    }
    cambiarImg();
})
