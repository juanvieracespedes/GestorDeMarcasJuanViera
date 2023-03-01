
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  // Accede a los valores del formulario
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Comprueba si el usuario y la contraseña son válidos
  if (isValidLogin(username, password)) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesión iniciada correctamente',
      showConfirmButton: false,
      timer: 1500
    });

    window.location.href = "index.html";
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña y/o usuario incorrecta/s!',
      footer: '<a href="">olvidaste tu contraseña?</a>'
    });
  }
;
  });

  function isValidLogin(username, password) {
    // Accede a los usuarios almacenados en el localStorage
    var users = JSON.parse(localStorage.getItem('usuarios'));
    
    // Busca el usuario y la contraseña correspondientes
    for (var i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        return true;
      }
    }
    
    return false;
  }