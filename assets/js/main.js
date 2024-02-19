// - creare le variabili con i valori che l'utente dichiarerà
// - creare due prompt che permettano all'utente di dichiarare l'età ed i chilometri che dovrà percorrere

const user_age = Number(prompt("Inserisci la tua età")); // user age variable

const user_km = Number(prompt("Inserisci quanti chilometri percorrerai")); // user km variable

console.log(user_age, user_km);
/*

- creare le condizioni per il calcolo del prezzo del biglietto con le seguenti regole:
  - se minorenne -> sconto del 20%
  - se over 65 -> sconto del 40%
  - se non rientra in nessuno dei primi casi il prezzo sarà pieno

*/

let total_price = user_km * 0.21; // standard price

if (user_age < 18) {
    
     total_price = total_price / 100 * 80; // 20% discounted price
    

} else if (user_age > 65) {

     total_price = total_price / 100 * 60; // 40% discounted price
    
}

// - creare l'output con le regole sopracitate 

console.log('Il prezzo del tuo biglietto è: ' + total_price.toFixed(2) + ' \u20AC' ); // total price output