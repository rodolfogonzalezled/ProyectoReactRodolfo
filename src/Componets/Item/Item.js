import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import './Item.css'

const Item = ({ product }) => {
    return (
        <div className='CardInitial'>
            <Card className='products'>
                <Card.Img bsPrefix='ProductsImg' src={`${process.env.PUBLIC_URL}/images/${product.img}`} />
                <Card.Body className='ProductsInfo'>
                    <Card.Title className='font-weight-bold'>{product.name}</Card.Title>
                    <Button as={Link} to={`/item/${product.id}`} variant="outline-success">Ver detalle del Producto</Button>
                    <Card.Text className='CardText'>
                        Stock disponible: {product.stock}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Item;