let cantiL = 4;

const imagenesL = [];
for (let i = 1; i <= cantiL; i++) {
    imagenesL.push("../Imagenes/Nintendo/Lite/Imagen (" + i + ").png");
}
cantiL--;

const imgOneL = document.getElementById("imc3L");
const imgTwoL = document.getElementById("imc4L");
const imgTreeL = document.getElementById("imc5L");
const botonDeL = document.getElementById("deL");
const botonIzL = document.getElementById("izL");

var contI = 0;
var contIm = 1;
var contImg = 2;

function cambiarImgL() {
    imgOneL.src = imagenesL[contI];
    imgTwoL.src = imagenesL[contIm];
    imgTreeL.src = imagenesL[contImg];
}

botonDeL.addEventListener("click", () => {
    if (contImg == 0) {
        contImg = cantiL;
    } else {
        contImg = contImg - 1;
    }
    if (contIm == 0) {
        contIm = cantiL;
    } else {
        contIm--;
    }
    if (contI == 0) {
        contI = cantiL;
    } else {
        contI--;
    }
    cambiarImgL();
})
botonIzL.addEventListener("click", () => {
    if (contImg == cantiL) {
        contImg = 0;
    } else {
        contImg++;
    }
    if (contIm == cantiL) {
        contIm = 0;
    } else {
        contIm++;
    }
    if (contI == cantiL) {
        contI = 0;
    } else {
        contI++;
    }
    cambiarImgL();
})
