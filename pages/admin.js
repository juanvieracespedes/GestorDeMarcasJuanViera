const refrescarUsers = document.getElementById("refreshUsuarios");
refrescarUsers.addEventListener("click", refreshUsuarios);

const agregarUsuarios = document.getElementById("botonSubmit");
agregarUsuarios.addEventListener("click", agregarUsuario)


function agregarUsuario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('campoNombre').value;
    const apellido = document.getElementById('campoApellido').value;
    const username = document.getElementById('campoUsername').value;
    const correo = document.getElementById('campoCorreoe').value;
    const seccion = document.getElementById('campoSeccion').value;
    const telefono = document.getElementById('campoTelefono').value;
  
    // Mostrar una alerta SweetAlert para ingresar la contraseña del usuario
    swal.fire({
      title: 'Ingrese la contraseña del usuario',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      showLoaderOnConfirm: true,
      preConfirm: (password) => {
        // Obtener el array de usuarios guardado en localStorage
        const usuariosGuardados = localStorage.getItem('usuarios');
        let usuarios = [];
  
        if (usuariosGuardados) {
          usuarios = JSON.parse(usuariosGuardados);
        }
  
        // Crear un nuevo objeto usuario
        let nuevoUsuario = {
          nombre,
          apellido,
          username,
          correo,
          seccion,
          telefono,
          password,
        };
  
        // Agregar el nuevo usuario al array de usuarios
        usuarios.push(nuevoUsuario);
  
        // Guardar el array de usuarios en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Usuario agregado!',
          icon: 'success'
        });
  
        // Limpiar el formulario
        document.getElementById('campoNombre').value = '';
        document.getElementById('campoApellido').value = '';
        document.getElementById('campoUsername').value = '';
        document.getElementById('campoCorreoe').value = '';
        document.getElementById('campoSeccion').value = '';
        document.getElementById('campoTelefono').value = '';
  
        // Mostrar la lista de usuarios en la tabla
        refreshUsuarios();
      }
    });
  }

        function refreshUsuarios() {
            // Obtener la lista de usuarios guardados en localStorage
            const usuariosGuardados = localStorage.getItem('usuarios');
            let usuarios = [];
          
            if (usuariosGuardados) {
              usuarios = JSON.parse(usuariosGuardados);
            }
          
            // Obtener la tabla de usuarios
            const tabla = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];
          
            // Limpiar la tabla
            tabla.innerHTML = '';
          
            // Iterar sobre la lista de usuarios y agregar una fila por cada usuario
            for (let i = 0; i < usuarios.length; i++) {
              const usuario = usuarios[i];
          
              // Agregar una nueva fila a la tabla con los datos del usuario
              let fila = tabla.insertRow();
              let celdaNombre = fila.insertCell(0);
              let celdaApellido = fila.insertCell(1);
              let celdaUsername = fila.insertCell(2);
              let celdaCorreoe = fila.insertCell(3);
              let celdaSeccion = fila.insertCell(4);
              let celdaTelefono = fila.insertCell(5);
          
              celdaNombre.innerHTML = usuario.nombre;
              celdaApellido.innerHTML = usuario.apellido;
              celdaUsername.innerHTML = usuario.username;
              celdaCorreoe.innerHTML = usuario.correo;
              celdaSeccion.innerHTML = usuario.seccion;
              celdaTelefono.innerHTML = usuario.telefono;

            }

          };
            
    