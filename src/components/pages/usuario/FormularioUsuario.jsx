import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../../../helpers/queries";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FormularioUsuario = ({ modoEditar, titulo, textoBoton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    if (modoEditar) {
      cargarFormularioEditar();
    }
  }, []);


  const onSubmit = async (data) => {
    if (modoEditar) {
      /* PUT */
      try {
        const respuesta = await editarUsuarioApi(id, data);
        if (respuesta.status === 200) {
          Swal.fire({
            title: `Buen trabajo!`,
            html: `Su usuario: <span class="text-warning">${data.usuario}</span> ha sido editado correctamente`,
            icon: "success",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
          navegar("/administrador");
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
      try {
        const respuesta = await crearUsuario(data);
        const datos = await respuesta.json();
        if (respuesta.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: datos.mensaje,
            showConfirmButton: true,
          });
          navegar("/");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: datos.mensaje,
            showConfirmButton: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <>
      <section className="fondo-formulario-Usuario ">
        <div className="d-flex justify-content-center ">
          <div className="titulo-usuario ">
            <h1 className="fuente-login  text-light text-center  text-light mt-3">
              {titulo}
            </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <Card className="container-formulario-Usuario  p-3 my-4  d-flex flex-column align-content-center justify-content-center">
            <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <Form.Group
                className=" mb-3 text-light"
                controlId="formNombreCompleto"
              >
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
            
                  placeholder="Nombre completo"
                  {...register("nombreCompleto", {
                    required: "El nombre del cliente es obligatorio",
                    minLength: {
                      value: 3,
                      message: "La cantidad mínima de caracteres es 2",
                    },
                    maxLength: {
                      value: 60,
                      message: "La cantidad máxima de caracteres es 50",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreCompleto && errors.nombreCompleto.message}
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3 text-light"
                controlId="formUsuarioNombre"
              >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                     placeholder="Ej:  Maddie345"
                  {...register("usuario", {
                    required: "El nombre de usuario es obligatorio",
                    minLength: {
                      value: 5,
                      message: "La cantidad mínima de caracteres es 5",
                    },
                    maxLength: {
                      value: 20,
                      message: "La cantidad máxima de caracteres es 20",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.usuario && errors.usuario.message}
                </Form.Text>
              </Form.Group>

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
              {!modoEditar ? none : (

              <Form.Group
                className="mb-3 text-light"
                controlId="formUsuarioPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                    maxLength: {
                      value: 16,
                      message: "La contraseña debe tener como máximo 16 caracteres",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
                      message: "La contraseña debe contener al menos una minúscula, una mayúscula y un número",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password && errors.password.message}
                </Form.Text>
              </Form.Group>
              )}      


              <Button
                className="boton-formulario-Usuario my-2 ms-2"
                variant="dark"
                type="submit"
              >
                {textoBoton}
              </Button>
            </Form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default FormularioUsuario;