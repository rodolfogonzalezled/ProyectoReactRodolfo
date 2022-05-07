import {
    getDocs,
    getDoc,
    doc,
    collection,
    query,
    where,
    writeBatch,
    documentId,
    addDoc,
    Timestamp
} from 'firebase/firestore'
import { firestoreDb } from './index'
import { createAdaptedProduct } from '../../adapters/productAdapter'
import { createAdaptedCategory } from '../../adapters/categoryAdapter'
import { createAdaptedOrder } from '../../adapters/ordersAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) : collection(firestoreDb, 'products');

        getDocs(collectionRef)
            .then(querySnapshot => {
                const products = querySnapshot.docs.map(doc => {
                    return createAdaptedProduct(doc)
                })
                resolve(products);
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products', id);
        getDoc(docRef)
            .then(doc => {
                if(doc.data()){
                    const product = { id: doc.id, ...doc.data() }
                    resolve(product);
                } else {
                    resolve(null);
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const getProductsByName = (text, categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) : collection(firestoreDb, 'products');
        getDocs(collectionRef)
            .then(querySnapshot => {
                const products = querySnapshot.docs.map(doc => {
                    return createAdaptedProduct(doc)
                })
                resolve(products.filter(el => el.name.toUpperCase().includes(text.toUpperCase())))
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const createOrderAndUpdateStock = (cart, objOrder) => {
    return new Promise((resolve, reject) => {

        const objOrderWithTimestamp = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        const ids = cart.map(prod => prod.id)
        const collectionRef = collection(firestoreDb, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, dataDoc })
                    }
                })
            })
            .then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrderWithTimestamp)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                resolve(id)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(firestoreDb, 'categories')

        getDocs(collectionRef).then(querySnapshot => {
            const categories = querySnapshot.docs.map(doc => {
                return createAdaptedCategory(doc)
            })
            resolve(categories)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getOrders = (idUser) => {
    return new Promise((resolve, reject) => {
        const collectionRef = query(collection(firestoreDb, 'orders'), where('buyer.id', '==', idUser));

        getDocs(collectionRef)
            .then(querySnapshot => {
                const orders = querySnapshot.docs.map(doc => {
                    return createAdaptedOrder(doc)
                })
                resolve(orders);
            })
            .catch(error => {
                reject(error)
            })
    })
}