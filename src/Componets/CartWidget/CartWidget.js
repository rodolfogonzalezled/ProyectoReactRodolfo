import { TiShoppingCart } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge'

const CartWidget = () => {
    return (
        <div>
            <TiShoppingCart />
            <Badge bg="danger" pill>0</Badge>
        </div>
    )
}
export default CartWidget