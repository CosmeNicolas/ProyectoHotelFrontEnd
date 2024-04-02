import { Container, Row, Col } from "react-bootstrap";
import { BsSnow, BsBinoculars, BsGem, BsPersonArmsUp } from "react-icons/bs";
import banner from "../../assets/Banner-rollingResort1.gif";
const Inicio = () => {
  return (
    <>
      <section className="main ">
        <article className="estilo-principal">
          <img className="img-banner img-fluid w-100" src={banner} alt="" />
          <h2 className="fuente-slogan-principal text-center mt-5 py-2">
            "Tu escape perfecto comienza aquí."
          </h2>
          <h3 className="fuente-slogan-secundario text-center">
            Aventuras, relajación y experiencias únicas te esperan.
          </h3>
          <Container>
            <Row className="iconos-servicios justify-content-center justify-content-md-between mt-5">
              <Col xs={6} md={3} className="text-center">
                <BsGem className="iconos-servicios" />
                <p className="text-center text-icons">Casino</p>
              </Col>
              <Col xs={6} md={3} className="text-center mb-3 mb-md-0">
                <BsBinoculars className="iconos-servicios" />
                <p className="text-center text-icons">Excursiones</p>
              </Col>
              <Col xs={6} md={3} className="text-center">
                <BsPersonArmsUp className="iconos-servicios" />
                <p className="text-center text-icons">Spa</p>
              </Col>
              <Col xs={6} md={3} className="text-center mb-3 mb-md-0">
                <BsSnow className="iconos-servicios" />
                <p className="text-center text-icons">Centro de Ski</p>
              </Col>
            </Row>
          </Container>
        </article>
      </section>
    </>
  );
};

export default Inicio;
