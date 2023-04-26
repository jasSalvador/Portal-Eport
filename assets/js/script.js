
//hora actual
let date = new Date(); //obtener datos
let hora = date.getHours() //hrs
let minutos = date.getMinutes() //min
console.log

let horario = document.getElementById("insertTime");
horario.innerText = (`${hora}: ${minutos} hrs`);


//fecha actual
let fechaActual = new Date(); //obtener datos 
console.log(fechaActual)

let dia = fechaActual.getDate(); //dia
console.log(dia)

let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); //mes
console.log(mes)

let anio = fechaActual.getFullYear(); //año
console.log(anio)

console.log(`${dia}-${mes + 1}-${anio}`) //formato 12/4/2023..

let fecha = document.getElementById("insertDate");
fecha.innerText = (`${dia}-${mes}-${anio}`);


//numero aleatorio vuelo
let num = Math.floor((Math.random() * (1000 - 2000)) + 2000);
console.log(num);

let vuelo = document.getElementById("flightNumber");
vuelo.innerText = (num);


//n° aleatorio terminal
let aleatorio = Math.round(Math.random() * 10);
console.log(aleatorio);

let terminal = document.getElementById("terminalNumber");
terminal.innerText = (aleatorio);

alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante plataforma.")