import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '.././../assets/logo-sinmarco.png'
import { BsFillGeoAltFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <Navbar fixed="top"  data-bs-theme="dark"  expand="lg" className="barraDeNavegacion">
    <Container>
      <Navbar.Brand href="#home"><span><img className='img-nav' src={logo} alt="imagen-prueba" /></span></Navbar.Brand>
      <BsFillGeoAltFill className='icono-ubicacion' />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='fuente-nav' href="#home">Habitaciones</Nav.Link>
          <Nav.Link className='fuente-nav' href="#link">Galeria</Nav.Link>
          <Nav.Link className='fuente-nav' href="#link">Quienes Somos</Nav.Link>
          <Nav.Link className='fuente-nav' href="#link">Contacto</Nav.Link>
          <Nav.Link className='fuente-nav' href="#link">Login</Nav.Link>
          <Nav.Link href="#link"><span className='reserva-nav p-2'>Reserva</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar