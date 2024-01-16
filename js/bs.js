const terminos = confirm("Antes de Entrar a Budgestar, ¿Acepta los términos y condiciones?");

if (!terminos) {
    alert("No puedes continuar sin aceptar los términos y condiciones.");
    window.location.href = "condicionesRechazadas.html";
}

let sumaTotal = 0;

document.getElementById("precioBoton").addEventListener("click", function () {
    const nuevoPrecio = parseFloat(document.getElementById("barra").value);


    if (!isNaN(nuevoPrecio)) {

        sumaTotal += nuevoPrecio;

        document.getElementById("precioTotal").textContent = sumaTotal.toFixed(2);
    } else {
        alert("Por favor, ingresa un número válido.");
    }
});