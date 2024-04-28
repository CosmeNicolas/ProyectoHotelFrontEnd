import { BsFillGeoAltFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from ".././../assets/logo.jpg";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";

const NavBar = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);




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

  const email = usuarioLogueado.email;
  const sacarResto = email ? email.split("@") : [];
  const nombreUsuario = sacarResto[0];

  return (
    <Navbar
      fixed="top"
      data-bs-theme="dark"
      expand="lg"
      className="barraDeNavegacion"
      expanded={expanded}
      ref={navRef}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" href="/">
          <span>
            <img className="img-nav" src={logo} alt="imagen-prueba" />
          </span>
        </Navbar.Brand>
        <NavLink className="ms-auto" to={("/contacto")}>
          <BsFillGeoAltFill className="icono-ubicacion mx-2 d-lg-none " />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setExpanded(!expanded)}/>
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
            {usuarioLogueado.rol ? (
              <>
                <NavLink
                  className="nav-link fuente-nav"
                  to="/administrador"
                  style={({ isActive }) =>
                    isActive ? estiloActivo : undefined
                  }
                >
                  {nombreUsuario}
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
                to={`/detallereserva/${usuarioLogueado.rol}`}
              >
                <span className="nav-link  reserva-nav p-2">Reserva</span>
              </NavLink>
            ) : (
              <NavLink className="nav-link text-decoration-none" to="/login">
                <span className="nav-link  reserva-nav p-2">Reserva</span>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
