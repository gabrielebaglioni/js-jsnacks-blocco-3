//creo un array vuoto
//chiedo all'utente dei numeri fino a quando la loro somma non fa 50
const container = []
let somma = 0;
while(somma < 50 ){
   let numeriUtente = Number(prompt("inserisci dei numeri"));
   while(isNaN(numeriUtente)){

   }

   container.push(numeriUtente);
   somma = somma + numeriUtente;
}
console.log(container, somma)
