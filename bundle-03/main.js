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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
  {
    manufacturer: 'Ford',
    model: 'Fiesta',
    type: 'diesel',
  },
  {
    manufacturer: 'Audi',
    model: 'A1',
    type: 'benzina',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Golf',
    type: 'Benzina',
  },
  {
    manufacturer: 'Fiat',
    model: 'Panda',
    type: 'metano',
  },
  {
    manufacturer: 'Fiat',
    model: 'Multipla',
    type: 'GPL',
  },
  {
    manufacturer: 'Tesla',
    model: 'Model 3',
    type: 'elettrico',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Polo',
    type: 'benzina',
  },
  {
    manufacturer: 'Ford',
    model: 'Kuga',
    type: 'Diesel',
  },
  {
    manufacturer: 'Seat',
    model: 'Ibiza',
    type: 'metano',
  },
  {
    manufacturer: 'Audi',
    model: 'R8',
    type: 'Benzina',
  },
];

const gasolineCars = cars.filter(
  (cars) => cars.type.toLowerCase() === 'benzina'
);

const dieselCars = cars.filter((cars) => {
  return cars.type.toLowerCase() === 'diesel';
});

const otherCars = cars.filter((cars) => {
  return (
    cars.type.toLowerCase() !== 'benzina' &&
    cars.type.toLowerCase() !== 'diesel'
  );
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// Crea un array di oggetti. In gasolineCars salva le auto a benzina. In dieselCars salva le auto a diesel, in otherCars salva le altre auto. Infine stampa in console le auto a benzina, quelle a diesel e poi tutte le altre
// Errori: manca una virgola nel penultimo oggetto, tutti gli auto vanno sostituiti con carso, nel filter la funzione freccia ha la sintassi ">=" invece di "=>", il return del filter deve essere && non || poiché non voglio né le auto diesel né le auto a benzina, siccome benzina e diesel hanno l'iniziale alle volte minuscola e alle volte maiuscola la convertiamo col metodo toLowerCase() in minuscolo. L'ultimo errore è che il filter salvato nella variabile dieselCars non aveva un return, per cui non ritornava niente
