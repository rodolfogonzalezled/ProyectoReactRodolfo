import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(UserContext);
    let navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        loginUser(email, password, () => navigate('/'));
    }

    return (
        <div className='LoginContainer'>
            <h1 className="LoginTitle">Inicio de sesión</h1>
            <Form className='LoginForm' onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInputEmail" label="Correo Electrónico" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputPassword" label="Contraseña" className="mb-3">
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FloatingLabel>

                <div className="LoginBtn">
                    <Button variant="outline-success" type="submit">
                        Iniciar sesión
                    </Button>

                    <Button as={Link} to='/registerUser' variant="outline-success"> Registrar usuario </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login;