//crea due elementi div html
//i due div dovranno avere due classi diverse
const container = document.querySelector(".container")
const red = document.querySelector(".red")
red.id = "red";
const green = document.querySelector(".green")
green.id = "green";
//creo un array di numeri
const numeri = [1, 2, 3, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < numeri.length; i++){
   //pari green
   if(numeri[i] % 2 === 0){
      red.innerHTML += numeri[i] + " ";
      red.style.color = "red";
   }
   else{
      green.innerHTML += numeri[i] + " ";
      green.style.color = "green";
   }
   

}
console.log(green, red)