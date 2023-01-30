
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

  //new person = new Object ();

  person.account.logUser = prompt("ingrese nombre de usuario");
  person.account.passUser = prompt("ingrese contraseña");


if (person.account.logUser == "jviera" && person.account.passUser == "1234"){
alert ("Bienvenido" + " " + person.name.first + " " + person.name.last + " ")
}
else {
    alert ("Usuario y contraseña incorrecta")
}

/*class Usarios {
    constructor(name, age, account) {
        this.name = document.getElementById("name")
        this.age = ParseInt(document.getElementById("age"))
        this.account = document.getElementById("account")
    }

}
*/


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


document.getElementById("punchIn").addEventListener("click", function() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("timePunchIn").innerHTML = time;
  });
  










