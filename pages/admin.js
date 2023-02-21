


function agregarUsuario() {
    // Obtener los valores del formulario

    const usuarios = [];

    const nombre = document.getElementById('campoNombre').value;
    const apellido = document.getElementById('campoApellido').value;
    const username = document.getElementById('campoUsername').value;
    const correo = document.getElementById('campoCorreoe').value;
    const seccion = document.getElementById('campoSeccion').value;
    const telefono = document.getElementById('campoTelefono').value;
    
    // Crear un nuevo objeto usuario
    
    let nuevoUsuario = {
      nombre,
      apellido,
      username,
      correo,
      seccion,
      telefono
    };
    
    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);
    
    // Guardar el array de usuarios en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    // Limpiar el formulario
    document.getElementById('campoNombre').value = '';
    document.getElementById('campoApellido').value = '';
    document.getElementById('campoUsername').value = '';
    document.getElementById('campoCorreoe').value = '';
    document.getElementById('campoSeccion').value = '';
    document.getElementById('campoTelefono').value = '';

// Obtener el array de usuarios guardado en localStorage
    const usuariosGuardados = localStorage.getItem('usuarios');
   
    

    const listaUsuarios = JSON.parse(usuariosGuardados);
   
    usuarios.forEach(nuevoUsuario => {
        // Agregar una nueva fila a la tabla con los datos del usuario
       let tabla = document.getElementById("tablaUsuarios").getElementsByTagName('tbody')[0];
       let fila = tabla.insertRow();
       let celdaNombre = fila.insertCell(0);
       let celdaApellido = fila.insertCell(1);
       let celdaUsername = fila.insertCell(2);
       let celdaCorreoe = fila.insertCell(3);
       let celdaSeccion = fila.insertCell(4);
       let celdaTelefono = fila.insertCell(5);
       celdaNombre.innerHTML = JSON.parse(usuario.nombre);
       celdaApellido.innerHTML = JSON.parse(usuario.apellido);
       celdaUsername.innerHTML = JSON.parse(usuario.username);
       celdaCorreoe.innerHTML = JSON.parse(usuario.correo);
       celdaSeccion.innerHTML = JSON.parse(usuario.seccion);
       celdaTelefono.innerHTML = JSON.parse(usuario.telefono);
  }
    )}