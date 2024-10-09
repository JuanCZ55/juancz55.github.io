let canti = 6;

        const imagenes = [];
        for (let i = 1; i <= canti; i++) {
            imagenes.push("imagenes/NAmoled/Imagen (" + i + ").jpg");
        }
        canti--;

        const imgOne = document.getElementById("im1");
        const imgTwo = document.getElementById("im2");
        const imgTree = document.getElementById("im3");
        const botonDe = document.getElementById("de");
        const botonIz = document.getElementById("iz");

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
                contImg=canti;
            }else{
                contImg=contImg-1;
            }
            if(contIm == 0){
                contIm=canti;
            }else{
                contIm--;
            }
            if(contI == 0){
                contI=canti;
            }else{
                contI--;
            }
            cambiarImg();
        })
        botonIz.addEventListener("click", ()=>{
            if(contImg == canti){
                contImg=0;
            }else{
                contImg++;
            }
            if(contIm == canti){
                contIm=0;
            }else{
                contIm++;
            }
            if(contI == canti){
                contI=0;
            }else{
                contI++;
            }
            cambiarImg();
        })
