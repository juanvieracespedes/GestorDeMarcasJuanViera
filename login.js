//------------------------------- aqui deberia tener algo para poder enlazar a los usuarios guardados en la pagina de admin.html y usar eso para validad la entrar ---------------------------------


let person = {
    name: {
      first: "Juan",
      last: "Viera",
    },
    age: 28,
    account: {
        logUser: "jviera",
        passUser: "1234"
    }
  };











// --------------------------- login primitivo de user ------------------------------------------------
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "jviera" && password === "1234") {
      // Las credenciales son válidas, redirigir al usuario a la nueva página
      window.location.href = "index.html"; // Cambia esta URL por la que desees redirigir al usuario
      alert("Bienvenido " + person.name.first + " " + person.name.last)
    } else {
      // Las credenciales son inválidas, muestra un mensaje de error
      alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  }

//esto se cambiará por un login que matchee con una base de datos ya creada previamente (o esa es la idea je)