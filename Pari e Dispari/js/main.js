'use strict';

// l'utente sceglie PARI o DISPARI
let pariDispari = prompt('scrivi PARI o DISPARI');
console.log('Scelta utente: ', pariDispari);

// l'utente sceglie un numvero da 1 a 5
let numberChoice = prompt('scrivi un numero da 1 a 5');
console.log('Scelta utente: ', numberChoice);


// FUNZIONE GENERAZIONE NUMERO RANDOM 
function GenRandomNum() {

    const randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber;
    
}


// RICHIAMO FUNZIONE GENERAZIONE NUMERO RANDOM 
let cpuNumber = GenRandomNum();
console.log ('scelta cpu: ', cpuNumber);






    
 



