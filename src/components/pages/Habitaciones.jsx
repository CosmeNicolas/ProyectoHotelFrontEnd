import { Button, Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import living1img from "../../assets/living1.jpg";
import habitacion1img from "../../assets/habitacion1.jpg";
import habitacion3img from "../../assets/habitacion3.jpg";
import habitacion4img from "../../assets/habitacion4.jpg";
import habitacion5img from "../../assets/habitacion5.jpg";
import habitacion6img from "../../assets/habitacion6.jpeg";
import habitacion7img from "../../assets/habitacion7.jpg";
import banio1img from "../../assets/banio1.jpeg";


const Habitaciones = () => {
 

  return (
    <>
      <section>
        <Container className="text-center">
          <h2 className="texto-tituloHTop text-center">
            Habitaciones Suite
          </h2>
          <p className="texto-textoH text-center mt-5">
            Al entrar en una habitación de lujo, uno es recibido por un ambiente
            de refinamiento y exclusividad. Los materiales de alta calidad y los
            acabados impecables se destacan a primera vista. Es el alojamiento más lujosos y cómodos que se pueden encontrar en  nuestro hotel.
          </p>
        </Container>
        <Image
          src={habitacion1img}
          alt="habitacionDeLujo"
          className="img-habitacion mt-3"
          fluid
        />
        <Row className="descripcion-habitacion g-0 text-center">
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
            <h3>Servicios Suite</h3>
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
              <li>
              Vistas panorámicas: Una buena vista a la montaña es esencial en una habitación suite
              </li>
              <li>
              Servicios adicionales, como una bañera de hidromasaje, minibar surtido o acceso a servicios de habitación más exclusivos.
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

        <Container className="text-center">
          <h2 className="texto-tituloHTop text-center">
            Habitaciones Doble superior
          </h2>
          <p className="texto-textoH text-center mt-5">
          Las habitaciones dobles superiores para dos personas, son más grandes que las habitaciones estándar. Esto proporciona un ambiente más espacioso y cómodo para los huéspedes.
          </p>
        </Container>
        <Image
          src={habitacion3img}
          alt="habitacionDeLujo"
          className="img-habitacion mt-3"
          fluid
        />
        <Row className="descripcion-habitacion g-0 text-center">
          <Col xs={{ span: 12, order: 2 }} md={6}>
            <Image
              src={habitacion4img}
              alt="habitacionDeLujo"
              fluid
            />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="px-5 py-4"
          >
            <h3>Servicios de Habitaciones Dobles</h3>
            <ul>
              <li>
              La decoración en las habitaciones dobles superiores es elegante y sofisticada. Los detalles cuidadosamente seleccionados crean un ambiente acogedor y lujoso.
              </li>
              <li>
                Confort máximo: Colchones de alta calidad, ropa de cama premium
                y una decoración exclusiva que garantizan el máximo confort.
              </li>
              <li>
              Las habitaciones dobles superiores a menudo ofrecen vistas panorámicas o más agradables. Puedes disfrutar de la ciudad, el mar o el paisaje circundante desde la comodidad de tu habitación
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
        <Container className="text-center">
          <h2 className="texto-tituloHTop text-center">
            Habitaciones Triple superior
          </h2>
          <p className="texto-textoH text-center mt-5">
          La habitación triple puede tener tres camas individuales, lo que permite que cada huésped tenga su propio espacio para dormir. o bien, una cama doble y una individual. Esto es ideal para grupos de amigos o familias.
          </p>
        </Container>
        <Image
          src={habitacion5img}
          alt="habitacionDeLujo"
          className="img-habitacion mt-3"
          fluid
        />
        <Row className="descripcion-habitacion g-0 text-center">
          <Col xs={{ span: 12, order: 2 }} md={6}>
            <Image
              src={habitacion6img}
              alt="habitacionDeLujo"
              fluid
            />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="px-5 py-4"
          >
            <h3>Servicios de Habitacion Triple Superior</h3>
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
                Configuracion a gusto del huesped con camas simples o dobles segun necesidad
              </li>
              <li>
                Espacio amplio con sillones para una estadia mas placentera, dando privacidad a cada uno de ellos.
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

        <Container className="text-center">
          <h2 className="texto-tituloHTop text-center">
            Habitaciones Dobles Twin
          </h2>
          <p className="texto-textoH text-center mt-5">
            Al entrar en una habitación de lujo, uno es recibido por un ambiente
            de refinamiento y exclusividad. Los materiales de alta calidad y los
            acabados impecables se destacan a primera vista. La cama de la más
            fina calidad, prometiendo una noche de sueño reparador.
          </p>
        </Container>
        <Image
          src={habitacion7img}
          alt="habitacionDeLujo"
          className="img-habitacion mt-3"
          fluid
        />
        <Row className="descripcion-habitacion g-0 text-center">
          <Col xs={{ span: 12, order: 2 }} md={6}>
            <Image
              src={banio1img}
              alt="habitacionDeLujo"
              fluid
            />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="px-5 py-4"
          >
            <h3>Servicios Habitaciones Individuales</h3>
            <ul>
              <li>
              Las habitaciones individuales de lujo ofrecen un espacio generoso. La disposición del mobiliario y la decoración están cuidadosamente pensadas para crear un ambiente acogedor y sofisticado
              </li>
              <li>
              Cama de alta calidad: La cama es el corazón de cualquier habitación de hotel. En las habitaciones individuales de lujo, puedes esperar una cama mas amplia de lo normal y cómoda con sábanas suaves y almohadas mullidas.
              </li>
              <li>
              Tecnología de vanguardia: TV de pantalla plana hasta acceso a Internet de alta velocidad, estas habitaciones están equipadas con las últimas comodidades tecnológicas.
              </li>
            </ul>
            <Link to={"/"}>
              <Button variant="dark" className="btn-habitacion" size="lg">
                RESERVAR
              </Button>
            </Link>
          </Col>
        </Row>

      </section>
    </>
  );
};

export default Habitaciones;
