const userName = prompt('Scrivi il tuo nome.');

const userLastName = prompt('Scrivi il tuo cognome.');

const userColor = prompt('Scrivi il tuo colore preferito.');

const userEta = prompt('Scrivi la tua eta.');

const prinText = document.getElementById('my-text');

const pwd =
    `
    ${userName}${userLastName}${userColor}${userEta}
    `;


prinText.innerHTML = pwd.toLowerCase();