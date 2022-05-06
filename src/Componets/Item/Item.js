import { Link } from "react-router-dom";
import { Card, Button, Col } from 'react-bootstrap'
import './Item.css'

const Item = ({ id, name, price, img }) => {

    return (
        <Col xs={10} md={4}>
            <div className='CardInitial'>
                <div className='products'>
                    <Card.Img bsPrefix='ProductsImg' src={img} />
                    <Card.Body className='ProductsInfo'>
                        <Card.Title>
                            <h4>{name}</h4>
                            </Card.Title>
                        <Button className="btnItem" as={Link} to={`/item/${id}`} variant="outline-success">Ver detalle del Producto</Button>
                        <Card.Text className='CardText'>
                            <b> Precio: </b> ${price}
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Col>
    )
}

export default Item;