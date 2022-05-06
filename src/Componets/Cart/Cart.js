import { Row, Col, Button } from 'react-bootstrap';
import { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext';
import Loading from '../Loading/Loading';
import { useNotification } from '../../Notification/Notification';
import { createOrderAndUpdateStock } from '../../Services/firebase/firestore';
import './Cart.css';
import UserContext from '../../context/UserContext';

const Cart = () => {
    const { cart, clearCart, total, addItem, removeItem, subTotal } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useNotification();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const createOrder = () => {

        if (user) {
            setLoading(true)

            const objOrder = {
                buyer: {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    phone: '1123456789',
                },
                items: cart,
                total: total()
            }

            createOrderAndUpdateStock(cart, objOrder)
                .then(id => {
                    clearCart()
                    setNotification('success', `La orden se genero correctamente, su codigo de orden es: ${id}`)
                })
                .catch((error) => {
                    if (error && error.name === 'outOfStockError' && error.products.length > 0) {
                        const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                        setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
                    } else {
                        console.log(error)
                    }
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setNotification('otherClass', 'Debe iniciar sesión para finalizar la compra', 'Info');
            navigate('/login')
        }
    }

    if (loading) {
        return <Loading textLoading={'Procesando orden de compra'}></Loading>
    }

    if (cart.length === 0) {
        return (
            <div>
                <h1 className="CartTitle">Carrito de Compras</h1>
                <div className="Cart">
                    <h3 className='CartNoProducts'> Actualmente no pesee productos agregados al carrito </h3>
                </div>
                <div className="CartBtn">
                    <Button as={Link} to='/' variant="outline-success"> Ver Productos </Button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="CartTitle">Carrito de Compras</h1>
            <div className="Cart">
                <div>
                    <Row className="CartContainer">
                        <Col xs={5}>
                            <p> Producto </p>
                        </Col>
                        <Col xs={3} className="CartAddDelete">
                            <p> Cantidad </p>
                        </Col>
                        <Col xs={2} className="CartPrice">
                            <p> Precio Unitario </p>
                        </Col>
                        <Col xs={2} className="CartPrice">
                            <p> Sub-Total </p>
                        </Col>
                    </Row>
                    {cart.map(prod =>
                        <div>
                            <Row className="CartContainer">
                                <Col xs={5}>
                                    <ul>
                                        <li key={prod.name.toString()}>{prod.name}</li>
                                    </ul>
                                </Col>
                                <Col xs={3} className="CartAddDelete">
                                    <div className="CartBtn">
                                        <Button variant="outline-danger" onClick={() => { removeItem(prod.id) }}> ➖ </Button>
                                        <p> {prod.quantity} </p>
                                        <Button variant="outline-success" onClick={() => { addItem(prod.id) }}> ➕ </Button>
                                    </div>
                                </Col>
                                <Col xs={2} className="CartPrice">
                                    <li key={prod.price.toString()}>{prod.price}</li>
                                </Col>
                                <Col xs={2} className="CartPrice">
                                    <li key={prod.id.toString()}>{subTotal(prod.id)}</li>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>
                <Row className="CartPrice">
                    <Col>
                        <b> Total: $ {total()} </b>
                    </Col>
                </Row>
            </div>
            <div className="CartBtn">
                <Button onClick={clearCart} variant="outline-danger"> Vaciar carrito </Button>
                <Button onClick={createOrder} variant="outline-success"> Terminar compra </Button>
            </div>
        </div>
    )
}

export default Cart