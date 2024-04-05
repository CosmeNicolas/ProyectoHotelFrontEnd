import Accordion from 'react-bootstrap/Accordion';
import { Container, Button, Table } from "react-bootstrap";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import ItemHabitacion from "./habitaciones/Itemhabitacion";
import ItemUsuario from './usuario/ItemUsuario';

const Administrador = () => {
  return (
    <>
      <Container fluid  className="main">
       
        <div className="d-flex justify-content-between mt-5 pt-5 ">
          <h1 className=" fuente-slogan-principal">Habitaciones disponibles</h1>
          <Button className="color-boton-admnistrador" variant="dark">
            <BsFillCalendar2PlusFill />
          </Button>
        </div>
        <hr />

        {/* Tabla Habitaciones */}
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Habitaciones</Accordion.Header>
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
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1">
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
     
        
      </Container>
      <hr />
    </>
  );
};

export default Administrador;
