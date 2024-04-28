import { Link } from "react-router-dom";
import error404imagen from "../../assets/error404.png";

const Error404 = () => {
  return (
    <section className="text-center">
      <img
        src={error404imagen}
        alt="error 404 del hotel"
        className="img-fluid mt-5"
        width={750}
      />
      <div className="mt-4 texto-error404">
        <h2 className="display-4">¡Oh no, parece que llegaste al Hotel 404!</h2>
        <p className="mt-4">
          Lo sentimos, parece que te haz perdido en el camino. Pero no te
          preocupes, estás a punto de descubrir un lugar lleno de sorpresas y
          aventuras. Mientras exploras nuestro hotel virtual, asegúrate de
          disfrutar del viaje y no dudes en contactarnos si necesitas ayuda.
        </p>
        <p>¡Esperamos que tu estadía aquí sea inolvidable!</p>
      </div>
      <div>
        <Link className="m-4 btn btn-succes boton-error404" to={"/"}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default Error404;
