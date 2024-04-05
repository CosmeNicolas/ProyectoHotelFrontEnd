import { Container, Row, Col } from "react-bootstrap";
import { BsSnow, BsBinoculars, BsGem, BsPersonArmsUp } from "react-icons/bs";


const SectionIConosInicio = () => {
  return (
    <>
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
    
    </>
  );
};

export default SectionIConosInicio;