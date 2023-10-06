// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let nome = prompt('Dimmi il tuo nome');
console.log(nome)

let cognome = prompt('Dimmi il tuo cognome');
console.log(cognome)

let colorePreferito = prompt('Dimmi il tuo colore preferito');
console.log(colorePreferito)

let numero = 21
console.log(numero)

let infoGenerali = ` 
<h2>
${nome} ${cognome} ${colorePreferito} ${numero}
</h2>
`;
console.log(infoGenerali);
document.getElementById('testo').innerHTML = infoGenerali;
console.log(document.getElementById('testo'));