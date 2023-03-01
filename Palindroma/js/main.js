'use strict';

/* creare una userWord che corrisponde all'inserimento della parola
 da parte dell'utente (prompt)*/
let userWord = prompt('inserisci la parola');
console.log (userWord);

/* inizializzare una variabile che consideri la lettera singola
e che gestirò nel ciclo For*/
let singleLetter;

/* creazione di un ciclo For che legga tutta la parola e che consideri
la variabile singleLetter come singola lettera della parola; il ciclo
si completa quando l'indice di posizionamento arriva all'ultima lettera*/
 for (let i = 0; i < userWord.length; i++) {

    singleLetter = userWord [i];
    console.log(singleLetter);
    
 }






