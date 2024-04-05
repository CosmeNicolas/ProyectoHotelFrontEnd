import Accordion from 'react-bootstrap/Accordion';
import { Container, Button, Table } from "react-bootstrap";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import ItemHabitacion from "./habitaciones/Itemhabitacion";
import ItemUsuario from './usuario/ItemUsuario';

const Administrador = () => {
  return (
    <>
      <Container  fluid className="contenedorAdministrador p-1">
        <div  className="section-administrador d-flex justify-content-around pt-5 w-100 ">
          <h1 className=" titulo-administrador text-light">Habitaciones disponibles</h1>
          <Button className="color-boton-admnistrador my-1" variant="dark">
            <BsFillCalendar2PlusFill />
          </Button>
        </div>
       
        <br />

        {/* Tabla Habitaciones */}
        <article className='mx-3'>

        <Accordion  defaultActiveKey="0">
        <Accordion.Item className='boton-acordion'   eventKey="0">
        <Accordion.Header >Habitaciones</Accordion.Header>
        <Accordion.Body>
        <Table responsive  striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nro Habitacion</th>
              <th>Tipo de Habitación</th>
              <th>Precio</th>
              <th>Fecha de Ingreso</th>
              <th>Fecha de Salida</th>
              <th>Disponible</th>
              <th>Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemHabitacion/>
          </tbody>
        </Table>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        {/* Tabla Ususarios */}
        <Accordion className='mt-2' defaultActiveKey="1">
        <Accordion.Item className='boton-acordion' eventKey="1">
        <Accordion.Header>Usuarios</Accordion.Header>
        <Accordion.Body>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nombre Completo</th>
              <th>email</th>
              <th>usuario</th>
              <th>password</th>
              <th>rol</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemUsuario/>
          </tbody>
        </Table>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </article>
     
        
      </Container>
      <hr />
    </>
  );
};

export default Administrador;
