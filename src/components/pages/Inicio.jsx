import banner from "../../assets/Banner-rollingResort1.gif";
import SectionIConosInicio from "../common/SectionIConosInicio";
import SectionImagenInicio from "../common/SectionImagenInicio";
const Inicio = () => {
  return (
    <>
      <section className="main ">
        <article className="estilo-principal">
          <img className="img-banner img-fluid w-100" src={banner} alt="" />
          <h2 className="fuente-slogan-principal text-center mt-5 py-2">
            "Tu escape perfecto comienza aquí."
          </h2>
          <h3 className="fuente-slogan-secundario text-center">
            Aventuras, relajación y experiencias únicas te esperan.
          </h3>
         <SectionIConosInicio/>
         <hr className="mx-4" />
         <SectionImagenInicio/>
         <hr className="mx-4" />
        </article>
      </section>
    </>
  );
};

export default Inicio;
