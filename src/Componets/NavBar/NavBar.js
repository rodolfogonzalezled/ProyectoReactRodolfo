import { Link, NavLink } from "react-router-dom";
import { BsController } from 'react-icons/bs';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg" className="NavBar">
                <Container>
                    <Link to='/' className="text-decoration-none">
                        <div className="NavBarBrand ActiveOption">
                            <BsController className="Logo" />
                            <div className="NavBarTitle">
                                <label>GAMES</label>
                                <label>RODO</label>
                            </div>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse className="NavBarEnd" id="navbar-nav">
                        <Nav>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown" className="p-0">
                                <NavDropdown.Item as={Link} to='/category/accion'> Acción </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/category/combate'> Combate </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/category/conduccion'> Conducción </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/category/deportes'> Deportes </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/category/simulacion'> Simulación </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to='/'> Mostrar Todos </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to='/login' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Login </Nav.Link>
                            <Nav.Link as={NavLink} to='/contact' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Contacto </Nav.Link>
                            <Nav.Link as={NavLink} to='/Cart' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Carrito </Nav.Link>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;