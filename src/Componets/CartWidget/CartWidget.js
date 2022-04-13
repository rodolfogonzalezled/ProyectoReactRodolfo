import { TiShoppingCart } from 'react-icons/ti';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './CartWidget.css';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);
    const quantity = getQuantity();

    return (
        <div>
            {quantity ?
                <Link to={'/cart'} className='CartWidget'>
                    <TiShoppingCart />
                    <div bg="danger" className='CartCount'>
                        {quantity}
                    </div>
                </Link>
                : null}
        </div>
    );
}

export default CartWidget