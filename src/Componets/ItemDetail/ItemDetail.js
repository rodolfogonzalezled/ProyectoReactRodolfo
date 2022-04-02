import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col, Container } from 'react-bootstrap'
import './ItemDetail.css'


const onAdd = (quantity) => {
    <div>
        {
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
    </div>
}

const ItemDetail = (product) => {
    console.log('producto: ', product)

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
                                <ItemCount stock={product.stock} initialCount={1} onAdd={onAdd} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ItemDetail
