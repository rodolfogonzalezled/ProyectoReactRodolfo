import {
    getDocs,
    getDoc,
    doc,
    collection,
    query,
    where,
} from 'firebase/firestore'
import { firestoreDb } from './index'
import { createAdaptedProduct } from '../../adapters/productAdapter'

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
                const product = { id: doc.id, ...doc.data() }
                resolve(product);
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