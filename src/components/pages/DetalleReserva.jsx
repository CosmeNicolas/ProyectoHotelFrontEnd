import { Container,  Card , ListGroup } from 'react-bootstrap'
import imagen from '../../../src/assets/entrada-hotel.jpeg'

const DetalleReserva = () => {
  return (
    
      <Container className='main'>
        <div className='mt-5 pt-2'>
          <h1 className='text-center fuente-login '>Tu Reserva🛎️</h1>
        </div>
        <section className='d-flex py-3  justify-content-center'>
          <article className=''>
          <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </article>
          
        </section>
      </Container>
    
  )
}

export default DetalleReserva
