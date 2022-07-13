

function cargarDatos() {
    for (let fila = 1; fila <= 5; fila++){
        let datosFila = "<tr>";

        for (let columna = 1; columna <= 4; columna++) {
           datosFila += "<td>";
           datosFila += 'dato ' + fila + ',' + columna;
           datosFila += "</td>";
        }

        datosFila += "</tr>";

        // Incorporo la fila a la tabla
        document.getElementById("miTabla").innerHTML += datosFila;
      
    }
}

function cargarDatos2() {
    for (let fila = 1; fila <= 5; fila++){

        let miFila = document.createElement("tr");
        document.getElementById('miTabla').appendChild(miFila);

        for (let columna = 1; columna <= 4; columna++) {
           let miColumna = document.createElement("td");
           miColumna.innerText = 'dato ' + fila + ',' + columna;
           miFila.appendChild(miColumna);
        }
      
    }
}