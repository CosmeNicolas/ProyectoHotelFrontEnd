import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const FormularioUsuario = () => {
  return (
    <>
      <section className="fondo-formulario-Usuario ">
        <div className="d-flex justify-content-center ">
            <div className="titulo-usuario ">
          <h1 className="fuente-formulario-Usuario text-center  text-light mt-3">
            Crear Usuario
          </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <Card className="container-formulario-Usuario  p-3 my-4  d-flex flex-column align-content-center justify-content-center">
            <Form className="p-3">
              {/* nombre completo */}
              <Form.Group
                className=" mb-3 text-light"
                controlId="formNombreCompleto"
              >
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="ej: Jose Enrique Perez"
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>

              {/* usuario */}
              <Form.Group
                className="mb-3 text-light"
                controlId="formUsuarioNombre"
              >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="Nombre de usuario"
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>

              {/* email */}
              <Form.Group
                className="mb-3 text-light"
                controlId="formUsuarioEmail"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="py-2"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  autoComplete="email"
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>

              <div className="d-flex flex-column">
                {/* password */}
                <Form.Group
                  className="mb-3 text-light"
                  controlId="formUsuarioPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="py-2 form-control"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                <Button
                  /* onClick={handleSubmit} */ className="boton-formulario-Usuario my-2 ms-2"
                  variant="dark"
                  type="submit"
                >
                  Crear Usuario
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default FormularioUsuario;
