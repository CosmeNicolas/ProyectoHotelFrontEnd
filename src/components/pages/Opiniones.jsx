import { useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";

const Opiniones = () => {
  const [filtroCalificacion, setFiltroCalificacion] = useState(null);

  const opiniones = [
    {
      usuario: "Juan567",
      calificacion: 4,
      opinion:
        "¡Una experiencia maravillosa! El hotel tiene un servicio excelente y las habitaciones son muy cómodas.",
    },
    {
      usuario: "María_Reyes",
      calificacion: 5,
      opinion:
        "El mejor hotel en el que me he hospedado. Definitivamente volveré.",
    },
    {
      usuario: "Nahiara111",
      calificacion: 4,
      opinion:
        "La pasé de maravilla, en la recepción te dan una atención espectacular, igualmente al llegar a la habitación. 100% recomendado.",
    },
    {
      usuario: "Messi_Goat",
      calificacion: 5,
      opinion:
        "Genial para pasar las vacaciones en familia y más con los pequeños. Excelente servicio en mi hotel favorito, nunca me decepcionan.",
    },
    {
      usuario: "Pedrito",
      calificacion: 3,
      opinion: "Buen hotel, pero podría mejorar en algunos aspectos.",
    },
    {
      usuario: "Lauraaa",
      calificacion: 2,
      opinion:
        "No me gustó mucho no tener un enchufe atrás de la cama, más allá de eso, todo bien.",
    },
    {
      usuario: "Ana_Anana",
      calificacion: 1,
      opinion: "Mala experiencia, no lo recomendaría.",
    },
    {
      usuario: "Gustavo97",
      calificacion: 5,
      opinion:
        "Sinceramente es un hotel totalmente confortable, en lo personal fuí solo y la pasé genial, además la comida es deliciosa.",
    },
    {
      usuario: "Emilia☺",
      calificacion: 4,
      opinion: "Muy buen hotel, lo recomiendo para aniversarios!!",
    },
    {
      usuario: "Hernán_malo",
      calificacion: 3,
      opinion:
        "La pasé bien, a pesar del clima que no se puede disfrutar de la misma manera, pero bueno.",
    },
    {
      usuario: "Spinetta",
      calificacion: 5,
      opinion:
        "Solo tengo para decir que este hotel es fabuloso, los precios me parecen bien y la comodidad no te la quita nadie.",
    },
  ];

  const handleFiltrarPorCalificacion = (calificacion) => {
    setFiltroCalificacion(calificacion);
  };

  const opinionesFiltradas = filtroCalificacion
    ? opiniones.filter((opinion) => opinion.calificacion === filtroCalificacion)
    : opiniones;

  return (
    <Container className="opiniones-container mt-4">
      <h3 className="mb-4 opiniones-titulo">
        ⤷ Opiniones de nuestros clientes 💭
      </h3>
      <div className="boton-container">
        <DropdownButton
          id="dropdown-basic-button"
          title="Filtrar opiniones"
          className="boton-filtrar"
          variant=""
        >
          <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(null)}>
            Mostrar Todas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(5)}>
            5 Estrellas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(4)}>
            4 Estrellas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(3)}>
            3 Estrellas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(2)}>
            2 Estrellas
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFiltrarPorCalificacion(1)}>
            1 Estrella
          </Dropdown.Item>
        </DropdownButton>
      </div>
      {opinionesFiltradas.map((opinion, index) => (
        <div key={index} className="opinion">
          <div className="user-info">
            <FaUser className="user-icon" />
            <h4 className="user-nombre mt-2">{opinion.usuario}</h4>
          </div>
          <div className="calificacion mb-2">
            {[...Array(opinion.calificacion)].map((_, index) => (
              <FaStar key={index} color="gold" />
            ))}
          </div>
          <p>{opinion.opinion}</p>
        </div>
      ))}
    </Container>
  );
};

export default Opiniones;
