import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logoRollingHotel from "../../assets/logo.jpg";
import logoTripAdvisor from "../../assets/tripAdvisor.jpg";
import logoTravellerChoice from "../../assets/travellerChoice.png";

const Footer = () => {
  return (
    <footer className="footer-fondo text-light px-4">
      <div className="container">
        <section className="row align-items-center">
          <div className="col-lg-3 mt-3 text-center text-lg-start">
            <img
              src={logoRollingHotel}
              alt="logo de rolling hotel"
              className="img-fluid"
              width={140}
            />
          </div>
          <div className="col-lg-6 mt-3 d-flex justify-content-center align-items-center">
            <Link
              to="https://www.instagram.com/rollinghotelresort/"
              className="icono-link me-lg-3"
            >
              <FaInstagram className="icono-instagram" />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61558871812484"
              className="icono-link me-lg-3"
            >
              <FaFacebook className="icono-facebook" />
            </Link>
            <Link to="https://twitter.com/RollingHotelR" className="icono-link">
              <FaTwitter className="icono-twitter" />
            </Link>
          </div>
          <div className="col-lg-3 mt-3 d-flex justify-content-center justify-content-lg-end">
            <img
              src={logoTripAdvisor}
              alt="logo de trip advisor"
              className="logo-trip-advisor img-fluid me-lg-3 mx-2"
              width={120}
            />
            <img
              src={logoTravellerChoice}
              alt="logo de traveller's choice 2024"
              className="logo-trip-advisor img-fluid mx-2"
              width={100}
            />
          </div>
        </section>
        <section className="container mt-3">
          <div className="row  mb-4">
            <div className="col text-center">
              <Link
                to="/habitaciones"
                className="footer-link text-decoration-none me-2 fs-5"
              >
                Habitaciones |
              </Link>
              <Link
                to="/galeria"
                className="footer-link text-decoration-none me-2 fs-5"
              >
                Galería |
              </Link>
              <Link
                to="/QuienesSomos"
                className="footer-link text-decoration-none me-2 fs-5"
              >
                Quiénes somos |
              </Link>
              <Link
                to="/contacto"
                className="footer-link text-decoration-none me-2 fs-5"
              >
                Contacto |
              </Link>
              <Link
                to="/servicios"
                className="footer-link text-decoration-none me-2 fs-5"
              >
                Servicios |
              </Link>
              <Link
                to="/error404"
                className="footer-link text-decoration-none fs-5"
              >
                Promociones
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
