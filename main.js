

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
    alert("Que tengas una exclente jornada!!")
    //aqui al tocar el boton de Entrada, se toma la hora de la variable punchInMark tomando la hora y minutos y mostrandolo en pantalla, ademas de la alerta de bienvenida
  });
  document.getElementById("punchRest").addEventListener("click", function() {
    let punchRestMark = new Date();
    let punchRestMkHour = punchRestMark.getHours();
    let punchRestMkMinute = punchRestMark.getMinutes();
    document.getElementById("timePunchRest").innerHTML = "Inicio de descanso " + punchRestMkHour + ":" + punchRestMkMinute;
    //aqui lo que hacemos es crear una nueva hora para tomar, que es la de inicio de descanso similar al proceso anterior
  });
  document.getElementById("punchRestEnd").addEventListener("click", function() {
    let date = new Date();
    let timeDiff = date - punchRestMark;
    document.getElementById("timePunchRestEnd").innerHTML = "Fin de descanso: " + date.getHours() + ":" + date.getMinutes() + "<br>" + "Tiempo de descanso: " + (timeDiff / 1000 / 60).toFixed(2)  + " minutos";
    //aqui comenzamos a tener de base la variable punchrestmark para realizar la operacion matematica, para restar las horas crando la variable timeDiff, luego hacemos que el resultado solo arroje 2 decimales luego de la coma con .toFixed y muestre en pantalla el tiempo de descanso de la persona con la hora de fin de descanso
  });
  document.getElementById("punchOut").addEventListener("click", function() {
    let punchOut = new Date();
    let punchOutHour = parseInt(punchOut.getHours());
    let punchOutMinutes = parseInt(punchOut.getMinutes());
    let timeDiff = parseInt(punchOut - punchInMark);
    document.getElementById("timePunchOut").innerHTML = "Salida: " + punchOutHour + ":" + punchOutMinutes + "<br>" + "Tiempo de jornada laboral: " + (timeDiff / 1000 / 60/ 60).toFixed(2) + " horas";
    alert("Hasta mañana!");
    // similar al caso de arriba agregandole que en este caso el tiempo no es en minutos, sino en horas, y le agregamos un saludo final
  });



// -------------------------------------------------------------------------------------------------------------------------------------------------------------




