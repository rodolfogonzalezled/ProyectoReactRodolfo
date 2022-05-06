import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <h1 className="ContactTitle">Contacto</h1>

            <Row className="ContactSection">
                <Col xs={6}>
                    <p> Informacion de contacto para Ventas y Soporte: </p>
                    <p> Rodolfo Gonzalez </p>
                    <p> Email: rodogames@gmail.com</p>
                    <p> Telefono: +54 11 55555555 </p>
                </Col>
                <Col xs={6}>
                    <p>Ubicanos en Av. 9 de Julio:</p>
                    <div className="contact__map col-xl-6">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167153866228!2d-58.385797586011456!3d-34.603738827109275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1651801014460!5m2!1ses-419!2sar"
                            width="300" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <p>Tambien puedes encontrarnos en nuestras redes sociales.</p>
                </Col>
            </Row>
        </div >
    )
}

export default Contact;

