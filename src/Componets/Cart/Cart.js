import { Row, Col, Button } from 'react-bootstrap'
import { useContext } from "react"
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, total, addItem, removeItem, subTotal, endCart } = useContext(CartContext)
    return (
        <div className="Cart">
            <h1 className="CartTitle">Carrito de Compras</h1>

            {cart.length ?
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
                                    <li key={prod.id}>{prod.name}</li>
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
                                <li key={prod.id}>{prod.price}</li>
                            </Col>
                            <Col xs={2} className="CartPrice">
                                <li key={prod.id}>{subTotal(prod.id)}</li>
                            </Col>
                        </Row>
                    </div>
                    )
                }</div> :
                <h1 className='CartNoProducts'> Actualmente no pesee productos agregados al carrito </h1>
            }
            {cart.length ?
                <Row className="CartPrice">
                    <Col>
                        <b> Total: $ {total()} </b>
                    </Col>
                </Row>
                :
                null}

            <div className="CartBtn">
                <Button onClick={clearCart} variant="outline-danger"> Vaciar carrito </Button>
                {cart.length ? <Button onClick={endCart} variant="outline-success"> Terminar compra </Button> : <Button as={Link} to='/' variant="outline-success"> Ver Productos </Button>}
            </div>
        </div>
    )
}

export default Cart