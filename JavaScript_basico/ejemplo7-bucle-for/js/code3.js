for (let i = 1; i <= 6; i++) {
    /*document.getElementById("combo").innerHTML += 
        "<option value=" + i + ">Opción " + i + "</option>";*/
    let opcion = new Option("Opcion " +i, i);
    document.getElementById("combo").appendChild(opcion);
    
}