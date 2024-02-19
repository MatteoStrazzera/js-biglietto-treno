// - creare le variabili con i valori che l'utente dichiarerà
// - creare due prompt che permettano all'utente di dichiarare l'età ed i chilometri che dovrà percorrere

const user_age = Number(prompt("Inserisci la tua età"));

const user_km = Number(prompt("Inserisci quanti chilometri percorrerai"));

console.log(user_age, user_km);
/*

- creare le condizioni per il calcolo del prezzo del biglietto con le seguenti regole:
  - se minorenne -> sconto del 20%
  - se over 65 -> sconto del 40%
  - se non rientra in nessuno dei primi casi il prezzo sarà pieno

*/

if (user_age < 18) {
    
    let total_price = (user_km * 0.21) / 100 * 80;
    console.log(total_price);

} else if (user_age > 65) {

    let total_price = (user_km * 0.21) / 100 * 60;
    console.log(total_price);

} else {

    let total_price = (user_km * 0.21);
    console.log(total_price);
}




// - creare l'output con le regole sopracitate 