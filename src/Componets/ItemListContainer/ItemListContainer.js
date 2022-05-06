import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { ImSearch } from 'react-icons/im';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getProducts, getProductsByName } from '../../Services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../Notification/Notification';
import './ItemListContainer.css';
import UserContext from '../../context/UserContext';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);
    const { setNotification } = useNotification();

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
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    return (
        <>
            <Row>
                <Col xs={6}>
                    <div className='Filters'>
                        <input className='InputName'
                            type="text"
                            placeholder="Buscar juego por nombre..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' ? searchByName() : false} />
                        <ImSearch onClick={() => searchByName()} />
                    </div>
                </Col>
                <Col xs={6} >
                    {user ? <h4 className='TextUser'> Hola {user.displayName ?? user.email} </h4> : null}
                </Col>
            </Row>
            {loading ? <Loading /> :
                <div>
                    {products.length === 0 ? <h1 className='NoProducts'> No se encontraron productos </h1> : <ItemList products={products} />}
                </div>
            }
        </>

    )
}

export default ItemListContainer;