'use strict';

/* creare una userWord che corrisponde all'inserimento della parola
 da parte dell'utente (prompt)*/
let userWord = prompt('inserisci la parola');
console.log (userWord);

/* inizializzare una variabile che consideri la lettera singola della
parola inserita, e che gestirò nel ciclo For*/
let singleLetter;

/* creazione di un ciclo For che legga tutta la parola e che consideri
la variabile singleLetter come singola lettera della parola; il ciclo
si completa quando l'indice di posizionamento arriva all'ultima lettera*/
 for (let i = 0; i < userWord.length; i++) {

    singleLetter = userWord [i];
    console.log(singleLetter);
    
 }

 /* inizializzare una variabile che consideri la lettera singola
della stessa parola al contrario, e che gestirò nel ciclo For*/
 let reverseLetter;


/* creazione di un ciclo For che legga tutta la parola al contrario
 e che consideri la variabile reverseLetter come singola lettera 
 della parola; il ciclo si completa quando l'indice di posizionamento
 inverso (i--) arriva alla prima lettera*/
 for (let i = userWord.length - 1; i >= 0; i--) {

    reverseLetter = userWord [i];
    console.log(reverseLetter);
    
 }








