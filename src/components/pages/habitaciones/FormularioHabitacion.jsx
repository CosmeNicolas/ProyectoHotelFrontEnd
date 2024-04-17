import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioHabitacion = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const habitacionValida = async (habitacion) => {
    console.log(habitacion);
    reset();
  };

  return (
    <section className="fondo-login">
      <div className="d-flex justify-content-center mt-5">
        <Card className="p-5 container-formulario-Usuario my-5">
          <h1 className="fuente-login text-center text-light mb-5">
            Crear Habitación
          </h1>
          <Form className="rounded-2" onSubmit={handleSubmit(habitacionValida)}>
            <Form.Group className="mb-4 text-light" controlId="numero">
              <Form.Label>Número de Habitación*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 227"
                className="color-inputs"
                {...register("numero", {
                  required: "El número de la habitación es obligatorio",
                  min: {
                    value: 100,
                    message:
                      "Debe ingresar apartir de la habitación número 100",
                  },
                  max: {
                    value: 10000,
                    message: "Debe ingresar hasta la habitación número 10.000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.numero?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 text-light" controlId="tipo">
              <Form.Label>Categoría*</Form.Label>
              <Form.Select
                aria-label="select"
                className="color-inputs text-secondary"
                {...register("tipo", {
                  required:
                    "Seleccionar la categoría de la habitación es obligatorio",
                })}
              >
                <option value={""}>Seleccione una opción</option>
                <option value={"Doble Twin"}>Doble Twin</option>
                <option value={"Doble Superior"}>Doble Superior</option>
                <option value={"Triple Superior"}>Triple Superior</option>
                <option value={"Suite"}>Suite</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.tipo?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 text-light" controlId="precio">
              <Form.Label>Precio*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 50000"
                className="color-inputs"
                {...register("precio", {
                  required: "El precio de la habitación es obligatorio",
                  min: {
                    value: 27000,
                    message:
                      "El monto de la habitación debe ser mayor a $27.000",
                  },
                  max: {
                    value: 120000,
                    message:
                      "El monto de la habitación debe ser menor a $120.000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 text-light" controlId="fechaIngreso">
              <Form.Label>Fecha de ingreso*</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ej: 27/03/2024"
                className="color-inputs"
                {...register("fechaIngreso", {
                  required: "La fecha de ingreso es obligatoria",
                  validate: {
                    fechaFutura: (value) => {
                      const fechaIngreso = new Date(value);
                      const hoy = new Date();
                      return fechaIngreso >= hoy || "Ingrese una fecha válida";
                    },
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaIngreso?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 text-light" controlId="fechaSalida">
              <Form.Label>Fecha de salida*</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ej: 27/03/2024"
                className="color-inputs"
                {...register("fechaSalida", {
                  required: "La fecha de salida es obligatoria",
                  validate: {
                    fechaFutura: async (value) => {
                      const fechaSalida = await new Date(value);
                      const hoy = new Date();
                      return (
                        fechaSalida >= hoy ||
                        "La fecha debe ser posterior a la fecha de hoy"
                      );
                    },
                    fechaPosterior: async (value) => {
                      const fechaIngreso = await new Date(
                        getValues("fechaIngreso")
                      );
                      const fechaSalida = await new Date(value);
                      return (
                        fechaSalida > fechaIngreso ||
                        "La fecha de salida debe ser posterior a la fecha de ingreso"
                      );
                    },
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaSalida?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4 text-light" controlId="imagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="color-inputs"
                {...register("imagen", {
                  required:
                    "El campo para ingresar la URL de la imagen es obligatorio",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                    message: "Debe ingresar una URL válida (jpg|gif|png|jpeg)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-4 text-light"
              controlId="descripcion"
            >
              <Form.Label>Descripción*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder=""
                className="formularioTextArea"
                {...register("descripcion", {
                  required: "Detallar la habitación a crear es obligatorio",
                  minLength: {
                    value: 35,
                    message:
                      "Debe ingresar como mínimo 35 caracteres para detallar la habitación",
                  },
                  maxLength: {
                    value: 500,
                    message:
                      "Debe ingresar como máximo 500 caracteres para detallar la habitación",
                  },
                })}
              />
              <Form.Text className="text-danger mt-1">
                {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>

            <div className="text-start">
              <Button
                type="submit"
                variant="dark"
                className="border-0 mt-3 boton-login"
              >
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default FormularioHabitacion;
