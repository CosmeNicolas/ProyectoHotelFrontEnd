import React from 'react';
import { Button, Row, Col, Container, Image, Form, InputGroup, FloatingLabel } from "react-bootstrap";
import pileta from "../../assets/pileta.jpeg";
import { BsFillGeoAltFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';


emailjs.init("32wbx7tjPj_o_o_p4");
// Definir templateParams fuera de la función enviarMail
let templateParams = {
  from_name: 'Hotel Rolling',
  user_name: '', // Este se actualizará con el valor del formulario
  destinatario: '', // Este se actualizará con el valor del formulario
  message: 'gracias por registrarte',
  user_lastname: ''
};

function enviarMail(e){
  e.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Actualiza los valores de templateParams con los valores del formulario
  templateParams.to_name = e.target.user_name.value; // Asegúrate de que el input de nombre tenga el atributo 'name="user_name"'
  templateParams.destinatario = e.target.user_email.value; // Asegúrate de que el input de email tenga el atributo 'name="user_email"'
  templateParams.to_lastname = e.target.user_lastname.value;
  templateParams.message = e.target.consulta.value;
  
  
  // Envía el correo electrónico
  emailjs.send("service_vau1ul5", "template_wovljxf", templateParams).then(
    function(response) {
      console.log('success!', response.status, response.text);
    },
    function(error){
      console.log('failed...', error);
    }
  );
}

const Contacto = () => {
  return (
    <section>
      <div>
        <Image
          src={pileta}
          alt="pileta"
          className="img-piletaContacto"
          fluid
        />
        <div className="texto-tituloContacto text-center">
          <h2>Gracias por elegirnos</h2>
          <p>Lo estaremos esperando</p>
        </div>
      </div>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={12} lg={5} >
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.2928906921807!2d-65.2075942400546!3d-26.836748847013748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1695685464063!5m2!1ses-419!2sar"
              style={{ border: "0" }}             
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} sm={12} lg={6} className="texto-FormContacto py-3">
            <h4><BsFillGeoAltFill className="icono-ubicacionContacto"/>Av. Gral. Paz 576, San Miguel de Tucuman, CP 4000</h4>
            <Form className="text-center" onSubmit={enviarMail}>
              <Form.Group>
                <InputGroup className="py-3">
                  <InputGroup.Text id="nombreContacto">Nombre</InputGroup.Text>
                  <Form.Control
                    placeholder="Juan"
                    aria-label="nombre"
                    name="user_name"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text id="apellidoContacto">Apellido</InputGroup.Text>
                  <Form.Control
                    placeholder="Garcia"
                    aria-label="apellido"
                    name="user_lastname"
                  />
                </InputGroup>
                <InputGroup className="py-3">
                  <InputGroup.Text id="emailContacto">E-mail</InputGroup.Text>
                  <Form.Control
                    placeholder="email@email.com"
                    aria-label="email"
                    type="email"
                    name="user_email"
                  />
                </InputGroup>
                <FloatingLabel controlId="consultaContacto" label="Consulta">
                  <Form.Control
                    as="textarea"
                    placeholder="Deje su consulta"
                    style={{ height: '100px' }}
                    name="consulta"
                  />
                </FloatingLabel>
                <Button type="submit" className="btn-Contacto my-3">
                  Enviar
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;
