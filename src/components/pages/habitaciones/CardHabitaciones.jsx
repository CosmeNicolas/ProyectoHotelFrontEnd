import { Container, Card, Button, Row, Col  } from "react-bootstrap"
import Room from "../../../assets/relaxRoom.jpg";

const Cardhabitaciones = () => {
  return (
    <>
    <Container >
    <Row className="mt-5">
    <Col xs={6} md={3}>
    <Card className="contenedor-Card" >
      <Card.Img  variant="top" src={Room} />
      <Card.Body className="body-card">
        <Card.Title>Habitacion Premium</Card.Title>
        <Card.Text>
        Una habitación tranquila con una cama grande y comodidades modernas.
        </Card.Text>
        <div className="text-center">
        <Button className="btn-inicio-card" variant="dark">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  )
}

export default Cardhabitaciones



 
