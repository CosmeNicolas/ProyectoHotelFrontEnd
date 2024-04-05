import React from "react";
import Portada2 from "../../assets/OIG2.jpg";
import { FaHotel } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import { TbMassage } from "react-icons/tb";
import { GiStarsStack } from "react-icons/gi";

const QuienesSomos = () => {
  return (
    <>
      <div className="image-container container somos ">
        <img src={Portada2} alt="" className="img-fluid img-somos2 w-100" />
        <div className="dark-overlay"></div>
        <div className="text-overlay">
          <div className="centered-text">
            <h1>Bienvenidos a Rolling Hotel & Resort</h1>
            <h2>
              Ubicado en un majestuoso castillo antiguo adaptado, Rolling Hotel
              & Resort ofrece una experiencia única en uno de los destinos más
              fascinantes del mundo: San Carlos de Bariloche. Situado cerca del
              lago Nahuel Huapi, nuestro hotel ofrece vistas increíbles y un
              entorno natural incomparable.
            </h2>
          </div>
        </div>
      </div>

      <section className="  ">
        
        <hr />
        <section className="d-flex container">
          <article className="  fuente-descripcion-relax mx-2">
            <FaHotel className="iconos-servicios mb-2" />
            <p>
              Fundado en 1988, Rolling Hotel & Resort ha sido restaurado y
              renovado para ofrecer un ambiente de lujo y confort. Con 104
              habitaciones y en constante crecimiento, nuestro hotel combina la
              elegancia clásica con las comodidades modernas para brindarle una
              experiencia inolvidable.
            </p>
          </article>
          <article className="  fuente-descripcion-relax  mx-2">
            <MdHotel className="iconos-servicios mb-2" />
            <p>
              Nuestras 104 habitaciones ofrecen un ambiente acogedor y
              confortable, con calefacción central y servicio al cuarto. Cada
              habitación está diseñada para su máximo confort y descanso.
            </p>
          </article>

          <article className="boder fuente-descripcion-relax  mx-2">
            <FaThumbsUp className="iconos-servicios mb-2" />
            <p>
              {" "}
              Los invitamos a disfrutar de nuestros servicios de spa, que
              incluyen masajes, sauna y piscina climatizada. Nuestro spa es el
              lugar perfecto para relajarse y rejuvenecer cuerpo y mente.
            </p>
          </article>
        </section>

        <hr />
        <div className="container contenedor-foto-descripcion p-3 ">
          
          <div className="col-md-12">
            <img
              className="img-somos w-100 mt-2 "
              src={Portada2}
              alt="Hotel cyber"
            />
          </div>
        </div>
      </section>

      <hr className="mx-4" />

      <section className="d-flex justify-content-evenly ">
          <div className="  fuente-descripcion-relax ">
            <FaHotel className="iconos-servicios mb-2" /><h3>Habitaciontes con:</h3>
            <p>
             <ul>
                <li>Baño Privado</li>
                <li>Aire Acondicionado</li>
                <li>Sommier</li>
                <li>Tv por Cable</li>
                <li>Telefono</li>
                </ul>
            </p>
          </div>
          <div className="  fuente-descripcion-relax  ">
            <TbMassage  className="iconos-servicios mb-2" /><h3>Area de Spa:</h3>
            <p>
             <ul>
                <li>Sauna</li>
                <li>Mini Piscina</li>
                <li>Baño Turco</li>
                <li>Ducha Escocesa</li>
                </ul>
            </p>
          </div>

          <div className="fuente-descripcion-relax  ">
            <MdCasino  className="iconos-servicios mb-2" /><h3>Casino:</h3>
            <p>
             <ul>
                <li>Fichas gratis con reserva</li>
                <li>Barra de Bar</li>
                <li>Expectaculos</li>
                <li>Cambios a monedas extrangeras</li>
                </ul>
            </p>
          </div>
          <div className="fuente-descripcion-relax  ">
            <GiStarsStack  className="iconos-servicios mb-2" /><h3>Extras:</h3>
            <p>
             <ul>
                <li>Servicios de Masajes</li>
                <li>Gym</li>
                <li>Excursiones</li>
                <li>Babysitter</li>
                <li>Caja de Seguridad</li>
                <li>Y mucho mas...</li>
                </ul>
            </p>
          </div>
        </section>
        <hr className="mx-4" />
    </>
  );
};

export default QuienesSomos;
