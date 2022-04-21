const products = [
    {
        id: 1,
        name: 'NBA2K22',
        price: 5000,
        category: 'deportes',
        year: 2022,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/3002/Eaq9uyUlyLZK8L5xTlsPl0rM.png',
        stock: 3
    },
    {
        id: 2,
        name: 'FIFA22',
        price: 8000,
        category: 'deportes',
        year: 2022,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png',
        stock: 5
    },
    {
        id: 3,
        name: 'Horizon II',
        price: 10000,
        category: 'accion',
        year: 2020,
        language: 'Inglés',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/1dy5w3SNiJnXjP8YvmydCL9X.png',
        stock: 4
    },
    {
        id: 4,
        name: 'Resident Evil 3',
        price: 5500,
        category: 'accion',
        year: 2021,
        language: 'Inglés',
        img: 'https://image.api.playstation.com/vulcan/img/cfn/11307dM-YkrvXIhUj7C-35RG_iIwwftGEOjY-oKon5KdyQbcUayV8NvdYW3oWFPji8FBDR0KmfGmu29AzYoLP_T54BklHbe4.png',
        stock: 5
    },
    {
        id: 5,
        name: 'Need for Speed',
        price: 3000,
        category: 'conduccion',
        year: 2021,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/img/cfn/11307N1Juv68y8uNp4wQSfMgsCkchOdKIxajevhh8K8-4F00hO-gJw_fy9-SYdKSDO8zj1fvwnLYvrbKmMNS-wv0hLIyZM1P.png',
        stock: 8
    },
    {
        id: 6,
        name: 'Far Cry 6',
        price: 10000,
        category: 'accion',
        year: 2022,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202112/0908/ozAJk1gZcF1VlZ6dUR6pL69y.png',
        stock: 5
    },
    {
        id: 7,
        name: 'Uncharted',
        price: 5500,
        category: 'accion',
        year: 2022,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/2000/B3Xbu6aW10scvc4SE7yXA1lZ.png',
        stock: 8
    },
    {
        id: 8,
        name: 'Sims 4',
        price: 2000,
        category: 'simulacion',
        year: 2019,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/img/rnd/202111/3019/oXPtJkwSeNlYon2MqTX9K4sQ.png',
        stock: 3
    },
    {
        id: 9,
        name: 'Crash Ctr',
        price: 7000,
        category: 'conduccion',
        year: 2020,
        language: 'Español',
        img: 'https://image.api.playstation.com/cdn/UP0002/CUSA13795_00/WweeYW23IEBQFaXfn5R7oEKi1sSD34Nu.png',
        stock: 4
    },
    {
        id: 10,
        name: 'Mortal Kombat 11',
        price: 2500,
        category: 'combate',
        year: 2021,
        language: 'Inglés',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/SbTOirUJUZ3oNQG0eGDZAuCr.png',
        stock: 5
    },
    {
        id: 11,
        name: 'Spiderman',
        price: 4500,
        category: 'accion',
        year: 2021,
        language: 'Español',
        img: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png',
        stock: 7
    },
    {
        id: 12,
        name: 'It Takes Two',
        price: 7000,
        category: 'simulacion',
        year: 2021,
        language: 'Inglés',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/7CRynuLSAb0vysSC4TmZy5e4.png',
        stock: 5
    }
];

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categoryId ? resolve(products.filter(prod => prod.category === categoryId)) : resolve(products)
        }, 4000)
    })
}

export const getProductsByName = (text, categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(products.filter(el => el.name.toUpperCase().includes(text.toUpperCase()) && el.category === categoryId))
            } else {
                resolve(products.filter(el => el.name.toUpperCase().includes(text.toUpperCase())))
            }
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}