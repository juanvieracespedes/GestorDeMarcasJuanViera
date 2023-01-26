
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

  let marcaIngreso = 8
  let marcaDes = 12
  let marcaFinDes = "12:30"
  let marcaSalida = 16

  //new person = new Object ();

  person.account.logUser = prompt("ingrese nombre de usuario");
  person.account.passUser = prompt("ingrese contraseña");


if (person.account.logUser == "jviera" && person.account.passUser == "1234"){
alert ("Bienvenido" + " " + person.name.first + " " + person.name.last + " ")
}
else {
    alert ("Usuario y contraseña incorrecta")
}

function ingresa(){
    alert("Marcaste tu entrada a las " + marcaIngreso + " , que tengas buena jornada")
}

function desc(){
    alert("Incicio de descanso a las " + marcaDes)
}

function descFin(){
    alert("Terminaste tu descanso a las " + marcaFinDes)
}
function marcar(){
    let myShift = marcaSalida - marcaIngreso
    alert("Trabajaste " + myShift + " horas, que descanses!")
}












