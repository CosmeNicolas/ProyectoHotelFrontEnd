import {  Form, Button, Card } from "react-bootstrap";
import { Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="fondo-login ">
        <h1 className="fuente-login text-center  text-light mt-3">Login</h1>

        <div className="d-flex justify-content-center ">
          <Card className="container-login  p-3 my-4  d-flex flex-column align-content-center justify-content-center">
            <Form className="p-3">
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
                />
                <Form.Text className="text-danger"></Form.Text>
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
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>

              {/* formText */}
              <div className="d-flex flex-column">
                <Form.Text className=" text-light  ">
                  Don't Have an Account
                  <Link to="/" className="fuente-crear-cuenta  ms-2">
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
