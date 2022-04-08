import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col, Container, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.css'

const ItemDetail = (product) => {
    debugger;
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count) => {
        setQuantity(count);

        toast.success(`🛒 Producto agregado al carrito exitosamente`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    if (product) {
        return (
            <div>
                <Container className="ProductDetail">
                    <Row>
                        <Col xs={12} md={6}>
                            <picture className="ContainerImg">
                                <img src={`${process.env.PUBLIC_URL}/images/${product.img}`} alt={product.name} className="ProductDetailImg" />
                            </picture>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='ProductDetailTitle'>{product.name}</div>
                            <div className='ProductDetailText'>
                                <div>
                                    <b>Precio:</b> $ {product.price}
                                </div>
                                <div>
                                    <b>Categoria:</b> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                </div>
                                <div>
                                    <b>Año de Publicación:</b> {product.year}
                                </div>
                                <div>
                                    <b>Idioma:</b> {product.language}
                                </div>
                                <div>
                                    <b>Stock disponible:</b> {product.stock}
                                </div>
                            </div>
                            <div className='DetailCount'>
                                {quantity === 0 ? <ItemCount stock={product.stock} initialCount={1} onAdd={onAdd} /> : <Button as={Link} to='/cart' variant="outline-success">Ver carrito</Button>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ItemDetail
