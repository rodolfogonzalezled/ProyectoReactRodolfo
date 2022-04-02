import { TiShoppingCart } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge'
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='Cart'>
            <TiShoppingCart />
            <Badge bg="danger" pill>0</Badge>
        </div>
    )
}
export default CartWidget;