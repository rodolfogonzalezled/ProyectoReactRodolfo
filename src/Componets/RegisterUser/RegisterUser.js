import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { useNotification } from '../../Notification/Notification';
import { useNavigate } from 'react-router-dom';
import './RegisterUser.css';

const RegisterUser = () => {
    const { registerUser } = useContext(UserContext);
    const { setNotification } = useNotification();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            registerUser(email, password, name, () => navigate('/login'));
        } else {
            setNotification('error', 'Las contraseñas no coinciden');
        }
    }
    return (
        <div className='RegisterContainer'>
            <h1 className="RegisterTitle">Registro de Usuario</h1>
            <Form className='RegisterForm' onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInputName" label="Nombre y Apellido" className="mb-3">
                    <Form.Control type="text" placeholder="Nombre y pellido" value={name} onChange={(e) => setName(e.target.value)} required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputEmail" label="Correo Electrónico" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputPassword" label="Contraseña" className="mb-3">
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputPasswordRepeat" label="Confirmar Contraseña" className="mb-3">
                    <Form.Control type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </FloatingLabel>
                <Button variant="outline-success" type="submit">
                    Registrar
                </Button>
            </Form>
        </div>
    )
}

export default RegisterUser;