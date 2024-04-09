import {  Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {login} from '../../helpers/queries.js'
import {useNavigate , Link} from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
const navegacionInicio = useNavigate()

const onSubmit = (usuario)=>{
  if(login(usuario) === true ){
    Swal.fire({
      title: "Administrador Logueado",
      text: "Enter",
      icon: "success"
    });
    setUsuarioLogueado(usuario.email);
    navegacionInicio("/administrador")
    
  }else{
    Swal.fire({
      title: "Error al loguearse!",
      text: "Enter!",
      icon: "error"
    });
  }
}

  return (
    <>
      <section className="fondo-login ">
        <div className="d-flex justify-content-center ">
          <Card className="container-login p-4  d-flex flex-column align-content-center justify-content-center">
        <h1 className="fuente-login text-center  text-light ">Login</h1>
            <Form className="p-3" onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <Form.Group
                className=" mb-3 text-light"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="py-2"
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "El mail es obligatorio",
                    minLength: {
                      value: 10,
                      message: "El email debe contener al menos 3 caracteres",
                    },
                    maxLength: {
                      value: 340,
                      message:
                        "El email debe contener como maximo 340 caracteres",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message:
                        "Ingrese una dirección de correo electrónica valida",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              {/* password */}
              <Form.Group
                className="mb-3 text-light"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="py-2"
                  type="password"
                  placeholder="Password"
                  {...register("password",{
                    required:"El password es obligatorio",
                    minLength:{
                      value:8,
                      message:'El valor minimo es de 8 caracteres',
                    },
                    maxLength: {
                      value: 12,
                      message:'El valor maximo es de 12 caracteres',
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:'El password debe contener al menos una letra mayúscula, una letra minúscula y un número',
                    },
                  })}
                />
                <Form.Text className="text-danger">
                {errors.password?.message}
                </Form.Text>
              </Form.Group>

              {/* formText */}
              <div className="d-flex flex-column">
                <Form.Text className=" text-light  ">
                  Don't Have an Account
                  <Link to="/crearUsuario" className="fuente-crear-cuenta  ms-2">
                    Create Account
                  </Link>
                </Form.Text>

                <Button
                  /* onClick={handleSubmit} */ className="boton-login my-2 ms-2"
                  variant="dark"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Login;
