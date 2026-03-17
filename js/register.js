let contadorRegistros = 0;

function verificar(){

    let nombre = document.getElementById("nombre").value.trim();
    let edad = parseInt(document.getElementById("edad").value);
    let ciudad = document.getElementById("ciudad").value.trim();
    let caja = document.getElementById("resultado");

    if(nombre === ""){
        caja.innerHTML = "⚠️ Por favor ingrese su nombre.";
        console.log("Intento de registro sin nombre.");
        return;
    }

    if(isNaN(edad)){
        caja.innerHTML = "⚠️ Por favor ingrese su edad.";
        console.log("Intento de registro sin edad.");
        return;
    }

    if(edad < 0){
        caja.innerHTML = "⚠️ La edad no puede ser negativa.";
        console.log("Edad inválida ingresada.");
        return;
    }

    if(ciudad === ""){
        caja.innerHTML = "⚠️ Por favor ingrese su ciudad.";
        console.log("Intento de registro sin ciudad.");
        return;
    }

    console.log("Usuario:", nombre);
    console.log("Edad:", edad);
    
    contadorRegistros++;
    document.getElementById("contador").innerHTML =
    "Registros realizados: " + contadorRegistros;

    if(edad >= 18){
        caja.innerHTML = "✅ ¡Bienvenido/a, " + nombre + " de " + ciudad + "! Eres mayor de edad.";
    } 
    else{
        caja.innerHTML = "🔞 ¡Bienvenido/a, " + nombre + " de " + ciudad + "! Eres menor de edad.";
    }

}

function limpiar(){

    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let ciudad = document.getElementById("ciudad");
    let caja = document.getElementById("resultado");

    nombre.value = "";
    edad.value = "";
    ciudad.value = "";

    caja.innerHTML = "🧹 Formulario limpiado.";

    console.log("Formulario limpiado correctamente.");
}