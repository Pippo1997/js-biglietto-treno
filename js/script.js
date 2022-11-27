// PROBLEMA: calcolare il prezzo totale del viaggio in treno; facendo attenzione all'età del passeggero, km percorsi e alle relative scontistiche applicate in base all'età.

// 1-Permettere all'utente di inserire il numero di km che vuole percorrere e moltiplicarci 0.21 euro
let km = parseInt (prompt(`inserire il numero di km che vuoi percorrere`))
console.log(km *=0.21)

// 2-Permettere all'utente di inserire l'età
let eta = parseInt (prompt(`inserire la tua eta`))

// 3-SE l'età del passeggero è compresa tra 18 e 65
// allora calcolo il prezzo del biglietto e lo stampo in console.log
if (eta>18 , eta<65){
    console.log( km*1)
}

// ALTRIMENTI
// SE è minore di 18 anni 
// allora applico lo sconto del 20% e lo stampo in console.log
if (eta<18){
    console.log( km*0.8)
}

// SE è maggiore di 65 anni
// allora applico lo sconto del 40% e lo stampo in console.log
if (eta>65){
    console.log( km*0.6)
}