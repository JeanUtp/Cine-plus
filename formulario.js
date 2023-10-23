function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellidos_paternos = document.getElementById("apellidos_paternos").value;
  var apellidos_maternos = document.getElementById("apellidos_maternos").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var tipo_documento = document.getElementById("tipo_documento").value;
  var nro_documento = document.getElementById("nro_documento").value;
  var genero = document.querySelector('input[name="genero"]:checked');
  var terminos = document.getElementById("terminos").checked;

  // Validación básica (puedes agregar más validaciones según tus necesidades)
  if (!nombre || !apellidos_paternos || !apellidos_maternos || !email || !password || !confirm_password || !tipo_documento || !nro_documento || !genero || !terminos) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (password !== confirm_password) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  var numeroDocumentoPattern = /^\d+$/;
  if (!numeroDocumentoPattern.test(nro_documento)) {
    alert("El número de documento debe contener solo números.");
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Ingrese un correo electrónico válido.");
    return;
  }


  alert("¡Registro exitoso!");

}

function validarContactanos(){
  var nombre = document.getElementById("nombreContacto").value;
  var correo = document.getElementById("correoContacto").value;
  var mensaje = document.getElementById("mensajeContacto").value;


  if (!nombre || !correo || !mensaje) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(correo)) {
    alert("Ingrese un correo electrónico válido.");
    return;
  }
  
  alert("Mensaje enviado");
  document.getElementById("nombreContacto").value = "";
  document.getElementById("correoContacto").value = "";
  document.getElementById("mensajeContacto").value = "";
}

function validarLogin() {
  var correo = document.getElementById("correoLogin").value;
  var clave = document.getElementById("claveLogin").value;

  if (!correo || !clave) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(correo)) {
    alert("Ingrese un correo electrónico válido.");
    return;
  }

  if(correo == "soportecinep@cineplus.com" && clave=="cineplus2023"){
    alert("Bienvenido");
    document.getElementById("correoLogin").value = "";
    document.getElementById("claveLogin").value = "";
  }else{
    alert("Credenciales erróneas");
  }
  
}