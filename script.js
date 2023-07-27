// Obtén los elementos del formulario y de la lista
var formulario = document.getElementById("formulario");
var input = document.getElementById("recordatorioInput");
var lista = document.getElementById("listaRecordatorios");
var borrarListaBtn = document.getElementById("borrarListaBtn");

// Agrega un evento de envío al formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén el valor del input
    var recordatorio = input.value;

    // Crea un nuevo elemento de lista y agrega el texto del recordatorio
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = recordatorio;

    // Crea un botón de eliminar
    var botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    
    // Agrega el botón de eliminar al elemento de lista
    nuevoElemento.appendChild(botonEliminar);

    // Agrega el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);

    // Restablece el valor del input a vacío
    input.value = "";

    // Agrega un evento de clic al botón de eliminar
    botonEliminar.addEventListener("click", function() {
        nuevoElemento.remove();
    });
});

// Agrega un evento de clic al botón de borrar lista
borrarListaBtn.addEventListener("click", function() {
    lista.innerHTML = ""; // Elimina todos los elementos de la lista
});
