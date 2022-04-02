import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
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