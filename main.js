/* --------------------------- login primitivo de user ------------------------------------------------
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

  

  person.account.logUser = prompt("ingrese nombre de usuario");
  person.account.passUser = prompt("ingrese contraseña");


if (person.account.logUser == "jviera" && person.account.passUser == "1234"){
alert ("Bienvenido" + " " + person.name.first + " " + person.name.last + " ")
}
else {
    alert ("Usuario y contraseña incorrecta")
}


esto se cambiará por un login que matchee con una base de datos ya creada previamente (o esa es la idea je)
 --------------------------------------------------------------------------------------------------*/


// reloj en tiempo real -----------------------------------------------------------------------------------------------

function settingClock() {  
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    

    if(hour < 10) {
            hour = "0" + hour; 
    } 
    if (minute < 10) {
            minute = "0" + minute;
    }
    if (second < 10) {
            second = "0" + second;
    }


    let frame = document.getElementById("clock");
    frame.innerHTML = hour + ":" + minute + ":" + second;    
}

setInterval(settingClock, 500);

//----------------------------------------------------------------------------------------------------------



// sistema primitivo de marcaje de horarios de entradas y salidas (la idea es que esto pueda hacerse grabando entradas y salidas en una base de datos para que se pueda consultar los horarios de cualquier usuario)
  let punchInMark = new Date();
  let punchInHour = punchInMark.getHours();
  let punchInMinute = punchInMark.getMinutes();
  let punchRestMark = new Date();
  
  document.getElementById("punchIn").addEventListener("click", function() {
    
    document.getElementById("timePunchIn").innerHTML = "Entrada " + punchInHour + ":" + punchInMinute;
  });
  document.getElementById("punchRest").addEventListener("click", function() {
    let punchRestMark = new Date();
    let punchRestMkHour = punchRestMark.getHours();
    let punchRestMkMinute = punchRestMark.getMinutes();
    document.getElementById("timePunchRest").innerHTML = "Inicio de descanso " + punchRestMkHour + ":" + punchRestMkMinute;
  });
  document.getElementById("punchRestEnd").addEventListener("click", function() {
    let date = new Date();
    let timeDiff = date - punchRestMark;
    document.getElementById("timePunchRestEnd").innerHTML = "Fin de descanso: " + date.getHours() + ":" + date.getMinutes() + "<br>" + "Tiempo de descanso: " + timeDiff / 1000 / 60  + " minutos";
  });
  document.getElementById("punchOut").addEventListener("click", function() {
    let punchOut = new Date();
    let punchOutHour = parseInt(punchOut.getHours());
    let punchOutMinutes = parseInt(punchOut.getMinutes());
    let timeDiff = parseInt(punchOut - punchInMark);
    document.getElementById("timePunchOut").innerHTML = "Salida: " + punchOutHour + ":" + punchOutMinutes + "<br>" + "Tiempo de jornada laboral: " + timeDiff / 1000 / 60/ 60 + " horas";
  });



// -------------------------------------------------------------------------------------------------------------------------------------------------------------


