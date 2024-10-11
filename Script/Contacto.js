function validarForm() {
    const tNom = /^[a-zA-ZñÑ.'\s]+$/;
    let tmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const tTel = /^\+?\d{8,13}$/;
    const tMsj = /^[\s\S]{10,300}$/;


    const nombre = document.getElementById("nombre");
    const mail = document.getElementById("email");
    const tel = document.getElementById("telefono");
    const msj = document.getElementById("mensaje")

    const pNombre = document.getElementById("errorNombre");
    const pMail = document.getElementById("errorEmail");
    const pTel = document.getElementById("errorTel");
    const pMsj = document.getElementById("errorMensaje")

    let re = true;

    if (!tNom.test(nombre.value)) {
        pNombre.style.visibility = "visible"
        re = false;
    }
    if (!tmail.test(mail.value)) {
        pMail.style.visibility = "visible"
        re = false;
    } if (!tTel.test(tel.value)) {
        pTel.style.visibility = "visible"
        re = false;
    } if (!tMsj.test(msj.value)) {
        pMsj.style.visibility = "visible"
        re = false;
    }
    if (re) {
        crearMensaje("felicidades negro")
        nombre.value = " "
        mail.value = " "
        tel.value = " "
        msj.value = " "
        return false;
    }
    return re;

}
function limpiar(event) {
    const pNombre = document.getElementById("errorNombre");
    const pMail = document.getElementById("errorEmail");
    const pTel = document.getElementById("errorTel");
    const pMsj = document.getElementById("errorMensaje")


    const eve = event.target.id;
    if (eve === "nombre") {
        pNombre.style.visibility = "hidden"
    } else if (eve === "email") {
        pMail.style.visibility = "hidden"
    } else if (eve === "telefono") {
        pTel.style.visibility = "hidden"
    } else if (eve === "mensaje") {
        pMsj.style.visibility = "hidden"
    }
}


function crearMensaje(texto) {
    const mensaje = document.createElement("div");
    mensaje.innerHTML = texto;

    // Aplicar estilos
    mensaje.style.position = "fixed";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)"; // Centrar el mensaje
    mensaje.style.backgroundColor = "#4CAF50"; // Verde
    mensaje.style.color = "white";
    mensaje.style.padding = "10px";
    mensaje.style.borderRadius = "5px";
    mensaje.style.zIndex = "1000";
    mensaje.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    mensaje.style.textAlign = "center"; // Centrar el texto

    // Añadir el mensaje al cuerpo del documento
    document.body.appendChild(mensaje);

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}
