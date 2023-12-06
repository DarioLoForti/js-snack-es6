// SNACK 1

// creo array di bici da corsa con proprietà : nome e peso

let racingBike = [

    {
        nome : "Bianchi",
        peso : 1200,
    },

    {
        nome :"Look",
        peso :1050,
    },

    {
        nome :"Pinarello",
        peso :950,
    },

    {
        nome :"Colnago",
        peso :1700,
    },

    {
        nome :"Canyon",
        peso :1450,
    },
]

let bikePesoMinore = racingBike[0];

for (let i = 0; i < racingBike.length; i++) {
    const bikeCorrente = racingBike[i];
    
    if (bikeCorrente.peso < bikePesoMinore.peso) {
        bikePesoMinore = bikeCorrente;
    }
}

const { nome, peso } = bikePesoMinore;

// Stampiamo le informazioni sulla bici con il peso minore
console.log(`La bici più leggera è la ${nome} con un peso di ${peso} grammi.`);


// SNACK 2

// creo array di oggetti di squadre di calcio.

let teams = [

    {
        nome : "Milan",
        punti : 0,
        falli : 0,
    },

    {
        nome : "Inter",
        punti : 0,
        falli : 0,
    },

    {
        nome : "Juventus",
        punti : 0,
        falli : 0,
    },

    {
        nome : "Roma",
        punti : 0,
        falli : 0,
    },

    {
        nome : "Napoli",
        punti : 0,
        falli : 0,
    },
]

// creo ciclo forEach per inserire valore random le proprietà punti e falli

teams.forEach((elem) => {

    elem.punti = parseInt(Math.floor(Math.random() * 100 + 1 ));

    elem.falli = parseInt(Math.floor(Math.random() * 100 + 1 ));
})

console.log(teams);


// creo nuovo array con soltanto nomi delle squadre e falli subiti

let teamsFouls = [];

teams.forEach((elem) => {

    let { nome, falli } = elem;
    teamsFouls.push(nome, falli);

});

console.log(teamsFouls);


// BONUS 1: SNACK 3

// creo arrey di oggetti tramite articoli consegnati nell'esercizio

let modaList = [

    {
        nome : "Poppy",
        type : "tshirt",
        color : "red",
    },

    {
        nome : "Jumping ",
        type : "occhiali ",
        color : "blue",
    },

    {
        nome : "CrissCross",
        type : "scarpe",
        color : "black",
    },

    {
        nome : "Jenny",
        type : "borsa",
        color : "pink",
    },
 
];


// genero lettera dell'alfabeto in modo randomico, aggiungo proprieta ad ogni oggetto e inserisco tutto in un nuovo array  

let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

let newModaList = modaList.map((elem) => {

    let indiceCasuale = Math.floor(Math.random() * alfabeto.length);
    let letteraCasuale = alfabeto[indiceCasuale];

    let obj = {
        nome : elem.nome,
        type : elem.type,
        position: letteraCasuale,
    }

    return obj
})

console.log(newModaList);


// BONUS 2

// mostro a video tutti i risultati dei precedenti snack

// Snack 1

document.getElementById("bike").innerText = `La bici più leggera è la ${nome} con un peso di ${peso} grammi.`;

// Snack 2

document.getElementById("teams").innerText = teamsFouls;

// Bonus1 - Snack 3

const listModa = newModaList.map(item => `<li>${item.nome} - ${item.type} - ${item.position}</li>`).join('');

document.getElementById("moda").innerHTML = `<ul>${listModa}</ul>`;


