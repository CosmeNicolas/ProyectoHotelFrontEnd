import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoTest from '.././../assets/test-logo.png'
import { ImLocation2 } from "react-icons/im";

const NavBar = () => {
  return (
    <Navbar  data-bs-theme="light"  expand="lg" className="barraDeNavegacion">
    <Container>
      <Navbar.Brand href="#home"><span><img className='img-nav' src={logoTest} alt="imagen-prueba" /></span></Navbar.Brand>
      <ImLocation2 className='icono-ubicacion' />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">contact</Nav.Link>
          <Nav.Link href="#link">about us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar