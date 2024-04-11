import { Button, Row, Col, Container, Image } from "react-bootstrap";
import pileta from "../../assets/pileta.jpeg";


const Contacto = () => {
  return (
    <>
      <section>
        <Container className="text-center">
          <p className=" text-center mt-5">
            Al entrar en una habitación de lujo, uno es recibido por un ambiente
            de refinamiento y exclusividad. Los materiales de alta calidad y los
            acabados impecables se destacan a primera vista. La cama de la más
            fina calidad, prometiendo una noche de sueño reparador.
          </p>
        </Container>
        <Image
          src={pileta}
          alt="pileta"
          className=" mt-3"
          fluid
        />
      </section>
    </>
  );
};

export default Contacto;
