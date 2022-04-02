import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then(prod => {
                setProduct(prod)
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

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer