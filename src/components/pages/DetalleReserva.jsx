import { Container,  Card , ListGroup } from 'react-bootstrap'
import { obtenerHabitacion } from '../../helpers/queriesHabitacion'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const DetalleReserva = () => {
  const {id} = useParams() 
  const [reserva, setReserva] = useState({})
  console.log(id)
  console.log(reserva)

  useEffect(() => {
   mostrarReserva()
  }, [])

  const mostrarReserva = async ()=>{
  const respuesta = await obtenerHabitacion(id)
  if(respuesta.status === 200){
    const obtenerReserva = await respuesta.json()
    console.log(obtenerReserva)
    setReserva(obtenerReserva)
  } 
 }

  return (
      <section className='main fondo-formulario-Reserva '>
        <div className='mt-5 pt-2 '>
          <h1 className='text-center tituloReservaCard text-light '>Tu Reserva🛎️</h1>
        </div>
        <section className='d-flex py-3  justify-content-center  '>
          <article className=''>
          <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={reserva.imagen}  />
      <Card.Body>
        <Card.Title>{reserva.tipo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Reserva con el correo de :  {reserva.email}</ListGroup.Item>
        <ListGroup.Item>Nro. Habitacion: {reserva.numero}</ListGroup.Item>
        <ListGroup.Item>Precio: ${reserva.precio}</ListGroup.Item>
        <ListGroup.Item>Fecha de Ingreso: {reserva?.fechaIngreso?.slice(0, 10)}</ListGroup.Item>
        <ListGroup.Item>Fecha de Salida: {reserva?.fechaSalida?.slice(0, 10)}</ListGroup.Item> 
        
      </ListGroup>
     
        <Link className="m-4 btn btn-succes boton-error404" to={"/"} >Volver al Inicio</Link>
     
    </Card>
          </article>
          
        </section>
      </section>
    
  )
}

export default DetalleReserva
