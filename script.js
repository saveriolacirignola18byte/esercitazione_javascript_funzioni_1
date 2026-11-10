function playGame(tiri) {

    let Giocatore1 = 0;

    let Giocatore2 = 0;

    for (let i = 0; i < tiri; i++) {

        const giocatore1Roll = Math.floor(Math.random() * 6) + 1;

        const giocatore2Roll = Math.floor(Math.random() * 6) + 1;

        Giocatore1 += giocatore1Roll;

        Giocatore2 += giocatore2Roll;
    }

    if (Giocatore1 > Giocatore2) {

        return `giocatore 1 ha vinto con un punteggio pari a ${Giocatore1}`;

    } else if (Giocatore2 > Giocatore1) {

        return `giocatore 2 ha vinto con un punteggio pari a ${Giocatore2}`;

    } else {

        return `pareggio con un punteggio di ${Giocatore1}`;
    }
}

const tiri = Number(prompt('Tiri effettuati dai giocatori:'));

const result = playGame(tiri);

console.log(result);