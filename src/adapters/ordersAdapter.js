export const createAdaptedOrder = (doc) => {
    const data = doc.data()
    const formattedOrder = {
        id: doc.id,
        date: data.date,
        total: data.total,
        buyer: {
            id: data.buyer.id,
            name: data.buyer.name,
        },
        items: [...data.items]
    }

    return formattedOrder
}