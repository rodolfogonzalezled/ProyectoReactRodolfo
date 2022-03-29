const products = [
    {
        id: 1,
        name: 'NBA2K22',
        price: 5000,
        category: 'deportes',
        year: 2022,
        language: 'Español',
        img: 'nba-2k22.jpg',
        stock: 3
    },
    {
        id: 2,
        name: 'FIFA22',
        price: 8000,
        category: 'deportes',
        year: 2022,
        language: 'Español',
        img: 'fifa22.jpg',
        stock: 5
    },
    {
        id: 3,
        name: 'Resident Evil 3',
        price: 5500,
        category: 'accion',
        year: 2021,
        language: 'Inglés',
        img: 'resident-evil-3.jpg',
        stock: 5
    },
    {
        id: 4,
        name: 'Sims 4',
        price: 2000,
        category: 'simulacion',
        year: 2019,
        language: 'Español',
        img: 'sims4.jpg',
        stock: 3
    },
    {
        id: 5,
        name: 'Need for Speed',
        price: 3000,
        category: 'conduccion',
        year: 2021,
        language: 'Español',
        img: 'need-for-speed.jpg',
        stock: 8
    },
    {
        id: 6,
        name: 'Crash Ctr',
        price: 7000,
        category: 'conduccion',
        year: 2020,
        language: 'Español',
        img: 'crash-ctr.jpg',
        stock: 4
    },
    {
        id: 7,
        name: 'Uncharted',
        price: 2500,
        category: 'accion',
        year: 2019,
        language: 'Español',
        img: 'uncharted4.jpg',
        stock: 4
    },
    {
        id: 8,
        name: 'Horizon II',
        price: 10000,
        category: 'accion',
        year: 2020,
        language: 'Inglés',
        img: 'horizon.jpg',
        stock: 4
    },
    {
        id: 9,
        name: 'Far Cry 6',
        price: 10000,
        category: 'accion',
        year: 2022,
        language: 'Español',
        img: 'farcry6.jpg',
        stock: 5
    },
    {
        id: 10,
        name: 'Mortal Kombat 11',
        price: 2500,
        category: 'combate',
        year: 2021,
        language: 'Inglés',
        img: 'mortal-kombat.jpg',
        stock: 5
    },
    {
        id: 11,
        name: 'Spiderman',
        price: 4500,
        category: 'accion',
        year: 2021,
        language: 'Español',
        img: 'spider-man.jpg',
        stock: 7
    },
    {
        id: 12,
        name: 'It Takes Two',
        price: 7000,
        category: 'simulacion',
        year: 2021,
        language: 'Inglés',
        img: 'it-takes-two.jpg',
        stock: 2
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}