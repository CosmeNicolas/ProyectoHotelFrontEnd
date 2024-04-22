import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from ".././../assets/logo.jpg";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavBar = ({ usuarioLogueado, setUsuarioLogueado }) => {
  let estiloActivo = {
    textDecoration: "underline",
    fontWeigth: "bold",
  };

  const direccionar = useNavigate();
  const logOut = () => {
    Swal.fire({
      title: `Hasta Pronto!👑`,
      icon: "success",
      confirmButtonColor: "#B79B63",
      customClass: {
        popup: "contenedor-sweet",
      },
    });
    sessionStorage.removeItem("inicioHotel");
    setUsuarioLogueado({});
    direccionar("/");
  };

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
            <NavLink
              className="nav-link fuente-nav"
              to="/"
              style={({ isActive }) => (isActive ? estiloActivo : undefined)}
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link fuente-nav"
              to="/habitaciones"
              style={({ isActive }) => (isActive ? estiloActivo : undefined)}
            >
              Habitaciones
            </NavLink>
            <NavLink
              className="nav-link fuente-nav"
              to="/galeria"
              style={({ isActive }) => (isActive ? estiloActivo : undefined)}
            >
              Galeria
            </NavLink>
            <NavLink
              className="nav-link fuente-nav"
              to="/quienessomos"
              style={({ isActive }) => (isActive ? estiloActivo : undefined)}
            >
              Quienes Somos
            </NavLink>

            <NavLink
              className="nav-link fuente-nav"
              to="/contacto"
              style={({ isActive }) => (isActive ? estiloActivo : undefined)}
            >
              Contacto
            </NavLink>
            {/* admin y usuario */}
            {usuarioLogueado.rol === "Administrador" ||
            usuarioLogueado.rol === "Usuario" ? (
              <>
                <NavLink
                  className="nav-link fuente-nav"
                  to="/administrador"
                  style={({ isActive }) =>
                    isActive ? estiloActivo : undefined
                  }
                >
                  {usuarioLogueado.rol}
                </NavLink>
                <Link
                  onClick={logOut}
                  variant="link"
                  className="nav-link fuente-nav"
                  to="/login"
                >
                  LogOut
                </Link>
              </>
            ) : (
              <NavLink
                className="nav-link fuente-nav"
                to="/login"
                style={({ isActive }) => (isActive ? estiloActivo : undefined)}
              >
                Login
              </NavLink>
            )}
            {usuarioLogueado.rol ? (
              <NavLink
                className="nav-link text-decoration-none"
                to="/habitaciones"
              >
                <span className="nav-link  reserva-nav p-2">Reserva</span>
              </NavLink>
            ) : (
              <NavBrand className="nav-link text-decoration-none" as={Link} to="/" href="/">
                <span className="nav-link  reserva-nav py-2 px-3" >Reserva</span>
              </NavBrand>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
