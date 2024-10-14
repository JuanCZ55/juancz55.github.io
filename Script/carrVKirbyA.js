        const imagenes = [];
        for (let i = 1; i <= 4; i++) {
            imagenes.push("../Imagenes/Kirby/Imagen (" + i + ").jpg");
        }

        const imgOne = document.getElementById("kirby-imagen-1A");
        const imgTwo = document.getElementById("kirby-imagen-2A");
        const imgTree = document.getElementById("kirby-imagen-3A");
        const botonDe = document.getElementById("kirby-button-derecha-A");
        const botonIz = document.getElementById("kirby-button-izquierdo-A");

        var contImgIA = 0;
        var contImgIIA = 1;
        var contImgIIIA = 2;

        function cambiarImg(){
            imgOne.src = imagenes[contImgIA];
            imgTwo.src = imagenes[contImgIIA];
            imgTree.src = imagenes[contImgIIIA];
        }

        botonDe.addEventListener("click", ()=>{
            if(contImgIIIA == 0){
                contImgIIIA=3;
            }else{
                contImgIIIA=contImgIIIA-1;
            }
            if(contImgIIA == 0){
                contImgIIA=3;
            }else{
                contImgIIA--;
            }
            if(contImgIA == 0){
                contImgIA=3;
            }else{
                contImgIA--;
            }
            cambiarImg();
        })
        botonIz.addEventListener("click", ()=>{
            if(contImgIIIA == 3){
                contImgIIIA=0;
            }else{
                contImgIIIA++;
            }
            if(contImgIIA == 3){
                contImgIIA=0;
            }else{
                contImgIIA++;
            }
            if(contImgIA == 3){
                contImgIA=0;
            }else{
                contImgIA++;
            }
            cambiarImg();
        })
