import { useContext, useEffect, useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import './Orders.css';
import UserContext from '../../context/UserContext';
import Loading from '../Loading/Loading';
import { getOrders } from '../../Services/firebase/firestore';

const Orders = () => {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        setLoading(true)
        if (user) {
            getOrders(user.uid)
                .then(orders => setOrders(orders))
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
    }, [user])

    if (loading) {
        return (<Loading />);
    }

    return (
        <div>
            <h1 className="OrderTitle">Mis Compras</h1>
            {orders.map(order =>
                <Card className="OrderContainer">
                    <Card.Header>
                        <h4 className='DetailOrderTittle'><b>Detalle de la compra</b></h4>
                        <div className='OrderDetail'>
                            <h6><b>Orden de compra #</b> {order.id}</h6>
                            <h6><b>Comprado el día: </b>{new Date(order.date.seconds * 1000).toLocaleDateString("en-US")}</h6>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            {order.items.map(item =>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={2}>
                                            <img src={item.img} alt={item.img} className="ItemImg" />
                                        </Col>
                                        <Col xs={4}>
                                            <h6>{item.name}</h6>
                                        </Col>
                                        <Col xs={3} >
                                            <h6>{item.quantity} {item.quantity > 1 ? 'Unidades' : 'Unidad'}</h6>
                                        </Col>
                                        <Col xs={3}>
                                            <h6>$ {item.price} C/U</h6>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <h6><b>Monto total de la compra: </b> ${order.total}</h6>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            )}

        </div>
    )
}

export default Orders;