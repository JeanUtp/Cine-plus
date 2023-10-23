var sonido = new Audio();
sonido.src = "/resources/sounds/main-content-sound.aac";

const logo = document.querySelector('#main-logo');
const pelicula = document.querySelector('#selecP');
const cine = document.querySelector('#selecC');
const dulceria = document.querySelector('#selecD');
const socios = document.querySelector('#selecS');
const nosotros = document.querySelector('#selecN');
const pagpr = document.querySelector('#page-main');
const pagm = document.querySelector('#page-movies');
const pagc = document.querySelector('#page-sites');
const pags = document.querySelector('#page-shop');
const pagp = document.querySelector('#page-parners');
const pagu = document.querySelector('#page-us');

logo.addEventListener('click',() =>{
    pelicula.classList.remove('selecAct');
    cine.classList.remove('selecAct');
    dulceria.classList.remove('selecAct');
    socios.classList.remove('selecAct');
    nosotros.classList.remove('selecAct');

    pagpr.classList.remove('pageinact');
    pagpr.classList.add('pageact');
    pagm.classList.remove('pageact');
    pagm.classList.add('pageinact');
    pagc.classList.remove('pageact');
    pagc.classList.add('pageinact');
    pags.classList.remove('pageact');
    pags.classList.add('pageinact');
    pagp.classList.remove('pageact');
    pagp.classList.add('pageinact');
    pagu.classList.remove('pageact');
    pagu.classList.add('pageinact');
});


pelicula.addEventListener('click',() =>{
    pelicula.classList.add('selecAct');
    pelicula.classList.remove('selecP');
    cine.classList.remove('selecAct');
    dulceria.classList.remove('selecAct');
    socios.classList.remove('selecAct');
    nosotros.classList.remove('selecAct');

    pagpr.classList.remove('pageact');
    pagpr.classList.add('pageinact');
    pagm.classList.remove('pageinact');
    pagm.classList.add('pageact');
    pagc.classList.remove('pageact');
    pagc.classList.add('pageinact');
    pags.classList.remove('pageact');
    pags.classList.add('pageinact');
    pagp.classList.remove('pageact');
    pagp.classList.add('pageinact');
    pagu.classList.remove('pageact');
    pagu.classList.add('pageinact');
});

cine.addEventListener('click',() =>{
    cine.classList.add('selecAct');
    pelicula.classList.remove('selecAct');
    cine.classList.remove('selecC');
    dulceria.classList.remove('selecAct');
    socios.classList.remove('selecAct');
    nosotros.classList.remove('selecAct');

    pagpr.classList.remove('pageact');
    pagpr.classList.add('pageinact');
    pagm.classList.remove('pageact');
    pagm.classList.add('pageinact');
    pagc.classList.remove('pageinact');
    pagc.classList.add('pageact');
    pags.classList.remove('pageact');
    pags.classList.add('pageinact');
    pagp.classList.remove('pageact');
    pagp.classList.add('pageinact');
    pagu.classList.remove('pageact');
    pagu.classList.add('pageinact');
});

dulceria.addEventListener('click',() =>{
    dulceria.classList.add('selecAct');
    pelicula.classList.remove('selecAct');
    cine.classList.remove('selecAct');
    dulceria.classList.remove('selecD');
    socios.classList.remove('selecAct');
    nosotros.classList.remove('selecAct');

    pagpr.classList.remove('pageact');
    pagpr.classList.add('pageinact');
    pagm.classList.remove('pageact');
    pagm.classList.add('pageinact');
    pagc.classList.remove('pageact');
    pagc.classList.add('pageinact');
    pags.classList.remove('pageinact');
    pags.classList.add('pageact');
    pagp.classList.remove('pageact');
    pagp.classList.add('pageinact');
    pagu.classList.remove('pageact');
    pagu.classList.add('pageinact');
});

socios.addEventListener('click',() =>{
    socios.classList.add('selecAct');
    pelicula.classList.remove('selecAct');
    cine.classList.remove('selecAct');
    dulceria.classList.remove('selecAct');
    socios.classList.remove('selecS');
    nosotros.classList.remove('selecAct');


    pagpr.classList.remove('pageact');
    pagpr.classList.add('pageinact');
    pagm.classList.remove('pageact');
    pagm.classList.add('pageinact');
    pagc.classList.remove('pageact');
    pagc.classList.add('pageinact');
    pags.classList.remove('pageact');
    pags.classList.add('pageinact');
    pagp.classList.remove('pageinact');
    pagp.classList.add('pageact');
    pagu.classList.remove('pageact');
    pagu.classList.add('pageinact');
});

nosotros.addEventListener('click',() =>{
    nosotros.classList.add('selecAct');
    pelicula.classList.remove('selecP');
    cine.classList.remove('selecAct');
    dulceria.classList.remove('selecAct');
    socios.classList.remove('selecAct');
    nosotros.classList.remove('selecN');


    pagpr.classList.remove('pageact');
    pagpr.classList.add('pageinact');
    pagm.classList.remove('pageact');
    pagm.classList.add('pageinact');
    pagc.classList.remove('pageact');
    pagc.classList.add('pageinact');
    pags.classList.remove('pageact');
    pags.classList.add('pageinact');
    pagp.classList.remove('pageact');
    pagp.classList.add('pageinact');
    pagu.classList.remove('pageinact');
    pagu.classList.add('pageact');
});


var inputBuscador = document.getElementById("buscador");
var botonBuscar = document.getElementById("botonBuscar");

botonBuscar.addEventListener("click", function() {
  var textoBusqueda = inputBuscador.value.trim().toLowerCase();

  var elementosDeTexto = document.querySelectorAll("body *:not(script, style)");
  elementosDeTexto.forEach(function(elemento) {
    var textoElemento = elemento.textContent.trim().toLowerCase();

    if (textoElemento.includes(textoBusqueda)) {
       elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
