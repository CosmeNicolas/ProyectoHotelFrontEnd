import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioHabitacion = () => {
  //! --------------------------------- Variables globales ---------------------
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //! -------------------------------- Funciones -------------------------------

  //! --------------------------------- Maquetado ------------------------------
  return (
    <section className="fondo-login">
      <Container className="px-lg-4 py-4 container-login">
        <h1 className="fuente-login text-center text-light ">
          Crear Habitación
        </h1>
        <Form className=" rounded-2 px-lg-5 pt-3 pb-5">
         
          <Form.Group
            className="mb-3 text-light"
            controlId="producto"
          >
            <Form.Label>Producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Cafe"
              className="color-inputs"
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 text-light"
            controlId="precio"
          >
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 50"
              className="color-inputs"
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 text-light"
            controlId="url"
          >
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="color-inputs"
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 text-light"
            controlId="categoria"
          >
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              aria-label="select"
              /* required */
              className="color-inputs text-secondary"
            >
              <option value={""}>Seleccione una opcion</option>
              <option value={"Panaderia"}>Panaderia</option>
              <option value={"Cafeteria"}>Cafeteria</option>
              <option value={"Reposteria"}>Reposteria</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 text-light"
            controlId="descripcionBreve"
          >
            <Form.Label>Descripcion breve*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una taza de café suave y aromática"
              className="color-inputs"
            />
            <Form.Text className="text-danger">
              {errors.descripcionBreve?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 text-light"
            controlId="descripcionAmplia"
          >
            <Form.Label>Descripcion detallada*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="El café es una bebida aromática y vigorizante que se obtiene de los granos tostados de la planta de café. Su sabor distintivo y su rica historia lo convierten en una de las bebidas más populares y apreciadas en todo el mundo. Al ser versátil, el café se presenta en una amplia variedad de formas, desde el clásico espresso hasta las elaboradas mezclas de cafés gourmet."
              className="formularioTextArea color-inputs"
            />
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>

          <div className="text-end">
            <Button type="submit" variant="dark" className="border-0 boton-login">
              Guardar
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioHabitacion;
