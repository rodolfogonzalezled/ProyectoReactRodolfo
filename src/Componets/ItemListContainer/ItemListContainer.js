import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ImSearch } from 'react-icons/im';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getProducts, getProductsByName } from '../../Services/firebase/firestore';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId)
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            });

        return (() => {
            setSearch('');
            setProducts([]);
        })
    }, [categoryId]);

    const searchByName = () => {
        getProductsByName(search, categoryId)
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <div className='Filters'>
                <input className='InputName'
                    type="text"
                    placeholder="Buscar juego por nombre..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ? searchByName() : false} />
                <ImSearch onClick={() => searchByName()} />
            </div>
            {loading ? <Loading /> :
                <div>
                    {products.length === 0 ? <h1> No se encontraron coincidencias </h1> : <ItemList products={products} />}
                </div>
            }
        </div>
    )
}

export default ItemListContainer;