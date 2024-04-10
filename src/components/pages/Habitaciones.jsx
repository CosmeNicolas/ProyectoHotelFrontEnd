import { Button, Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import habitacion1img from "../../assets/habitacion1.jpg";
import living1img from "../../assets/living1.jpg";

const Habitaciones = () => {
  return (
    <>
      <section>
        <Container className="text-center">
          <h2 className="texto-tituloHTop text-center">
            Habitaciones Doble Deluxe
          </h2>
          <p className="texto-textoH text-center mt-5">
            Al entrar en una habitación de lujo, uno es recibido por un ambiente
            de refinamiento y exclusividad. Los materiales de alta calidad y los
            acabados impecables se destacan a primera vista. La cama de la más
            fina calidad, prometiendo una noche de sueño reparador.
          </p>
        </Container>
        <Image
          src={habitacion1img}
          alt="habitacionDeLujo"
          className="img-habitacion mt-3"
          fluid
        />
        <Row className="descripcion-habitacion text-center">
          <Col xs={{ span: 12, order: 2 }} md={6}>
            <Image
              src={living1img}
              alt="habitacionDeLujo"
              fluid
            />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="px-5 py-4"
          >
            <h3>Servicios de lujo</h3>
            <ul>
              <li>
                Servicio personalizado: Atención al cliente excepcional y
                servicios personalizados para satisfacer todas las necesidades
                de los huéspedes.
              </li>
              <li>
                Confort máximo: Colchones de alta calidad, ropa de cama premium
                y una decoración exclusiva que garantizan el máximo confort.
              </li>
              <li>
                Muebles de alta calidad: Toques opulentos y caros, atención a
                los detalles estéticos y arte original en las paredes.
              </li>
            </ul>
            <Link to={"/"}>
              <Button variant="dark" className="btn-habitacion" size="lg">
                RESERVAR
              </Button>
            </Link>
          </Col>
        </Row>

        <hr className="separador-habitacion container"/>
      </section>
    </>
  );
};

export default Habitaciones;
