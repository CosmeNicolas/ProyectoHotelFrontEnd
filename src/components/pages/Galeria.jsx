import { Container, Row, Col } from 'react-bootstrap';
import habitacion from '../../assets/habitacion.jpeg';
import habitacion2 from '../../assets/habitacion2.jpeg';
import habitacion3 from '../../assets/habitacion3.jpeg';
import livingHabitacion from '../../assets/living-habitacion.jpeg';
import baño from '../../assets/baño.jpeg';
import baño2 from '../../assets/baño2.jpeg';
import cafeteria from '../../assets/cafeteria.jpeg';
import casino from '../../assets/casino.jpeg';
import piscina from '../../assets/piscina.jpeg';
import recepcion from '../../assets/recepcion.jpeg';
import spa from '../../assets/spa.jpeg';
import entradaHotel from '../../assets/entrada-hotel.jpeg';

const Galeria = () => {
    return (
        <Container className='mt-5'>
            <Row className="justify-content-center mt-4 galeria-section m-5">
                <Col md={12} className='text-center'>
                    <h2 className="galeria-titulo-principal">₊⊹ GALERÍA ₊⊹</h2>
                </Col>
            </Row>
            <Row className="justify-content-start mt-4 mb-3 galeria-section">
                <Col md={4}>
                    <h3 className='galeria-subtitulos'>Conoce nuestro hotel .ᐟ</h3>
                </Col>
            </Row>
            <Row className="mt-2 galeria-section">
                <Col md={4} lg={3} sm={4}>
                    <img src={habitacion} alt="habitacion" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={habitacion2} alt="habitacion2" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={habitacion3} alt="habitacion3" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={livingHabitacion} alt="living-habitacion" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={baño} alt="baño" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={baño2} alt="baño2" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={cafeteria} alt="cafeteria" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={casino} alt="casino" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={piscina} alt="piscina" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={recepcion} alt="recepcion" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={spa} alt="spa" className="img-fluid mb-3 galeria-img" />
                </Col>
                <Col md={4} lg={3} sm={4}>
                    <img src={entradaHotel} alt="entrada-hotel" className="img-fluid mb-3 galeria-img" />
                </Col>
            </Row>
        </Container>
    );
};

export default Galeria;
