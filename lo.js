let intervalo;
let minutoActual = 0;

function iniciar() {

    clearInterval(intervalo);

    const tiempoTotal = Number(document.getElementById("tiempo").value);

    intervalo = setInterval(function() {

        minutoActual++;

        actualizarSimulacion();

        if (minutoActual >= tiempoTotal) {

            clearInterval(intervalo);

            document.getElementById("mensaje").innerHTML =
                " El descanso ha terminado";

        }

    }, 500);

}


function pausar() {

    clearInterval(intervalo);

    document.getElementById("mensaje").innerHTML =
        " Simulación pausada";

}


function reiniciar() {

    clearInterval(intervalo);

    minutoActual = 0;

    document.getElementById("basura").style.height = "0%";

    document.getElementById("porcentaje").innerHTML = "0%";

    document.getElementById("tiempoActual").innerHTML = "0 min";

    document.getElementById("totalEmpaques").innerHTML = "0";

    document.getElementById("pesoActual").innerHTML = "0 kg";

    document.getElementById("progreso").style.width = "0%";

    document.getElementById("mensaje").innerHTML =
        "Caneca disponible";

}


function actualizarSimulacion() {

    const estudiantes =
        Number(document.getElementById("estudiantes").value);

    const tiempo =
        Number(document.getElementById("tiempo").value);

    const empaquesPorEstudiante =
        Number(document.getElementById("empaques").value);

    const pesoEmpaque =
        Number(document.getElementById("pesoEmpaque").value);

    const capacidad =
        Number(document.getElementById("capacidad").value);


    // Cantidad total de empaques durante el descanso

    const empaquesTotales =
        estudiantes * empaquesPorEstudiante;


    // Cantidad de empaques generados hasta este momento

    const empaquesActuales =
        empaquesTotales * (minutoActual / tiempo);


    // Peso de los residuos

    const pesoActual =
        empaquesActuales * pesoEmpaque;


    // Porcentaje de llenado

    let porcentaje =
        (pesoActual / capacidad) * 100;


    if (porcentaje > 100) {
        porcentaje = 100;
    }


    // Actualizar información

    document.getElementById("tiempoActual").innerHTML =
        minutoActual + " min";

    document.getElementById("mostrarEstudiantes").innerHTML =
        estudiantes;

    document.getElementById("totalEmpaques").innerHTML =
        Math.round(empaquesActuales);

    document.getElementById("pesoActual").innerHTML =
        pesoActual.toFixed(2) + " kg";


    document.getElementById("porcentaje").innerHTML =
        porcentaje.toFixed(0) + "%";


    // Llenar la caneca

    document.getElementById("basura").style.height =
        porcentaje + "%";


    // Barra de progreso del descanso

    const progreso =
        (minutoActual / tiempo) * 100;

    document.getElementById("progreso").style.width =
        progreso + "%";


    // Mensajes

    if (porcentaje >= 100) {

        document.getElementById("mensaje").innerHTML =
            " ¡CANeca LLENA!";

    } else if (porcentaje >= 80) {

        document.getElementById("mensaje").innerHTML =
            " La caneca está casi llena";

    } else if (porcentaje >= 50) {

        document.getElementById("mensaje").innerHTML =
            " La caneca está a la mitad";

    } else {

        document.getElementById("mensaje").innerHTML =
            " La caneca tiene espacio disponible";

    }

}