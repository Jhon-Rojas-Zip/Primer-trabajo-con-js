function ingresar() {
    let u = document.getElementById("usuario").value;
    let p = document.getElementById("contra").value;
    let msg = document.getElementById("resultado");

    if (u === "Jhon Rojas" && p === "03042024") {
        msg.textContent = " 🎉 ¡Bienvenido pe causa, " + u + "! Redirigiendo en 5 segundos...";
        msg.className = "msg-exito";
        msg.style.display = "block";

        setTimeout(() => {
            window.location.href = "register.html";
        }, 5000);
    } else {
        msg.textContent = "¡ERROR! Usuario o contraseña incorrectos";
        msg.className = "msg-error";
        msg.style.display = "block";
    }
}