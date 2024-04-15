import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";
import habitacion from "../../assets/habitacion.jpeg";
import habitacion2 from "../../assets/habitacion2.jpeg";
import habitacion3 from "../../assets/habitacion3.jpeg";
import livingHabitacion from "../../assets/living-habitacion.jpeg";
import baño from "../../assets/baño.jpeg";
import baño2 from "../../assets/baño2.jpeg";
import cafeteria from "../../assets/cafeteria.jpeg";
import casino from "../../assets/casino.jpeg";
import piscina from "../../assets/piscina.jpeg";
import recepcion from "../../assets/recepcion.jpeg";
import spa from "../../assets/spa.jpeg";
import entradaHotel from "../../assets/entrada-hotel.jpeg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import React, { useState } from "react";

const Galeria = () => {
  const [imagenesGustadas, setImagenesGustadas] = useState({});
  const [mostrarModal, setMostrarModal] = useState(false);
  const [indiceImagenSeleccionada, setIndiceImagenSeleccionada] = useState(0);

  const manejarGusto = (indice) => {
    setImagenesGustadas((prevState) => ({
      ...prevState,
      [indice]: !prevState[indice],
    }));
  };

  const cerrarModal = () => {
    setMostrarModal(false);
};

const abrirModal = (index) => {
    setIndiceImagenSeleccionada(index);
    setMostrarModal(true);
};

  return (
    <Container className="mt-5">
      <Row className="justify-content-center mt-4 galeria-section m-5">
        <Col md={12} className="text-center">
          <h2 className="galeria-titulo-principal">₊⊹ GALERÍA ₊⊹</h2>
        </Col>
      </Row>
      <Row className="justify-content-start mt-4 mb-3 galeria-section">
        <Col md={4}>
          <h3 className="galeria-subtitulos">Conoce nuestro hotel .ᐟ</h3>
        </Col>
      </Row>
      <Row className="mt-2 galeria-section">
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={habitacion}
              alt="habitacion"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(0)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(0)}>
              {imagenesGustadas[0] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={habitacion2}
              alt="habitacion2"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(1)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(1)}>
              {imagenesGustadas[1] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={habitacion3}
              alt="habitacion3"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(2)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(2)}>
              {imagenesGustadas[2] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={livingHabitacion}
              alt="living-habitacion"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(3)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(3)}>
              {imagenesGustadas[3] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img src={baño} alt="baño" className="img-fluid mb-3 galeria-img" onClick={() => abrirModal(4)}/>
            <div className="icono-corazon" onClick={() => manejarGusto(4)}>
              {imagenesGustadas[4] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={baño2}
              alt="baño2"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(5)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(5)}>
              {imagenesGustadas[5] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={cafeteria}
              alt="cafeteria"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(6)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(6)}>
              {imagenesGustadas[6] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={casino}
              alt="casino"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(7)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(7)}>
              {imagenesGustadas[7] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={piscina}
              alt="piscina"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(8)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(8)}>
              {imagenesGustadas[8] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={recepcion}
              alt="recepcion"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(9)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(9)}>
              {imagenesGustadas[9] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img src={spa} alt="spa" className="img-fluid mb-3 galeria-img" onClick={() => abrirModal(10)}/>
            <div className="icono-corazon" onClick={() => manejarGusto(10)}>
              {imagenesGustadas[10] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img
              src={entradaHotel}
              alt="entrada-hotel"
              className="img-fluid mb-3 galeria-img"
              onClick={() => abrirModal(11)}
            />
            <div className="icono-corazon" onClick={() => manejarGusto(11)}>
              {imagenesGustadas[11] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
      </Row>
      <Modal show={mostrarModal} onHide={cerrarModal} centered>
                <Modal.Body>
                    <Carousel activeIndex={indiceImagenSeleccionada} onSelect={(selectedIndex) => setIndiceImagenSeleccionada(selectedIndex)}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={habitacion}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={habitacion2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={habitacion3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={livingHabitacion}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={baño}
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={baño2}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cafeteria}
                                alt="Seventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={casino}
                                alt="Eighth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={piscina}
                                alt="Ninth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={recepcion}
                                alt="Tenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={spa}
                                alt="Eleventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={entradaHotel}
                                alt="Twelfth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
    </Container>
  );
};

export default Galeria;
