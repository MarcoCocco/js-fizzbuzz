/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli 
di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? 
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo 
fare.
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
programma così come lo faremmo "a mano"

BONUS 1: Crea un container nel DOM , aggiungendo 
(attraverso la funzione append()) un elemento html con il numero o 
la stringa corretta da mostrare.

BONUS 2: Applica stili differenti agli elementi aggiunti al DOM 
nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, 
un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti 
prendere spunto dallo screenshot fornito in consegna. 
*/

//Pseudo Codice:
//- Creo un ciclo impostando alla variabile "i" il valore di 1,
//che termina una volta che il contatore giunge al numero uguale a 100.
//! SE durante il ciclo si arriva ad un numero divisibile sia
//per 3 che per 5, stampa "FizzBuzz".
//? ALTRIMENTI SE durante il ciclo si arriva ad un numero divisibile per 3, al posto
//di quel numero, stampa "Fizz".
//! ALTRIMENTI SE durante il ciclo si arriva ad un numero divisibile per 5,
//al posto di quel numero, stampa "Buzz".
//! ALTRIMENTI stampa il valore di "i".



/* //- Creo un ciclo impostando alla variabile "i" il valore di 1,
//che termini una volta che il contatore giunge al numero uguale a 100
for (let i = 1; i <= 100; i++) {

    //! SE durante il ciclo si arriva ad un numero divisibile sia
    //per 3 che per 5, stampa "FizzBuzz".
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz');

        //? ALTRIMENTI SE durante il ciclo si arriva ad un numero divisibile per 3, al posto
        //di quel numero, stampa "Fizz".    
    } else if (i % 3 === 0) {
        console.log('Buzz');

        //! ALTRIMENTI SE durante il ciclo si arriva ad un numero divisibile per 5,
        //al posto di quel numero, stampa "Buzz".
    } else if (i % 5 === 0) {
        console.log('FizzBuzz');

        //! ALTRIMENTI stampa il valore di "i".  
    } else {
        console.log(i);
    }

} */

let cellsContainerEl = document.getElementById('cells-container');

for (let i = 1; i <= 100; i++) {

    let newDivEl = document.createElement('div');
    cellsContainerEl.append(newDivEl);
    newDivEl.innerHTML = i;

    if (i % 3 === 0 && i % 5 === 0) {
        newDivEl.innerHTML = "FizzBuzz";
    } else if (i % 3 === 0) {
        newDivEl.innerHTML = "Fizz";
    } else if (i % 5 === 0) {
        newDivEl.innerHTML = "Buzz";
    }

}

