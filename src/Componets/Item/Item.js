import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import './Item.css'  

const Item = ({ product }) => {
    return (
        <div className='card-initial'>
            <Card className='products'>
                <Card.Img className='products__img' variant="top" src={`${process.env.PUBLIC_URL}/images/${product.img}`} />
                <Card.Body className='products__info'>
                    <Card.Title className='font-weight-bold'>{product.name}</Card.Title>
                    <Button variant="outline-success">Ver detalle del Producto</Button>
                    <Card.Text className='card-text'>
                        Stock disponible: {product.stock}
                    </Card.Text>  
                </Card.Body>
            </Card>
        </div>
    )
};

export default Item;