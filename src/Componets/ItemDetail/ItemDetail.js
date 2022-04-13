import { Row, Col, Container, Button } from 'react-bootstrap'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from '../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, year, price, stock, language }) => {
    const { addProduct, getIsProductInCart } = useContext(CartContext)

    const onAdd = (count) => {
        addProduct({ id, name, price, stock }, count)
        // toast.success(`🛒 Producto agregado al carrito exitosamente`, {
        // })
    }

    return (
        <div>
            <Container className="ProductDetail">
                <Row>
                    <Col xs={12} md={6}>
                        <picture className="ContainerImg">
                            <img src={img} alt={name} className="ProductDetailImg" />
                        </picture>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='ProductDetailTitle'>{name}</div>
                        <div className='ProductDetailText'>
                            <div>
                                <b>Precio:</b> $ {price}
                            </div>
                            <div>
                                <b>Categoria:</b> {category.charAt(0).toUpperCase() + category.slice(1)}
                            </div>
                            <div>
                                <b>Año de Publicación:</b> {year}
                            </div>
                            <div>
                                <b>Idioma:</b> {language}
                            </div>
                            <div>
                                <b>Stock disponible:</b> {stock}
                            </div>
                        </div>
                        <div className='DetailCount'>
                            {getIsProductInCart(id) ? <Button as={Link} to='/cart' variant="outline-success">Ver carrito</Button> : <ItemCount stock={stock} initialCount={1} onAdd={onAdd} />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail
