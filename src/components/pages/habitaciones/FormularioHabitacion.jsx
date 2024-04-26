import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearHabitacionAPI,
  editarHabitacionApi,
  obtenerHabitacion,
} from "../../../helpers/queriesHabitacion";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { leerHabitacionesAPI } from "../../../helpers/queries";

const FormularioHabitacion = ({ modoCrear, titulo, textoBoton }) => {
  //! ----------------------------------VARIBALES ----------------------------------------
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const { id } = useParams();
  const redireccionar = useNavigate();

  //! ----------------------------------FUNCIONES ----------------------------------------
  const habitacionValida = async (habitacion) => {
    if (modoCrear === false) {
      /* PUT */
      try {
        const respuesta = await editarHabitacionApi(id, habitacion);
        if (respuesta.status === 200) {
          Swal.fire({
            title: `Buen trabajo!`,
            html: `Su habitación: <span class="text-warning">${habitacion.numero}</span> ha sido editada correctamente`,
            icon: "success",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
          redireccionar("/administrador");
        } else {
          Swal.fire({
            title: "Ops!",
            text: `Se produjo un error intente editar su habitación mas tarde`,
            icon: "error",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
        }
      } catch (error) {
        console.error("Se produjo un error intente nuevamente mas tarde");
      }
    } else {
      /* POST */
      try {
        const crearHabitacion = await crearHabitacionAPI(habitacion);
        if (crearHabitacion.status === 201) {
          Swal.fire({
            title: "Buen trabajo!",
            html: `Su habitación: <span class="text-success">${habitacion.numero}</span> ha sido añadida al inicio`,
            icon: "success",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
        } else {
          Swal.fire({
            title: "Ops!",
            text: `Se produjo un error intente crear su habitación mas tarde`,
            icon: "error",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
        }
        reset();
      } catch (error) {
        console.error(
          `Se produjo un error intente editar su habitación mas tarde`
        );
      }
    }
  };

  useEffect(() => {
    if (modoCrear === false) {
      cargarFomurlarioEditar();
    }
  }, []);

  const cargarFomurlarioEditar = async () => {
    const respuesta = await obtenerHabitacion(id);
    if (respuesta.status === 200) {
      const habitacionBuscada = await respuesta.json();
      setValue("numero", habitacionBuscada.numero);
      setValue("tipo", habitacionBuscada.tipo);
      setValue("precio", habitacionBuscada.precio);
      const fechaIngreso = new Date(habitacionBuscada.fechaIngreso);
      const fechaSalida = new Date(habitacionBuscada.fechaSalida);
      const fechaIngresoFormateada = fechaIngreso.toISOString().split("T")[0];
      const fechaSalidaFormateada = fechaSalida.toISOString().split("T")[0];
      setValue("fechaIngreso", fechaIngresoFormateada);
      setValue("fechaSalida", fechaSalidaFormateada);
      setValue("imagen", habitacionBuscada.imagen);
      setValue("disponible", habitacionBuscada.disponible);
    } else {
      Swal.fire({
        title: "Ops!",
        text: `Se produjo un error intente editar mas tarde`,
        icon: "error",
        customClass: {
          popup: "contenedor-sweet",
        },
        confirmButtonColor: "#B79B63",
      });
    }
  };

  const verificarNumeroRepetido = async (valor) => {
    try {
      const numeroHabitacion = getValues("numero");
      const habitaciones = await leerHabitacionesAPI();
      if (!modoCrear && numeroHabitacion === valor) {
        return true;
      }
      return !habitaciones.some(
        (habitacion) => habitacion.numero === parseInt(valor)
      );
    } catch (error) {
      console.error("Error al verificar el número de habitación:", error);
      return false;
    }
  };

  //! ----------------------------------MAQUETADO ----------------------------------------
  return (
    <section className="fondo-login">
      <div className="d-flex justify-content-center mt-5">
        <Card className="p-5 container-formulario-Usuario my-5">
          <h1 className="fuente-login text-center text-light mb-5">{titulo}</h1>
          <Form className="rounded-2" onSubmit={handleSubmit(habitacionValida)}>
          <Form.Group
                className="mb-3 text-light"
                controlId="formUsuarioEmail"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej:   Rolling@gmail.com"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "El email debe tener un formato válido",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email && errors.email.message}
                </Form.Text>
              </Form.Group>
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
                  validate: {
                    noExiste: async (numero) => {
                      const isUnique = await verificarNumeroRepetido(numero);
                      return (
                        isUnique || "El número de habitación ya está en uso"
                      );
                    },
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.numero && errors.numero.message}
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

            {!modoCrear && (
              <>
                <Form.Group
                  className="mb-4 text-light"
                  controlId="fechaIngreso"
                >
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

                <Form.Group className="mb-4 text-light" controlId="fechaSalida">
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
              </>
            )}

            <Form.Group className="mb-4 text-light" controlId="disponible">
              <Form.Label>Disponibilidad*</Form.Label>
              <Form.Select
                aria-label="select"
                className="color-inputs text-secondary"
                {...register("disponible", {
                  required:
                    "Seleccionar la disponibilidad de la habitación es obligatorio",
                })}
              >
                <option value={""}>Seleccione una opción</option>
                <option value={true}>Disponible</option>
                <option value={false}>No disponible</option>
              </Form.Select>
              <Form.Text className="text-danger mt-1">
                {errors.disponible?.message}
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

            <div className="text-start">
              <Button
                type="submit"
                variant="dark"
                className="border-0 mt-3 boton-login"
              >
                {textoBoton}
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default FormularioHabitacion;
