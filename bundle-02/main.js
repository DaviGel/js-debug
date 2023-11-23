/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//   const myAge = 32;
//   const message = '';

//   if (myAge < 18) {
//     message = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     message = 'Hai più di 18 anni!';
//   }
// }
// checkAge();

// Questa funzione controlla se l'età inserità nella variabile myAge è minore di 18 o no
// Vi è un errore sintattico: message deve essere dichiarato tramite la keyword let in quanto verrà riassegnato nell'if o nell'else
// Non vi sono errori logici

function checkAge() {
  const myAge = 32;
  let message = '';

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = 'Hai più di 18 anni!';
  }
  console.log(message);
}
checkAge();

// ESERCIZIO 2
// function printColorsNumber() {
//   const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//   console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// Questa funzione stampa quanti colori vi sono nella palette dichiarata dentro la variabile colors
// Vi è un errore sintattico: la proprietà che ci restituisce la lunghezza degli array è "length" non "lenght"

function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];
  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// ESERCIZIO 3
// function addNumbers() {
//   const userNumber = prompt('Inserisci un numero');
//   const total = userNumber + 12;

//   console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// Questa funzione aggiunge 12 al numero inserito dall'utente
// Vi è un errore logico poiché il prompt ci restituisce una stringa mentre noi lo vogliamo sommare ad un numero per cui va convertito in number con il metodo Number()

function addNumbers() {
  const userNumber = Number(prompt('Inserisci un numero'));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// ESERCIZIO 4
// function checkAccess() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];
//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = 'false';

//   if (addresses.includes(userEmail)) {
//     grantAccess = 'true';
//   }

//   if (grantAccess === true) {
//     console.log('Accesso consentito!');
//   } else {
//     console.log('Accesso negato!');
//   }
// }
// checkAccess();

// Questa funzione, dichiarato un array con 4 indirizzi e-mail, stampa in console accesso consentito solo se l'e-mail inseria tramite prompt dall'utente è tra quelle presenti nell'array viceversa stampa accesso negato
// Presenta un errore logico in quanto se a grantAccess assegno il valore true o false dentro apici sto passando delle stringhe non dei booleani, mentre nell'if io voglio conforntare grantAccess con i booleani true o false

function checkAccess() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  if (addresses.includes(userEmail)) {
    grantAccess = true;
  }

  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];

//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = 'false';

//   for (let i = 0; i < addresses.length; i++) {
//     const email = addresses[i];

//     if (userEmail.length > 5) {
//       if (email === userEmail) {
//         grantAccess = 'true';
//       }
//     }

//     if (grantAccess) {
//       console.log('Accesso consentito!');
//     } else {
//       console.log('Accesso negato!');
//     }
//   }
// }
// checkAccessImproved();

// Questa funzione dato un array di indirizzi email richiede all'utente di inserire la propria e-mail. Setta la variabile granAccess a false per ogni
// Errori: true e false vanno settati senza gli apici. Va chiusa la parentesi alla prima dell'invocazione della funzione. L'ultimo if va spostato fuori dal for

function checkAccessImproved() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];

  const userEmail = prompt('Inserisci il tuo indirizzo email:');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }
  }
  if (grantAccess) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccessImproved();
