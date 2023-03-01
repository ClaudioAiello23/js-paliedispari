'use strict';

// l'utente sceglie PARI o DISPARI
let pariDispari = prompt('scrivi PARI o DISPARI');
console.log('Scelta Pari/Dispari: ', pariDispari);

const evenArray = [2, 4];
const oddArray = [1, 3, 5];


// l'utente sceglie un numero da 1 a 5
let userNumber = Number (prompt('scrivi un numero da 1 a 5'));
console.log('Scelta Numero Utente: ', userNumber);


// FUNZIONE GENERAZIONE NUMERO RANDOM DA 1 A 5
function genRandomNum() {

    const randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber;
    
}

// RICHIAMO FUNZIONE GENERAZIONE NUMERO RANDOM E LA STAMPO
let cpuNumber = genRandomNum();
console.log ('Scelta cpu: ', cpuNumber);


// SOMMA DEL NUMERO UTENTE + NUMERO RANDOM CPU
let finalNumber = userNumber + cpuNumber;
console.log ('Somma Numeri: ', finalNumber);


// FUNZIONE CHE STABILISCE SE UN NUMERO è PARI
function resultEven(num) {
   
    let result = (num % 2 === 0);
    return result;

}

// C0NFRONTO FINALE - RICHIAMO FIUNZIONE - CHI VINCE TRA PARI E DISPARI
if (finalNumber = resultEven(finalNumber)) {

    console.log('HA VINTO PARI');
    
} else{
    console.log('HA VINTO DISPARI');
    

}




    
 



