import { useEffect, useState } from "react";
import banner from "../../assets/Wonderful3.gif";
import SectionIConosInicio from "../common/SectionIConosInicio";
import SectionImagenInicio from "../common/SectionImagenInicio";
import Cardhabitaciones from "./habitaciones/CardHabitaciones";
import { leerHabitacionesAPI } from "../../helpers/queries";
const Inicio = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const usuario= JSON.parse(sessionStorage.getItem("inicioHotel")) || "";
  const [selogueo, setSelogueo] = useState(usuario)
console.log(selogueo)
  useEffect(() => {
   /*  if(usuario){ */
      leerHabitacionesInicio();
    /* }else{
      alert('logueate maquina para ver habitaciones disponibles')
    } */
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
        <article>
          <Cardhabitaciones habitaciones={habitaciones} />
        </article>
      </section>
    </>
  );
};

export default Inicio;
