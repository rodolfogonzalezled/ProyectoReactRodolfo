import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import { getProducts } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';

const onAdd = (quantity) => {
    console.log("click en botón Agregar al carrito", quantity);
}

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(result => {
            setProducts(result)
        })
    }, []);
    
    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList products={products}/>
            <ItemCount stock={10} initialCount={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer;