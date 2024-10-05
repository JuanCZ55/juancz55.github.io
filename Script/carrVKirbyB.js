        const imagenesB = [];
        for (let i = 1; i <= 5; i++) {
            imagenesB.push("../Imagenes/Kirby/Imag (" + i + ").jpg");
        }

        const imgOneB = document.getElementById("im1B");
        const imgTwoB = document.getElementById("im2B");
        const imgTreeB = document.getElementById("im3B");
        const botonDeB = document.getElementById("deB");
        const botonIzB = document.getElementById("izB");

        let contIB = 0;
        let contImB = 1;
        let contImgB = 2;

        function cambiarImgB(){
            imgOneB.src = imagenesB[contIB];
            imgTwoB.src = imagenesB[contImB];
            imgTreeB.src = imagenesB[contImgB];
        }

        botonDeB.addEventListener("click", ()=>{
            if(contImgB == 0){
                contImgB=3;
            }else{
                contImgB=contImgB-1;
            }
            if(contImB == 0){
                contImB=3;
            }else{
                contImB--;
            }
            if(contIB == 0){
                contIB=3;
            }else{
                contIB--;
            }
            cambiarImgB();
        })
        botonIzB.addEventListener("click", ()=>{
            if(contImgB == 3){
                contImgB=0;
            }else{
                contImgB++;
            }
            if(contImB == 3){
                contImB=0;
            }else{
                contImB++;
            }
            if(contIB == 3){
                contIB=0;
            }else{
                contIB++;
            }
            cambiarImgB();
        })
