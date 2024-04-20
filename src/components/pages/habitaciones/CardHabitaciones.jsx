import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cardhabitaciones = ({ habitaciones }) => {
  


  return (
    <>
      <Container>
        <h1 className="fuente-slogan-principal text-center">
          Nuestras Habitaciones
        </h1>
        <Row className="mt-2 justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
          {habitaciones.map((habitacion) => (
            <Card
              key={habitacion._id}
              className=" my-1 cardDimensiones cardEfectos mb-3 px-0"
            >
              <Card.Img
                className="img-fluid cardImgDimensiones imgDetalle"
                variant="top"
                src={habitacion.imagen}
              />
              <Card.Body className="body-card">
                <Card.Title>
                  Habitacion {habitacion.tipo} <br></br>
                  <span className="icono-instagram">N°{habitacion.numero}</span>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Disponible:{" "}
                    {habitacion && habitacion.disponible ? "✅" : "❌"}
                  </ListGroup.Item>
                  {/*  <ListGroup.Item>Disponible: {habitacion.numero}</ListGroup.Item> */}
                  {/* Logica de mostrar solo el dia 
         <ListGroup.Item>Fecha Ingreso: {new Date(habitacion.fechaIngreso).toISOString().split('T')[0]}</ListGroup.Item>
        <ListGroup.Item>Fecha Salida: {new Date(habitacion.fechaSalida).toISOString().split('T')[0]}</ListGroup.Item>  */}
                </ListGroup>
                <div className="text-center">
                  {habitacion && habitacion.disponible ? (
                    <Link
                      className="btn btn-inicio-card mt-3 border-0"
                      variant="dark"
                      to={`/reserva/${habitacion._id}`}
                    >
                      Reservar
                    </Link>
                  ) : (
                    <Button className="opacity-25 mt-3 border-0" variant="dark">
                      No disponible
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cardhabitaciones;
