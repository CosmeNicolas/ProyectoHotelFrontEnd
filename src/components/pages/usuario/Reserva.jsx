import { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  obtenerHabitacion,
  editarHabitacionApi,
} from "../../../helpers/queriesHabitacion";

const Reserva = ({ reserva, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();
  const [imagenCargada, setImagenCargada] = useState("");

  useEffect(() => {
    if (reserva) {
      cargarDatosHabitacion();
    }
  }, []);

  const cargarDatosHabitacion = async () => {
    const respuesta = await obtenerHabitacion(id);
    console.log(respuesta);
    if (respuesta.status === 200) {
      const obtenerHabitacion = await respuesta.json();
      /* traer los valores de las habitaciones */
      setImagenCargada(obtenerHabitacion.imagen);
      setValue("numero", obtenerHabitacion.numero);
      setValue("tipo", obtenerHabitacion.tipo);
      setValue("precio", obtenerHabitacion.precio);
      setValue("disponible", obtenerHabitacion.disponible);
      const fechaIngreso = new Date(obtenerHabitacion.fechaIngreso);
      const fechaSalida = new Date(obtenerHabitacion.fechaSalida);
      const fechaIngresoFormateada = fechaIngreso.toISOString().split("T")[0];
      const fechaSalidaFormateada = fechaSalida.toISOString().split("T")[0];
      setValue("fechaIngreso", fechaIngresoFormateada);
      setValue("fechaSalida", fechaSalidaFormateada);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente realizar esta accion en unos minutos",
        icon: "error",
      });
    }
  };
  const reservarHabitacion = async (reserva) => {
    try {
      if (reserva) {
        reserva.disponible = false;
        if (!reserva.imagen) {
          reserva.imagen = imagenCargada;
        }
        reserva.disponible = false;
        const respuesta = await editarHabitacionApi(id, reserva);
        console.log(respuesta);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Reserva Realizada",
            icon: "success",
            customClass: {
              popup: "contenedor-sweet",
            },
          });
          navegacion("/");
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: "Intente modificar este producto en unos minutos",
            icon: "error",
            customClass: {
              popup: "contenedor-sweet",
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className=" fondo-formulario-Reserva ">
        <div className="d-flex justify-content-center ">
          <div className="titulo-Reserva ">
            <h1 className=" fuente-formulario-Reserva text-center  text-light mt-3">
              {titulo}
            </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <Card className="container-formulario-Reserva  p-3 my-4  d-flex flex-column align-content-center justify-content-center">
            <Form className="p-3" onSubmit={handleSubmit(reservarHabitacion)}>
              {/* Nombre habitacion */}
              <Form.Group controlId="tipo" className=" mb-3 text-light">
                <Form.Label>Tipo de Habitacion</Form.Label>
                <Form.Select
                  aria-label="select"
                  className="color-inputs text-secondary"
                  disabled
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
              {/* Numero */}
              <Form.Group controlId="numero" className=" mb-3 text-light">
                <Form.Label>Número de Habitación*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 227"
                  className="color-inputs"
                  readOnly
                  {...register("numero", {
                    required: "El número de la habitación es obligatorio",
                    min: {
                      value: 100,
                      message:
                        "Debe ingresar apartir de la habitación número 100",
                    },
                    max: {
                      value: 10000,
                      message:
                        "Debe ingresar hasta la habitación número 10.000",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.numero?.message}
                </Form.Text>
              </Form.Group>
              {/* Fecha ingreso  */}
              <Form.Group controlId="fechaIngreso" className=" mb-3 text-light">
                <Form.Label>Fecha de ingreso</Form.Label>
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
                        return (
                          fechaIngreso >= hoy.setDate(hoy.getDate() - 1) ||
                          "Ingrese una fecha válida"
                        );
                      },
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.fechaIngreso?.message}
                </Form.Text>
              </Form.Group>
              {/* fecha salida */}
              <Form.Group controlId="fechaFinal" className=" mb-3 text-light">
                <Form.Label>Fecha de salida*</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Ej: 27/03/2024"
                  className="color-inputs"
                  {...register("fechaSalida", {
                    required: "La fecha de salida es obligatoria",
                    validate: {
                      fechaFutura: (value) => {
                        const fechaSalida = new Date(value);
                        const hoy = new Date();
                        return (
                          fechaSalida >= hoy ||
                          "La fecha debe ser posterior a la fecha de hoy"
                        );
                      },
                      fechaPosterior: (value) => {
                        const fechaIngreso = new Date(
                          getValues("fechaIngreso")
                        );
                        const fechaSalida = new Date(value);
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

              {/* PRECiO */}
              <Form.Group controlId="precio" className=" mb-3 text-light">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 50000"
                  className="color-inputs"
                  readOnly
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

              {/* DISPONIBILIDAD */}

              <div className="text-center mb-3">
                <Button
                  className="boton-formulario-Reserva my-2 ms-2"
                  variant="dark"
                  type="submit"
                >
                  Reservar
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Reserva;
