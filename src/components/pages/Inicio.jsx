import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import banner from "../../assets/Wonderful3.gif";
import SectionIConosInicio from "../common/SectionIConosInicio";
import SectionImagenInicio from "../common/SectionImagenInicio";
import Cardhabitaciones from "./habitaciones/CardHabitaciones";
import { leerHabitacionesAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Opiniones from "./Opiniones";

const Inicio = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const usuario= JSON.parse(sessionStorage.getItem("inicioHotel")) || "";

  useEffect(() => {
    if(usuario){
      leerHabitacionesInicio();
    }
  }, []);

  const leerHabitacionesInicio = async () => {
    try {
      const respuesta = await leerHabitacionesAPI();
      if (respuesta.status === 200) {
        const habitacionesAPIinicio = await respuesta;
        setHabitaciones(habitacionesAPIinicio);
      }
      const habitacionesAPIinicio = await respuesta;
      setHabitaciones(habitacionesAPIinicio);
    } catch (error) {
      console.log(error);
      alert("tenes un error facha");
    }
  };

  return (
    <>
      <section className="main">
        <article>
          <img className="img-banner img-fluid w-100" src={banner} alt="" />
          <h2 className="fuente-slogan-principal text-center mt-5 py-2">
            "Tu escape perfecto comienza aquí."
          </h2>
          <h3 className="fuente-slogan-secundario text-center">
            Aventuras, relajación y experiencias únicas te esperan.
          </h3>
          <SectionIConosInicio />
          <hr className="mx-4" />
          <SectionImagenInicio />
          <hr className="mx-4" />
        </article>
        <article id="seccionFinal">
          
          {
            (usuario) ? (<Cardhabitaciones habitaciones={habitaciones} />)
            :  (
            <Card className="text-center CardInicioContainer">
            <Card.Header className="fuente-slogan-principal">Bienvenido a Rolling Resort 🛎️</Card.Header>
            <Card.Body>
              <Card.Title>Descubre todo lo que Rolling Resort tiene para ofrecerte al iniciar sesión en nuestra página. </Card.Title>
              <Card.Text className="fuente-slogan-secundario">
              ¡Regístrate ahora para recibir actualizaciones, ofertas especiales y mucho más!"
              </Card.Text>
              <Link to='/crearUsuario'  className=" btn btn-dark btnCardInicioRegistro" variant="dark">Registrate</Link>
            </Card.Body>
           
          </Card>)
          
          }
          <hr />
          <Opiniones></Opiniones>
        </article>
        <br id="footer" />
      </section>
    </>
  );
};

export default Inicio;
