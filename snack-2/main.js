//faccio inserire all'utente un numero
//verifico che sia un nuemero a tutti gli effetti
const N = Number(prompt("inserisci un numero"));
      while(isNaN(N)){
         N = Number(prompt("INSERISCI UN NUMERO!!!!"))
      }
         //creo un array vuoto per inserirci N array
         let nArray = [];
         //creo un ciclo che ha i.lengght=N come indice per stampare tanti array quanto è il valore di N
         for(let i = 0; i < N; i++){
            // nArray.push([i]);
            const nArray = []
         //agiungo nei miei N array 10 numeri casuli da 1 a 100 
               for(let x = 0; x < 10; x++ ){
                  nArray.push(Math.floor(Math.random() * 100) + 1);  
               }
               console.log(nArray);
         }


