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

// ******************************************************


/*INIZIALIZZO LA VARIABILE PARI/DISPARI CHE DOVRA' ESSERE SCELTA DALL'UTENTE*/
let pariDispari;

/*IMPOSTO CICLO DO-WHILE CHE CONTINA AD ESEGUIRE LA RICHIESTA PARI/DISPARI
 SE L'UTENTE INSERISCE QUALCOSA DI DIVERSO DA PARI E DISPARI*/
do {
pariDispari = prompt('scrivi PARI o DISPARI');
    
} while (pariDispari.toUpperCase() !== 'PARI' &&  pariDispari.toUpperCase() !== 'DISPARI');

console.log('Scelta Pari/Dispari: ', pariDispari);


/*INIZIALIZZO LA VARIABILE USER NUMBER CHE DOVRA' ESSERE SCELTA DALL'UTENTE*/
let userNumber;

/*IMPOSTO CICLO DO-WHILE CHE CONTINUA AD ESEGUIRE LA RICHIESTA DEL NUMERO
FINCHE' L'UTENTE INSERISCE UN NUMERO NON COMPRESO TRA 1 E 5.*/
do {
    userNumber = Number(prompt('scrivi un numero da 1 a 5'));
        
    } while (userNumber < 1 || userNumber > 5);
 
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




