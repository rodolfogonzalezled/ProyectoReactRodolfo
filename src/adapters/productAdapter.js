export const createAdaptedProduct = (doc) => {
    const data = doc.data()

    const formattedProduct = {
        id: doc.id,
        name: data.name,
        price: data.price,
        category: data.category,
        year: data.year,
        language: data.language,
        img: data.img,
        stock: data.stock
    }

    return formattedProduct
}