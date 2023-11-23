/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//   console.log(i);
// }

// Questo codice stampa i numeri da 0 a 4
// Non sono presenti errori di sintatti
// Vi è un errore logico: nel for la condizione deve essere i < 5 altrimenti il ciclo non eseguirà nessuna stampa

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// Questa funzione, quando invocata, se il paramento num che gli passiamo come argomento è pari, dovrebbe sommarlo a 5 e restituirlo, altrimenti se dispari lo dovrebbe restituire senza alcuna modifica
// Vi è un errore un errore sia logico che sintattico poiché scrivere `num % 2 = 0` è un'assegnazione che non possiamo fare in un if. Usando invece un l'operatore di identicità `===` andiamo a controllare non solo che num sia pari ma anche che num sia effettivamente un numero

function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}

console.log(addIfEven(10));

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// Questa funzione, se invocata, dovrebbe stampare i numeri da 0 a 4
// Presenta 2 errori sintattici: gli operandi del for devono essere separati dal carattere ";" non da ","

function loopToFive() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

loopToFive();

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// Questa funzione dichiara un array di 8 numeri e un array vuoto. Per ogni elemento presente nel primo array se l'elemento è pari dovrebbe inserire l'elemento nel secondo array e infine ritornare restituire il secondo array.
// Sono presenti 3 errori sintattici: dopo l'incremento dell'indice "i" nel for non va inserito il ";", nella condizione non devo fare un'assegnazione ma un confronto per cui non devo utilizzare "=" ma "===", dopo la parentesi che chiude l'if non va inserito il ";".
// Sono presenti 4 errori logici: la condizione if richiede che si controlli numbers in posizione i non semplicemente numbers, devo scorrere per tutta la lunghezza dell'array non fino alla lunghezza - 1, il push non va fatto dell'indice "i" ma del numero in posizione "i" ovvero di "numbers[i]", il return va fatto dopo il for atrimenti restuiremo un array col primo numero pari trovato nel primo array

function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]
