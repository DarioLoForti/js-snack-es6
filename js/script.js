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
console.log(`La bici più leggera è ${nome} con un peso di ${peso} grammi.`);