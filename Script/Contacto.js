function validarForm() {
    const tNom = /^[a-zA-ZñÑ.\s]+$/;
    let tmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const tTel = /^\+?\d{8,13}$/;
    const tMsj = /^[\s\S]{10,400}$/;


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
        let sms = `Nombre: ${nombre.value}<br> Correo Electronico: ${mail.value}<br>Telefono: ${tel.value} <br>  <br>Mensaje: ${msj.value}`
        crearMensaje(sms)
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
    const mensaje = document.createElement("p");
    mensaje.innerHTML = texto;
    mensaje.id = "mensajeFlotante"
    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 4000);
}
