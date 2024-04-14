import relaxRoom from "../../assets/habitacion3.jpeg";

const SectionImagenInicio = () => {
  return (
      <section className="d-flex contenedor-foto-descripcion">
        <img
          className="imagen-relax-inicio"
          src={relaxRoom}
          alt="habitacion-hotel"
        />
        <div className="d-flex flex-column justify-content-center">
      <h2 className="fuente-titulo-relax text-center  my-4">
        "Relájate, recarga y revive en nuestro paraíso de paz."
      </h2>
      <h4 className="fuente-descripcion-relax mx-2 mt-2">
        Sumérgete en nuestro oasis de serenidad, donde cada rincón está diseñado
        para tu máximo descanso y bienestar.
      </h4>
        </div>
      </section>
    
  );
};

export default SectionImagenInicio;
