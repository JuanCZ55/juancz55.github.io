        const imagenes = [];
        for (let i = 1; i <= 4; i++) {
            imagenes.push("../Imagenes/GTASA/Imagen (" + i + ").jpg");
        }

        const imgOne = document.getElementById("gta-sa-imagen-1");
        const imgTwo = document.getElementById("gta-sa-imagen-2");
        const imgTree = document.getElementById("gta-sa-imagen-3");
        const botonDe = document.getElementById("gta-sa-button-derecho");
        const botonIz = document.getElementById("gta-sa-button-izquierdo");

        var contI = 0;
        var contIm = 1;
        var contImg = 2;

        function cambiarImg(){
            imgOne.src = imagenes[contI];
            imgTwo.src = imagenes[contIm];
            imgTree.src = imagenes[contImg];
        }

        botonDe.addEventListener("click", ()=>{
            if(contImg == 0){
                contImg=3;
            }else{
                contImg=contImg-1;
            }
            if(contIm == 0){
                contIm=3;
            }else{
                contIm--;
            }
            if(contI == 0){
                contI=3;
            }else{
                contI--;
            }
            cambiarImg();
        })
        botonIz.addEventListener("click", ()=>{
            if(contImg == 3){
                contImg=0;
            }else{
                contImg++;
            }
            if(contIm == 3){
                contIm=0;
            }else{
                contIm++;
            }
            if(contI == 3){
                contI=0;
            }else{
                contI++;
            }
            cambiarImg();
        })

/*-----------------------------------------------------------------------------------------------------------------*/ 
const rutasImagenes = [];
for (let index = 1; index <= 6; index++) {
    rutasImagenes.push("../Imagenes/GTASA/mod3 (" + index + ").jpg");
}

const primeraImagen = document.getElementById("gta-sa-imagen-mod3-1");
const segundaImagen = document.getElementById("gta-sa-imagen-mod3-2");
const terceraImagen = document.getElementById("gta-sa-imagen-mod3-3");
const botonDerecho = document.getElementById("gta-sa-button-izquierdo-mod3");
const botonIzquierdo = document.getElementById("gta-sa-button-derecho-mod3");

let indicePrimero = 0;
let indiceSegundo = 1;
let indiceTercero = 2;

function actualizarImagen() {
    primeraImagen.src = rutasImagenes[indicePrimero];
    segundaImagen.src = rutasImagenes[indiceSegundo];
    terceraImagen.src = rutasImagenes[indiceTercero];
}

botonDerecho.addEventListener("click", () => {
    if(indiceTercero == 3){
        indiceTercero=0;
    }else{
        indiceTercero++;
    }
    if(indiceSegundo == 3){
        indiceSegundo=0;
    }else{
        indiceSegundo++;
    }
    if(indicePrimero == 3){
        indicePrimero=0;
    }else{
        indicePrimero++;
    }
    actualizarImagen();
});

botonIzquierdo.addEventListener("click", () => {
    if(indiceTercero == 0){
        indiceTercero=3;
    }else{
        indiceTercero=indiceTercero-1;
    }
    if(indiceSegundo == 0){
        indiceSegundo=3;
    }else{
        indiceSegundo--;
    }
    if(indicePrimero == 0){
        indicePrimero=3;
    }else{
        indicePrimero--;
    }
    actualizarImagen();
});

/*-----------------------------------------------------------------------------------------------------------------*/ 
const imgPaths = [];
for (let num = 1; num <= 6; num++) {
    imgPaths.push("../Imagenes/GTASA/mod2 (" + num + ").jpg");
}

const imgA = document.getElementById("gta-sa-imagen-mod2-1");
const imgB = document.getElementById("gta-sa-imagen-mod2-2");
const imgC = document.getElementById("gta-sa-imagen-mod2-3");
const btnRight = document.getElementById("gta-sa-button-izquierdo-mod2");
const btnLeft = document.getElementById("gta-sa-button-derecho-mod2");

let idx1 = 0;
let idx2 = 1;
let idx3 = 2;

function modificarImagen() {
    imgA.src = imgPaths[idx1];
    imgB.src = imgPaths[idx2];
    imgC.src = imgPaths[idx3];
}

btnRight.addEventListener("click", () => {
    if(idx3 == 3){
        idx3=0;
    }else{
        idx3++;
    }
    if(idx2 == 3){
        idx2=0;
    }else{
        idx2++;
    }
    if(idx1 == 3){
        idx1=0;
    }else{
        idx1++;
    }
    modificarImagen();
});

btnLeft.addEventListener("click", () => {
    if(idx3 == 0){
        idx3=3;
    }else{
        idx3=idx3-1;
    }
    if(idx2 == 0){
        idx2=3;
    }else{
        idx2--;
    }
    if(idx1 == 0){
        idx1=3;
    }else{
        idx1--;
    }
    modificarImagen();
});

/*-----------------------------------------------------------------------------------------------------------------*/ 
const imgCollection = [];
for (let j = 1; j <= 6; j++) {
    imgCollection.push("../Imagenes/GTASA/mod1 (" + j + ").jpg");
}

const imgUno = document.getElementById("gta-sa-imagen-mod1-1");
const imgDos = document.getElementById("gta-sa-imagen-mod1-2");
const imgTres = document.getElementById("gta-sa-imagen-mod1-3");
const nextButton = document.getElementById("gta-sa-button-izquierdo-mod1");
const prevButton = document.getElementById("gta-sa-button-derecho-mod1");

let pos1 = 0;
let pos2 = 1;
let pos3 = 2;

function remplazarImagen() {
    imgUno.src = imgCollection[pos1];
    imgDos.src = imgCollection[pos2];
    imgTres.src = imgCollection[pos3];
}

nextButton.addEventListener("click", () => {
    if(pos3 == 3){
        pos3=0;
    }else{
        pos3++;
    }
    if(pos2 == 3){
        pos2=0;
    }else{
        pos2++;
    }
    if(pos1 == 3){
        pos1=0;
    }else{
        pos1++;
    }
    remplazarImagen();
});

prevButton.addEventListener("click", () => {
    if(pos3 == 0){
        pos3=3;
    }else{
        pos3=pos3-1;
    }
    if(pos2 == 0){
        pos2=3;
    }else{
        pos2--;
    }
    if(pos1 == 0){
        pos1=3;
    }else{
        pos1--;
    }
    remplazarImagen();
});
