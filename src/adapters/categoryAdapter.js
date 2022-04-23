export const createAdaptedCategory = (doc) => {
    const data = doc.data()

    const formattedCategory = {
        id: doc.id,
        name: data.name,
        order: data.order
    }

    return formattedCategory
}