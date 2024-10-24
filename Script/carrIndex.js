const imagenesB = [];
for (let i = 1; i <= 14; i++) {
    imagenesB.push("Imagenes/Carrusel-Index/Imagen (" + i + ").jpg");
}

const imgOneB = document.getElementById("imagen-1");
const imgTwoB = document.getElementById("imagen-2");
const imgTreeB = document.getElementById("imagen-3");
const botonDeB = document.getElementById("button-derecha");
const botonIzB = document.getElementById("button-izquierdo");

let contImgIB = 0;
let contImgIIB = 1;
let contImgIIIB = 2;

function cambiarImg(){
    imgOneB.src = imagenesB[contImgIB];
    imgTwoB.src = imagenesB[contImgIIB];
    imgTreeB.src = imagenesB[contImgIIIB];
}

botonDeB.addEventListener("click", ()=>{
    if(contImgIIIB == 0){
        contImgIIIB=13;
    }else{
        contImgIIIB=contImgIIIB-1;
    }
    if(contImgIIB == 0){
        contImgIIB=13;
    }else{
        contImgIIB--;
    }
    if(contImgIB == 0){
        contImgIB=13;
    }else{
        contImgIB--;
    }
    cambiarImg();
})
botonIzB.addEventListener("click", ()=>{
    if(contImgIIIB == 13){
        contImgIIIB=0;
    }else{
        contImgIIIB++;
    }
    if(contImgIIB == 13){
        contImgIIB=0;
    }else{
        contImgIIB++;
    }
    if(contImgIB == 13){
        contImgIB=0;
    }else{
        contImgIB++;
    }
    cambiarImg();
})

