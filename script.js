document.getElementById('formularioOperacion').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const operacion = document.getElementById('entradaOperacion').value;

    if (!/^\d+(\+\d+)+$/.test(operacion)) {
        alert("Por favor, ingresa una operación válida con números y signos de suma.");
        return;
    }

    const numeros = operacion.split('+').map(Number);

    // Variable para almacenar el resultado acumulado
    let resultadoAcumulado = 0;

    // Limpiar la lista de resultados previos
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = '';

    for (let i = 0; i < numeros.length; i++) {
        if (i === 0) {
            resultadoAcumulado = numeros[i]; 
        } else {
            const pasoAnterior = resultadoAcumulado;
            resultadoAcumulado += numeros[i];

          
            const elementoLista = document.createElement('li');
            elementoLista.className = 'list-group-item';
            elementoLista.innerText = `${pasoAnterior} + ${numeros[i]} = ${resultadoAcumulado}`;
            listaResultados.appendChild(elementoLista);
        }
    }
});
