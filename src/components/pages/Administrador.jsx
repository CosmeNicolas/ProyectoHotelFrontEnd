import { Container, Button } from "react-bootstrap";
import { BsFillCalendar2PlusFill } from "react-icons/bs";

const Administrador = () => {
  return (
    <>
      <Container className="main">
        <div className="d-flex justify-content-between mt-5 pt-5 ">
          <h1 className=" fuente-slogan-principal">
            Habitaciones disponibles
          </h1>
          <Button className="color-boton-admnistrador" variant="dark">
          <BsFillCalendar2PlusFill />
          </Button>
        </div>
        <hr />
      </Container>
    </>
  );
};

export default Administrador;
