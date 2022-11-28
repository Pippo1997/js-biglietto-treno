// PROBLEMA: calcolare il prezzo totale del viaggio in treno; facendo attenzione all'età del passeggero, km percorsi e alle relative scontistiche applicate in base all'età.

// 1-Permettere all'utente di inserire il numero di km che vuole percorrere 
let km = (prompt(`inserire il numero di km che vuoi percorrere`));


// 2-Permettere all'utente di inserire l'età
let eta = (prompt(`inserire la tua eta`));

// 3-Calcolo il prezzo
let prezzo = 0.21 * km;

let messaggio;
// 3.1- Calcolo lo sconto per minorenni
if(eta<18){
    let sconto = prezzo * 20 /100;
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    messaggio = "il prezzo del biglietto scontato per minore è " + prezzo;
}

// 3.2-Calcolo lo sconto per over
else if(eta>65){
    let sconto = prezzo * 40 /100;
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    messaggio = "il prezzo del biglietto scontato per over è " + prezzo;
}

// 3.3-Calcolo il prezzo pieno
else{
    messaggio = "il prezzo del biglietto intero è " + prezzo;
    prezzo = prezzo.toFixed(2);
}

document.getElementById(`prezzo`).innerHTML = messaggio;
