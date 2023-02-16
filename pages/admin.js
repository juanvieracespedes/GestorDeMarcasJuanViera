function agregarUsuario(event) {
    event.preventDefault();
    let nombre = document.getElementById("validationCustom01").value;
    let apellido = document.getElementById("validationCustom02").value;
    let username = document.getElementById("validationCustomUsername").value;
    let direccion = document.getElementById("validationCustom03").value;
    let departamento = document.getElementById("validationCustom04").value;
    let seccion = document.getElementById("validationCustom05").value;
    let telefono = document.getElementById("validationCustom06").value;

    // Crear un objeto usuario con los datos ingresados
   let usuario = {
        nombre: nombre,
        apellido: apellido,
        username: username,
        direccion: direccion,
        departamento: departamento,
        seccion: seccion,
        telefono: telefono
    };

    // Agregar una nueva fila a la tabla con los datos del usuario
    let tabla = document.getElementById("tablaUsuarios").getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow();
    let celdaNombre = fila.insertCell(0);
    let celdaApellido = fila.insertCell(1);
    let celdaUsername = fila.insertCell(2);
    let celdaDireccion = fila.insertCell(3);
    let celdaDepartamento = fila.insertCell(4);
    let celdaSeccion = fila.insertCell(5);
    let celdaTelefono = fila.insertCell(6);
    celdaNombre.innerHTML = nombre;
    celdaApellido.innerHTML = apellido;
    celdaUsername.innerHTML = username;
    celdaDireccion.innerHTML = direccion;
    celdaDepartamento.innerHTML = departamento;
    celdaSeccion.innerHTML = seccion;
    celdaTelefono.innerHTML = telefono;

    // Limpiar el formulario
    document.getElementById("userCreator").reset();
}
