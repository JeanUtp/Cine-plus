/* Funciones para la sección Dulceria */
var total = 0.00;

function agregarProducto(precioProducto, identificador){
    //Incrementar total del pago
    total = total + precioProducto;
    var miDiv = document.getElementById("total-pago");
    miDiv.innerHTML = "Total S/ "+total;

    //Incrementar cantidad del producto
    var miProducto = document.getElementById("producto"+identificador);
    var numeroEntero = parseInt(miProducto.textContent);
    miProducto.innerHTML = numeroEntero + 1;
}

function quitarProducto(precioProducto, identificador){

    //Obtener cantidad del producto
    var miProducto = document.getElementById("producto"+identificador);
    var numeroEntero = parseInt(miProducto.textContent);

    if(numeroEntero != 0){
        //Disminuir total del pago
        total = total - precioProducto;
        var miDiv = document.getElementById("total-pago");
        miDiv.innerHTML = "Total S/ "+total;

        //Disminuir cantidad del producto
        miProducto.innerHTML = numeroEntero - 1;
    }
    
}

//CINE - ASIENTOS
var matrizSala1 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala2 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala3 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala4 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala5 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala6 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala7 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];
var matrizSala8 = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
];

var salaActual = 0;
var matrizInicial = [];

function verSalaPelicula(idPelicula){
    document.getElementById('resumen-pago-asiento').innerHTML = "";

    var contenido = "";

    if(idPelicula == 1){
        matrizInicial = matrizSala1;
    }else if(idPelicula == 2){
        matrizInicial = matrizSala2;
    }else if(idPelicula == 3){
        matrizInicial = matrizSala3;
    }else if(idPelicula == 4){
        matrizInicial = matrizSala4;
    }else if(idPelicula == 5){
        matrizInicial = matrizSala5;
    }else if(idPelicula == 6){
        matrizInicial = matrizSala6;
    }else if(idPelicula == 7){
        matrizInicial = matrizSala7;
    }else if(idPelicula == 8){
        matrizInicial = matrizSala8;
    }
    
    var contador = 0;
    for (var fila = 0; fila < 9; fila++) {
        contenido = contenido + "<div class='row'>";
        for (var columna = 0; columna < 12; columna++) {
            var elemento = matrizInicial[fila][columna];
            var letra = numeroALetra(fila+1);
            var deshabilitado = (elemento == 0) ? "" : "disabled";

            contador++;
            contenido = 
            contenido + "<div class='col-md-1'><div class='ri-page-separator'>"
            +letra+""+(columna+1)+"<input type='checkbox' id='checkbox-"+contador+"' "+deshabilitado+"/></div></div>";
        }
        contenido = contenido + "</div><br/>";
    }

    document.getElementById('tituloModalSala').innerHTML = "Sala "+idPelicula;
    document.getElementById('contenido-sala').innerHTML = contenido;
    salaActual = idPelicula;
}

function confirmarAsientos(){
    // ******** Inicio de crear matriz actual ******* //
    var matrizActual = [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
    ];
    var totalCheckboxs = 9 * 12; // 9 filas x 12 columnas
    var contador = 1, i = 0, j = 0;

    while(contador <= totalCheckboxs){
        var checkbox = document.getElementById("checkbox-"+contador);
        var valorCheckbox = checkbox.checked;
        var valorDisabled = checkbox.disabled;

        if(j >= 12){
            j = 0;
            i++;
        }
        if(valorCheckbox == true || valorDisabled == true){
            matrizActual[i][j] = 1;
        }else{
            matrizActual[i][j] = 0;
        }
        j++;
        contador++;
    }
    // ******** Fin de crear matriz actual ******* //
    var cantidadAsientosNuevos = asientosDiferentes(matrizInicial,matrizActual);
    if(cantidadAsientosNuevos == 0){
        alert("Por favor, seleccione al menos un asiento.");
        document.getElementById('resumen-pago-asiento').innerHTML = "";
    }else{
        var costoAsiento = 15.00;
        var total = costoAsiento * cantidadAsientosNuevos;
        var contenido = "<br/><p class='m-tb-des'>N° Asientos: "+cantidadAsientosNuevos+"</p>"+
        "<p class='m-tb-des'>Costo por asiento: S/"+costoAsiento+"</p>"+
        "<p class='m-tb-des'>Precio final: S/"+total+"</p>"+
        "<br/><button type='button' class='btn btn-primary boton-rosado'"+
        " onclick='confirmarPagoAsientos()'>Pagar ahora</button>";

        document.getElementById('resumen-pago-asiento').innerHTML = contenido;
    }
}

function confirmarPagoAsientos(){
    // ******** Inicio de actualizar matriz ******* //
    var totalCheckboxs = 9 * 12; // 9 filas x 12 columnas
    var contador = 1, i = 0, j = 0;

    while(contador <= totalCheckboxs){
        var checkbox = document.getElementById("checkbox-"+contador);
        var valorCheckbox = checkbox.checked;
        var valorDisabled = checkbox.disabled;

        if(j >= 12){
            j = 0;
            i++;
        }
        if(valorCheckbox == true || valorDisabled == true){
            matrizInicial[i][j] = 1;
        }else{
            matrizInicial[i][j] = 0;
        }
        j++;
        contador++;
    }
    // ******** Fin de actualizar matriz ******* //
    alert("Pago realizado con éxito.");
    document.getElementById("cerrarSalaCine").click();
}

function asientosDiferentes(matrizA, matrizB) {
  var cantidadAsientosNuevos = 0, contador = 0;
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 12; j++) {
      contador++;
      var checkbox = document.getElementById("checkbox-"+contador);
      if (matrizA[i][j] != matrizB[i][j]) {
            if (!checkbox.disabled) {
                cantidadAsientosNuevos++;
            }
        }
    }
  }
  return cantidadAsientosNuevos;
}

function numeroALetra(numero) {
  if (numero === 1) {
    return 'A';
  } else if (numero === 2) {
    return 'B';
  } else if (numero === 3) {
    return 'C';
  } else if (numero === 4) {
    return 'D';
  } else if (numero === 5) {
    return 'E';
  } else if (numero === 6) {
    return 'F';
  } else if (numero === 7) {
    return 'G';
  } else if (numero === 8) {
    return 'H';
  } else if (numero === 9) {
    return 'I';
  } else {
    return "Número fuera del rango (1-9)";
  }
}