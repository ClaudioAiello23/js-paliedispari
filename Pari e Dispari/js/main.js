'use strict';

// l'utente sceglie PARI o DISPARI
let pariDispari = prompt('scrivi PARI o DISPARI');
console.log('Scelta utente: ', pariDispari);

const evenNumber = [2, 4];
const oddNumber = [1, 3, 5];


// l'utente sceglie un numero da 1 a 5
let userNumber = Number (prompt('scrivi un numero da 1 a 5'));
console.log('Scelta utente: ', userNumber);


// FUNZIONE GENERAZIONE NUMERO RANDOM DA 1 A 5
function GenRandomNum() {


    const randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber;
    
}

// RICHIAMO FUNZIONE GENERAZIONE NUMERO RANDOM E LA STAMPO
let cpuNumber = GenRandomNum();
console.log ('scelta cpu: ', cpuNumber);


// SOMMA DEL NUMERO UTENTE + NUMERO RANDOM CPU
let finalNumber = userNumber + cpuNumber;
console.log (finalNumber);








    
 



