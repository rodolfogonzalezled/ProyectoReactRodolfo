import { Row, Col, Button } from 'react-bootstrap'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, total, addItem, removeItem, subTotal } = useContext(CartContext)
    return (
        <div className="Cart">
            <h1 className="CartTitle">Carrito de Compras</h1>

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
            )}

            <Row className="CartPrice">
                <Col>
                    <b> Total: $ {total()} </b>
                </Col>
            </Row>

            <div className="CartBtn">
                <Button onClick={clearCart} variant="outline-danger"> Vaciar carrito </Button>
                <Button variant="outline-success"> Confirmar compra </Button>
            </div>
        </div>
    )
}

export default Cart