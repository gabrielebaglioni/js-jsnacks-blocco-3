//creo un array vuoto
//chiedo all'utente dei numeri fino a quando la loro somma non fa 50
 const container = []
 let somma = 0;
 while(somma < 50 ){
    let numeriUtente = Number(prompt("inserisci dei numeri"));
    while(isNaN(numeriUtente)){
      numeriUtente = Number(prompt("UN NUMERO ARABO"))
      // console.log(container, somma)
    }
    somma = somma + numeriUtente;
    if(somma > 50){
        console.log("la somma è maggiore di 50");
       alert("la somma è maggiore di 50")
    }else if(somma < 50){
       container.push(numeriUtente);
    }
    console.log(container, somma)
 }




// const container = []
// let somma = 0;
// do{
//    let numeroUtente = Number(prompt("inserisci un numero"));
//    if(!isNaN(numeroUtente)){
//       somma = somma + numeroUtente;
//       if(somma < 50){
//          container.push(numeroUtente);
//       }
      
//    }
// }
// while(somma < 50){
//    console.log(container);
// }

