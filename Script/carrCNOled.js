let cantiO = 5;

        const imagenesO = [];
        for (let i = 1; i <= cantiO; i++) {
            imagenesO.push("../Imagenes/Nintendo/Amoled/Imagen (" + i + ").png");
        }
        cantiO--;

        const imgOneO = document.getElementById("imc0O");
        const imgTwoO = document.getElementById("imc1O");
        const imgTreeO = document.getElementById("imc2O");
        const botonDeO = document.getElementById("de1O");
        const botonIzO = document.getElementById("iz1O");

        var contIO = 0;
        var contImO = 1;
        var contImgO = 2;

        function cambiarImgO(){
            imgOneO.src = imagenesO[contIO];
            imgTwoO.src = imagenesO[contImO];
            imgTreeO.src = imagenesO[contImgO];
        }

        botonDeO.addEventListener("click", ()=>{
            if(contImgO == 0){
                contImgO=cantiO;
            }else{
                contImgO=contImgO-1;
            }
            if(contImO == 0){
                contImO=cantiO;
            }else{
                contImO--;
            }
            if(contIO == 0){
                contIO=cantiO;
            }else{
                contIO--;
            }
            cambiarImgO();
        })
        botonIzO.addEventListener("click", ()=>{
            if(contImgO == cantiO){
                contImgO=0;
            }else{
                contImgO++;
            }
            if(contImO == cantiO){
                contImO=0;
            }else{
                contImO++;
            }
            if(contIO == cantiO){
                contIO=0;
            }else{
                contIO++;
            }
            cambiarImgO();
        })
