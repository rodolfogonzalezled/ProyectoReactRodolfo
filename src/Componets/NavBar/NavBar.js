import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';
import { BsController } from 'react-icons/bs';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg" className="navBar">
                <Container>
                    <Navbar.Brand href="#home" className="navBar__brand">
                        <BsController className="navBar__logo"/>
                        <div className="navBar__title">
                        <label>GAMES</label>
                        <label>RODO</label>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse className="navBar__end" id="navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#cart">
                                <CartWidget/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;