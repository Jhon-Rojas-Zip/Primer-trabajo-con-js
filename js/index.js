function alertar(){

    let nombre = document.getElementById("nombre").value.trim();
    let caja = document.getElementById("resultado");

    if(nombre === ""){
        caja.innerHTML = "⚠️ Por favor ingrese su nombre antes de continuar.";
        console.log("Intento de envío sin nombre.");
        return;
    }

    console.log("Usuario registrado:", nombre);
    console.log("Mensaje enviado correctamente.");

    caja.innerHTML = "🎉 Hola, " + nombre + ", ¡Bienvenido al curso de JavaScript! 🎉";
}