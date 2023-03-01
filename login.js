
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  // Accede a los valores del formulario
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Comprueba si el usuario y la contraseña son válidos
  if (isValidLogin(username, password)) {
    swal({
      icon: "success",
    });;
    // Aquí puedes redirigir al usuario a otra página
  } else {
    swal({
      title: "Error",
      text: "Usuario o/y contraseña incorrectos",
      icon: "error",
    });;
  }
;
  })

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