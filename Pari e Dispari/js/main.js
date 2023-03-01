'use strict';

/*
*****************************************************
FUNCTIONS JS
******************************************************
*/

// FUNZIONE A: GENERAZIONE NUMERO RANDOM DA 1 A 5
function genRandomNum() {

    const randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber;
    
}

// FUNZIONE B: STABILIRE CHE UN NUMERO è PARI
function resultEven(num) {
   
    let result = (num % 2 === 0);
    return result;

}

// ************************************************************



// L'UTENTE SCEGLIE PARI O DISPARI (PROMPT)
let pariDispari = prompt('scrivi PARI o DISPARI');
console.log('Scelta Pari/Dispari: ', pariDispari);


// CREAZIONE ARRAY PARI E DISPARI
const evenArray = [2, 4];
const oddArray = [1, 3, 5];


// L'UTENTE SCEGLIE UN NUMERO DA 1 A 5 (PROMPT)
let userNumber = Number (prompt('scrivi un numero da 1 a 5'));
console.log('Scelta Numero Utente: ', userNumber);


// RICHIAMO FUNZIONE A: GENERA NUMERO RANDOM DA 1 A 5
let cpuNumber = genRandomNum();
console.log ('Scelta cpu: ', cpuNumber);


// SOMMA DEL NUMERO UTENTE + NUMERO RANDOM CPU
let finalNumber = userNumber + cpuNumber;
console.log ('Somma Numeri: ', finalNumber);


// CONFRONTO FINALE - RICHIAMO FUNZIONE B - CHI VINCE TRA PARI E DISPARI
if (finalNumber = resultEven(finalNumber)) {

    console.log('HA VINTO PARI');
    
} else{
    console.log('HA VINTO DISPARI');
    

}




    
 



