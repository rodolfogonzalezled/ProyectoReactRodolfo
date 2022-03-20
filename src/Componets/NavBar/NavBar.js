import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';
import { BsController } from 'react-icons/bs';

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg" className="navBar">
                <Container>
                    <Navbar.Brand href="#home">
                        <BsController className="navBar__logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse className="navBar__end" id="navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#cart">Carrito</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;