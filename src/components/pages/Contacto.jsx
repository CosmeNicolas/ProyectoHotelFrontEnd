import {
  Button,
  Row,
  Col,
  Container,
  Image,
  Form,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import pileta from "../../assets/pileta.jpeg";
import { BsFillGeoAltFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

emailjs.init("Is9rdo_H0QNU97UX5");

// Definir templateParams fuera de la función enviarMail
let templateParams = {
  from_name: "Hotel Rolling",
  user_name: "",
  destinatario: "",
  message: "gracias por registrarte",
  user_lastname: "",
};

/*const enviarMail = async (e) => {
  e.preventDefault();

  //  valores de templateParams = valores del formulario
  templateParams.to_name = e.target.user_name.value;
  templateParams.destinatario = e.target.user_email.value;
  templateParams.to_lastname = e.target.user_lastname.value;
  templateParams.message = e.target.consulta.value;

  try {
    const response = await emailjs.send(
      "service_vjots2t",
      "template_lt6fb3v",
      templateParams
    );
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Su consulta se ha enviado correctamente.",
        showConfirmButton: true,
        confirmButtonColor: "#B79B63",
        customClass: {
          popup: "contenedor-sweet",
        },
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al enviar el mensaje. Intente nuevamente más tarde.",
        showConfirmButton: true,
      });
    }
  } catch (error) {
    console.error("error al enviar el email", error);

    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error",
      text: "Ha ocurrido un error inesperado. Intente nuevamente más tarde.",
      showConfirmButton: true,
    });
  }
};*/

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviarMail = async (data) => {
    try {
      const response = await emailjs.send(
        "service_vjots2t",
        "template_lt6fb3v",
        {
          from_name: "Hotel Rolling",
          destinatario: data.user_email,
          to_name: data.user_name,
          to_lastname: data.user_lastname,
          message: data.consulta,
        }
      );
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Su consulta se ha enviado correctamente.",
          showConfirmButton: true,
          confirmButtonColor: "#B79B63",
          customClass: {
            popup: "contenedor-sweet",
          },
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un error al enviar el mensaje. Intente nuevamente más tarde.",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("error al enviar el email", error);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error inesperado. Intente nuevamente más tarde.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <section>
      <div>
        <Image src={pileta} alt="pileta" className="img-piletaContacto" fluid />
        <div className="texto-tituloContacto text-center">
          <h2>Gracias por elegirnos</h2>
          <p>Lo estaremos esperando</p>
        </div>
      </div>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={12} lg={5}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9013.019608743918!2d-71.168338929087!3d-41.07480697251358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b1520c860e5%3A0x8210ae97cb7b9a65!2sSan%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro%20Province!5e0!3m2!1sen!2sar!4v1713504750974!5m2!1sen!2sar"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
            ></iframe>
          </Col>
          <Col xs={12} sm={12} lg={6} className="texto-FormContacto py-3">
            <h4 className="text-center ">
              <BsFillGeoAltFill className="icono-ubicacionContacto " />
              Av. Exequiel Bustillo 2500, San Carlos de Bariloche
            </h4>
            <Form className="text-center" onSubmit={handleSubmit(enviarMail)}>
              <Form.Group>
                <InputGroup className="py-3">
                  <InputGroup.Text id="nombreContacto">Nombre</InputGroup.Text>
                  <Form.Control
                    placeholder="Juan"
                    aria-label="nombre"
                    {...register("user_name", {
                      required:
                        "El nombre del contacto es un campo obligatorio",
                      minLength: {
                        value: 3,
                        message: "La cantidad mínima de caracteres es 3",
                      },
                      maxLength: {
                        value: 20,
                        message: "La cantidad máxima de caracteres es 20",
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Ingrese un nombre válido",
                      },
                    })}
                    className="color-inputs"
                  />
                  <Form.Text className="text-danger">
                    {errors.user_name && errors.user_name.message}
                  </Form.Text>
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text id="apellidoContacto">
                    Apellido
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Garcia"
                    aria-label="apellido"
                    {...register("user_lastname", {
                      required:
                        "El apellido del contacto es un campo obligatorio",
                      minLength: {
                        value: 3,
                        message: "La cantidad mínima de caracteres es 3",
                      },
                      maxLength: {
                        value: 20,
                        message: "La cantidad máxima de caracteres es 20",
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Ingrese un apellido válido",
                      },
                    })}
                    className="color-inputs"
                  />
                  <Form.Text className="text-danger">
                    {errors.user_lastname && errors.user_lastname.message}
                  </Form.Text>
                </InputGroup>
                <InputGroup className="py-3">
                  <InputGroup.Text id="emailContacto">E-mail</InputGroup.Text>
                  <Form.Control
                    placeholder="email@email.com"
                    aria-label="email"
                    type="email"
                    {...register("user_email", { required: true })}
                    className="color-inputs"
                  />
                  {errors.user_email && (
                    <span className="text-danger">Este campo es requerido</span>
                  )}
                </InputGroup>
                <FloatingLabel controlId="consultaContacto" label="Consulta">
                  <Form.Control
                    as="textarea"
                    placeholder="Deje su consulta"
                    style={{ height: "100px" }}
                    {...register("consulta", { required: true })}
                    className="color-inputs"
                  />
                  {errors.consulta && (
                    <span className="text-danger">Este campo es requerido</span>
                  )}
                </FloatingLabel>
                <Button
                  type="submit"
                  className="btn-Contacto my-3"
                  variant="dark"
                >
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
