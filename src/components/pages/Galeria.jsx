import { Container, Row, Col } from "react-bootstrap";
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

  const manejarGusto = (indice) => {
    setImagenesGustadas((prevState) => ({
      ...prevState,
      [indice]: !prevState[indice],
    }));
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
            />
            <div className="icono-corazon" onClick={() => manejarGusto(3)}>
              {imagenesGustadas[3] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img src={baño} alt="baño" className="img-fluid mb-3 galeria-img" />
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
            />
            <div className="icono-corazon" onClick={() => manejarGusto(9)}>
              {imagenesGustadas[9] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={4}>
          <div className="galeria-item">
            <img src={spa} alt="spa" className="img-fluid mb-3 galeria-img" />
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
            />
            <div className="icono-corazon" onClick={() => manejarGusto(11)}>
              {imagenesGustadas[11] ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Galeria;
