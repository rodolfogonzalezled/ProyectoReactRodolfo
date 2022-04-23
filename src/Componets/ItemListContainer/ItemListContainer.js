import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { ImSearch } from 'react-icons/im';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getProducts, getProductsByName } from '../../Services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../Notification/Notification';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const { setNotification } = useNotification()

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => setNotification('error', 'Hubo un error al cargar los productos'),
        [categoryId],
        null,
        () => {
            setSearch('');
            setProducts([]);
        }
    )

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
                    {products.length === 0 ? <h1 className='NoProducts'> No se encontraron productos </h1> : <ItemList products={products} />}
                </div>
            }
        </div>
    )
}

export default ItemListContainer;