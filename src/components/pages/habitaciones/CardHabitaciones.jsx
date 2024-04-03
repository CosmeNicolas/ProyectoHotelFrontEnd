import { Container, Card, Button } from "react-bootstrap"
import Room from "../../../assets/relaxRoom.jpg";

const Cardhabitaciones = () => {
  return (
    <>
    <Container fluid >
    <Card className="contenedor-Card" >
      <Card.Img  variant="top" src={Room} />
      <Card.Body>
        <Card.Title>Habitacion Premium</Card.Title>
        <Card.Text>
        Una habitación tranquila con una cama grande y comodidades modernas.
        </Card.Text>
        <div className="text-end">
        <Button className="btn-inicio-card" variant="dark">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default Cardhabitaciones