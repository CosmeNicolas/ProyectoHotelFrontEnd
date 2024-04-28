import { useEffect, useState } from "react";
import { leerHabitacionesAPI, leerUsuariosAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import banner from "../../assets/Wonderful3.gif";
import SectionIConosInicio from "../common/SectionIConosInicio";
import SectionImagenInicio from "../common/SectionImagenInicio";
import Cardhabitaciones from "./habitaciones/CardHabitaciones";
import Opiniones from "./Opiniones";

const Inicio = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const usuario = JSON.parse(sessionStorage.getItem("inicioHotel")) || {};

  useEffect(() => {
    if (usuario) {
      leerHabitacionesInicio();
      leerUsuarios();
    }
  }, []);

  const leerUsuarios = async () => {
    try {
      const respuesta = await leerUsuariosAPI();
      const usuarioApiInicio = await respuesta;
      setUsuarios(usuarioApiInicio);
    } catch (error) {
      console.error("Error al cargar los usuarios:", error.message);
      throw error; 
    }
  };

  const leerHabitacionesInicio = async () => {
    try {
      const respuesta = await leerHabitacionesAPI();
      const habitacionesAPIinicio = await respuesta;
      setHabitaciones(habitacionesAPIinicio);
    } catch (error) {
      console.error("Error al cargar las habitaciones:", error.message);
    }
  };

  return (
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
        {usuario.rol ? (
          <Cardhabitaciones
            habitaciones={habitaciones}
            usuariorios={usuarios}
          />
        ) : (
          <Card className="text-center CardInicioContainer">
            <Card.Header className="fuente-slogan-principal">
              Bienvenido a Rolling Resort 🛎️
            </Card.Header>
            <Card.Body>
              <Card.Title className="fuente-slogan-secundario">
                Descubre todo lo que Rolling Resort tiene para ofrecerte al
                iniciar sesión en nuestra página.{" "}
              </Card.Title>
              <Card.Text className="fuente-slogan-secundario">
                ¡Regístrate ahora para recibir actualizaciones, ofertas
                especiales y mucho más!"
              </Card.Text>
              <Link
                to="/crearUsuario"
                className=" btn btn-dark btnCardInicioRegistro"
                variant="dark"
              >
                Registrate
              </Link>
            </Card.Body>
          </Card>
        )}
        <hr />
        <Opiniones />
      </article>
      <br id="footer" />
    </section>
  );
};

export default Inicio;
