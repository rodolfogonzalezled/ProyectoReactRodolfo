import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AlertConfirmation = ({ message, textOk, textCancel, acceptFn, cancelFn }) => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(true);
        acceptFn();
    }

    const handleHide = () => {
        setShow(true);
        cancelFn();
    }

    return (
        <Modal show={show} backdrop="static" centered>
            <Modal.Body><h5>{message}</h5></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleHide}>
                    {textCancel ? textCancel : 'Cancelar'}
                </Button>
                <Button variant="primary" onClick={handleShow}>
                    {textOk ? textOk : 'Aceptar'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AlertConfirmation