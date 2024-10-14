        const imagenesB = [];
        for (let i = 1; i <= 4; i++) {
            imagenesB.push("../Imagenes/Kirby/Imag (" + i + ").jpg");
        }

        const imgOneB = document.getElementById("kirby-imagen-1B");
        const imgTwoB = document.getElementById("kirby-imagen-2B");
        const imgTreeB = document.getElementById("kirby-imagen-3B");
        const botonDeB = document.getElementById("kirby-button-derecha-B");
        const botonIzB = document.getElementById("kirby-button-izquierdo-B");

        let contImgIB = 0;
        let contImgIIB = 1;
        let contImgIIIB = 2;

        function cambiarImgB(){
            imgOneB.src = imagenesB[contImgIB];
            imgTwoB.src = imagenesB[contImgIIB];
            imgTreeB.src = imagenesB[contImgIIIB];
        }

        botonDeB.addEventListener("click", ()=>{
            if(contImgIIIB == 0){
                contImgIIIB=3;
            }else{
                contImgIIIB=contImgIIIB-1;
            }
            if(contImgIIB == 0){
                contImgIIB=3;
            }else{
                contImgIIB--;
            }
            if(contImgIB == 0){
                contImgIB=3;
            }else{
                contImgIB--;
            }
            cambiarImgB();
        })
        botonIzB.addEventListener("click", ()=>{
            if(contImgIIIB == 3){
                contImgIIIB=0;
            }else{
                contImgIIIB++;
            }
            if(contImgIIB == 3){
                contImgIIB=0;
            }else{
                contImgIIB++;
            }
            if(contImgIB == 3){
                contImgIB=0;
            }else{
                contImgIB++;
            }
            cambiarImgB();
        })
