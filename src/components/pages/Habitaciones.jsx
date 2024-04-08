import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import habitacion1img from "../../assets/habitacion1.jpg";
import living1img from "../../assets/living1.jpg";

const Habitaciones = () => {
  return (
    <>
      <section>
        <div className="mt-5">
          <h2 className="texto-tituloHTop text-center">
            Habitaciones Doble Deluxe
          </h2>
          <p className="texto-textoH container text-center mt-5">
            Al entrar en una habitación de lujo, uno es recibido por un ambiente
            de refinamiento y exclusividad. Los materiales de alta calidad y los
            acabados impecables se destacan a primera vista. La cama de la más
            fina calidad, prometiendo una noche de sueño reparador.
          </p>
        </div>
        <img
          src={habitacion1img}
          alt="habitacionDeLujo"
          className="img-habitacion img-fluid mt-3"
        />
        <div className="descripcion-habitacion row py-5 px-5">
          <div className="col-sm-12 col-md-6 my-3">
            <img
              src={living1img}
              alt="habitacionDeLujo"
              className="img-fluid mt-3"
            />
          </div>
          <div className="col-sm-12 col-md-6 my-3 pt-5 text-center">
            <h3>Servicios de lujo</h3>
            <ul>
              <li>
                Servicio personalizado: Atención al cliente excepcional y
                servicios personalizados para satisfacer todas las necesidades
                de los huéspedes.
              </li>
              <li>
                Confort máximo: Colchones de alta calidad, ropa de cama premium
                y una decoración exclusiva que garantizan el máximo confort1.
              </li>
              <li>
                Muebles de alta calidad: Toques opulentos y caros, atención a
                los detalles estéticos y arte original en las paredes.
              </li>
            </ul>
            <Link className="m-2 px-5 btn btn-succes btn-habitacion" to={"/"}>
              RESERVAR
            </Link>
          </div>
          <hr className="separador-habitacion container"/>
        </div>
        <div>
          <h2 className="texto-tituloH text-center">
            Habitaciones Doble Premiun
          </h2>
          <p className="texto-textoH container text-center mt-5">
            Al entrar en una habitación de lujo, uno es recibido por un ambiente
            de refinamiento y exclusividad. Los materiales de alta calidad y los
            acabados impecables se destacan a primera vista. La cama de la más
            fina calidad, prometiendo una noche de sueño reparador.
          </p>
        </div>
        <img
          src={habitacion1img}
          alt="habitacionDeLujo"
          className="img-habitacion img-fluid mt-3"
        />
        <div className="descripcion-habitacion row py-5 px-5">
          <div className="col-sm-12 col-md-6 my-3">
            <img
              src={living1img}
              alt="habitacionDeLujo"
              className="img-habitacionCard img-fluid mt-3"
            />
          </div>
          <div className="col-sm-12 col-md-6 my-3">
            <h3>Servicios de lujo</h3>
            <ul>
              <li>
                Servicio personalizado: Atención al cliente excepcional y
                servicios personalizados para satisfacer todas las necesidades
                de los huéspedes1.
              </li>
              <li>
                Confort máximo: Colchones de alta calidad, ropa de cama premium
                y una decoración exclusiva que garantizan el máximo confort1.
              </li>
              <li>
                Experiencias gastronómicas: Restaurantes de lujo con menús
                exquisitos que suelen incluir platos típicos de la región y
                opciones internacionales1.
              </li>
              <li>
                Muebles de alta calidad: Toques opulentos y caros, atención a
                los detalles estéticos y arte original en las paredes.
              </li>
            </ul>
            <Link className="m-2 px-5 btn btn-succes btn-habitacion" to={"/"}>
              RESERVAR
            </Link>
          </div>
          <hr className="separador-habitacion container" />
        </div>
      </section>
    </>
  );
};

export default Habitaciones;
