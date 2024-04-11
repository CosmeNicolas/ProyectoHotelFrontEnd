import { Button, Row, Col, Container, Image, Form } from "react-bootstrap";
import pileta from "../../assets/pileta.jpeg";

const Contacto = () => {
  return (
    <>
      <section>
        <div Container>
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
      <Container fluid className="texto-FormContacto py-5">
        <Row>
          <Col xs={12} sm={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.2928906921807!2d-65.2075942400546!3d-26.836748847013748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1695685464063!5m2!1ses-419!2sar"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col  xs={12} sm={6} className="py-3">
            <Form className="text-center">
              <Form.Group class="input-group mb-3">
                <Form.Label class="input-group-text" id="regNombre">
                  Nombre
                </Form.Label>
                <Form.Control
                  type="text"
                  aria-label="regNombre"
                  class="form-control"
                  placeholder="Ejemplo: Juan"
                  maxlength="15"
                  required
                />
              </Form.Group>
              <Form.Group class="input-group mb-3">
                <Form.Label class="input-group-text" id="regApellido">
                  Apellido
                </Form.Label>

                <Form.Control
                  type="text"
                  aria-label="regApellido"
                  class="form-control"
                  placeholder="Ejemplo: Perez"
                  maxlength="20"
                  required
                />
              </Form.Group>

              <Form.Group class="input-group mb-3">
                <Form.Label class="input-group-text" id="contEmail">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  class="form-control"
                  placeholder="ejemplo@ejemplo.com"
                  aria-label="contEmail"
                  aria-describedby="ingrese su email"
                  required
                />
              </Form.Group>

              <Form.Group class="mb-3">
                <Form.Label for="contConsulta" class="form-Form.Label">
                  Consulta
                </Form.Label>
                <Form.Control
                  as="textarea"
                  id="contConsulta"
                  aria-describedby="ingrese su consulta"
                  maxlength="150"
                  required
                >
                  Ingrese su consulta, responderemos a la brevedad
                </Form.Control>
              </Form.Group>
              <Button type="submit" class="btn-Contacto">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Contacto;
