import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from ".././../assets/logo.png";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Link, NavLink, useNavigate} from "react-router-dom";

const NavBar = ({usuarioLogueado, setUsuarioLogueado}) => {
  /* console.log(usuarioLogueado, setUsuarioLogueado) */
  const direccionar = useNavigate()
  const logOut = ()=>{
   sessionStorage.removeItem("inicioHotel");
   setUsuarioLogueado('');
   direccionar('/')
  }

  return (
    <Navbar
      fixed="top"
      data-bs-theme="dark"
      expand="lg"
      className="barraDeNavegacion"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" href="/">
          <span>
            <img className="img-nav" src={logo} alt="imagen-prueba" />
          </span>
        </Navbar.Brand>
        <div className="ms-auto">
          <BsFillGeoAltFill className="icono-ubicacion mx-2 d-lg-none " />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link fuente-nav" to="/" href="#home">
              Habitaciones
            </NavLink>
            <NavLink className="nav-link fuente-nav" href="#link">
              Galeria
            </NavLink>
            <NavLink className="nav-link fuente-nav" to="/quienessomos">
              Quienes Somos
            </NavLink>
            <NavLink className="nav-link fuente-nav" href="#link">
              Contacto
            </NavLink>
            {
              usuarioLogueado.length > 0 ? (
                <>
            <NavLink className="nav-link fuente-nav" to="/administrador">
              Administrador
            </NavLink>
            <Link onClick={logOut} variant="link" className="nav-link fuente-nav" to="/login">
            LogOut
            </Link>
          </>
              ):(
            <NavLink className="nav-link fuente-nav" to="/login">
              Login
            </NavLink>
              )
            }
            <Nav.Link >
              <span className="nav-link text-decoration-none reserva-nav p-2">Reserva</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
