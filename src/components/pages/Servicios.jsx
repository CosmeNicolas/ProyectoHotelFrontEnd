import { Container, Row, Col } from "react-bootstrap";
import casino from "../../assets/casino.jpg";
import excursiones from "../../assets/excursiones.jpeg";
import spa from "../../assets/spa.jpg";
import centroSki from "../../assets/ski.jpeg";

const Servicios = () => {
  return (
    <Container>
      <Row className="justify-content-center m-5">
        <Col md={12} className="text-center">
          <h2 className="servicios-titulo-principal">
            ٠ ࣪⭑ NUESTROS SERVICIOS ٠ ࣪⭑
          </h2>
          <p className="servicios-info">
            Descubre la variedad de servicios que ofrecemos para hacer de tu
            estadía una experiencia inolvidable.
          </p>
        </Col>
      </Row>

      {/* Casino */}
      <Row className="justify-content-center align-items-center servicios-section">
        <Col md={6} className="order-md-2">
          <div className="imagen-fondo">
            <img src={casino} alt="casino" className="img-fluid" />
          </div>
        </Col>
        <Col md={6} className="order-md-1">
          <div className="p-4">
            <h2 className="servicios-titulo">Casino 🃜 🃚</h2>
            <p className="tamaño-letra">
              Disfruta de una experiencia única en nuestro casino, abierto las
              24 horas del día. Contamos con una amplia variedad de juegos para
              tu entretenimiento.
            </p>
            <div className="servicios-info">
              <h4>Juegos Disponibles:</h4>
              <ul className="tamaño-letra">
                <li>Ruleta</li>
                <li>Blackjack</li>
                <li>Tragamonedas</li>
                <li>Póker</li>
              </ul>
              <p className="tamaño-letra">
                <b>Política de Edad:</b> Solo para mayores de 18 años. Se
                requiere identificación oficial para ingresar.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Excursiones */}
      <Row className="justify-content-center align-items-center servicios-section">
        <Col md={6}>
          <div className="imagen-fondo">
            <img src={excursiones} alt="excursiones" className="img-fluid" />
          </div>
        </Col>
        <Col md={6}>
          <div className="p-4">
            <h2 className="servicios-titulo">Excursiones 𓅰</h2>
            <p className="tamaño-letra">
              Descubre la belleza natural de nuestros alrededores con nuestras
              emocionantes excursiones. Ofrecemos una variedad de rutas y
              actividades para todos los niveles de experiencia.
            </p>
            <div className="servicios-info">
              <h4>Actividades Disponibles:</h4>
              <ul className="tamaño-letra">
                <li>Senderismo</li>
                <li>Rafting</li>
                <li>Observación de aves</li>
                <li>Paseos en kayak</li>
              </ul>
              <p className="tamaño-letra">
                <b>Horario:</b> Salidas diarias a las 9:00 a.m. y 2:00 p.m.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Spa */}
      <Row className="justify-content-center align-items-center servicios-section">
        <Col md={6} className="order-md-2">
          <div className="imagen-fondo">
            <img src={spa} alt="spa" className="img-fluid" />
          </div>
        </Col>
        <Col md={6} className="order-md-1">
          <div className="p-4">
            <h2 className="servicios-titulo">Spa ᶻ 𝗓 𐰁 .ᐟ</h2>
            <p className="tamaño-letra">
              Relájate y rejuvenece en nuestro lujoso spa. Disfruta de una
              amplia gama de tratamientos y masajes diseñados para calmar tu
              cuerpo y mente.
            </p>
            <div className="servicios-info">
              <h4>Servicios Disponibles:</h4>
              <ul className="tamaño-letra">
                <li>Masajes</li>
                <li>Tratamientos faciales</li>
                <li>Baños de vapor</li>
                <li>Hidroterapia</li>
              </ul>
              <p className="tamaño-letra">
                <b>Horario:</b> Abierto todos los días de 9:00 a.m. a 7:00 p.m.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Centro de Ski */}
      <Row className="justify-content-center align-items-center servicios-section">
        <Col md={6}>
          <div className="imagen-fondo">
            <img src={centroSki} alt="centro-ski" className="img-fluid" />
          </div>
        </Col>
        <Col md={6}>
          <div className="p-4">
            <h2 className="servicios-titulo">Centro de Ski ☃︎</h2>
            <p className="tamaño-letra">
              Experimenta la emoción del invierno en nuestro centro de ski de
              primer nivel. Ofrecemos pistas para todos los niveles de
              habilidad, desde principiantes hasta expertos.
            </p>
            <div className="servicios-info">
              <h4>Instalaciones Disponibles:</h4>
              <ul className="tamaño-letra">
                <li>Pistas de esquí</li>
                <li>Escuela de esquí</li>
                <li>Alquiler de equipos</li>
                <li>Restaurante alpino</li>
              </ul>
              <p className="tamaño-letra">
                <b>Horario:</b> Abierto de diciembre a marzo, de 9:00 a.m. a
                5:00 p.m.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
