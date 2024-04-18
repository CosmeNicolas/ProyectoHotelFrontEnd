import { Container, Card, Button, Row, Col, ListGroup  } from "react-bootstrap"
import { Link } from "react-router-dom"


const Cardhabitaciones = ({habitaciones}) => {
  return (
    <>
    <Container >
      <h1 className="fuente-slogan-principal text-center">Nuestras Habitaciones</h1>
    <Row className="mt-2 justify-content-between">
      {habitaciones.map((habitacion)=>(

    <Col key={habitacion._id} xs={12} md={6} lg={4}>
    <Card className=" my-1" >
      <Card.Img className='contenedor-Card' variant="top" src={habitacion.imagen} />
      <Card.Body className="body-card">
        <Card.Title>Habitacion {habitacion.tipo}</Card.Title>
        <ListGroup variant="flush">
        
        <ListGroup.Item>Disponible: {habitacion && habitacion.disponible ? '✅' : '❌'}</ListGroup.Item>
       {/*  <ListGroup.Item>Disponible: {habitacion.numero}</ListGroup.Item> */}
        {/* Logica de mostrar solo el dia 
         <ListGroup.Item>Fecha Ingreso: {new Date(habitacion.fechaIngreso).toISOString().split('T')[0]}</ListGroup.Item>
        <ListGroup.Item>Fecha Salida: {new Date(habitacion.fechaSalida).toISOString().split('T')[0]}</ListGroup.Item>  */}
      </ListGroup>
        <div className="text-center">
        {habitacion && habitacion.disponible ? ( <Link className="btn btn-inicio-card mt-3" variant="dark"
        to={`/reserva/${habitacion._id}`}
        >Reservar</Link>) : <Button className="opacity-25 mt-3" variant="dark">No disponible</Button>}
        
        </div>
      </Card.Body>
    </Card>
    </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default Cardhabitaciones



 
