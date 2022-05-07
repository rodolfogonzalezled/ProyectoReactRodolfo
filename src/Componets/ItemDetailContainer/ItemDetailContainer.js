import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from '../Loading/Loading'
import { getProductById } from '../../Services/firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (!product) {
        return(<h1 className='NoProducts'> No se encontraron productos </h1>);
    }

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer