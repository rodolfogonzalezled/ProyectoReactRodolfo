import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getProductsByCategory, getProducts, getProductsByName } from '../../asyncmock';
import { ImSearch } from 'react-icons/im';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then(result => {
                    setProducts(result);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            getProducts()
                .then(result => {
                    setProducts(result);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        }

        return (() => {
            setSearch('');
            setProducts([]);
        })
    }, [categoryId]);

    useEffect(() => {
        setLoading(true)
        getProductsByName(search, categoryId)
            .then(result => {
                console.log(result)
                setProducts(result)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })

        return (() => {
            setProducts([]);
        })
    }, [search]);

    return (
        <div>
            <div className='Filters'>
                <input className='InputName' type="text" placeholder="Buscar juego por nombre..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <ImSearch/>
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