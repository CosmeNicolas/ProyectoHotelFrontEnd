const URI_RESERVAS = import.meta.env.VITE_API_RESERVAS;

export const crearReservaAPI = async (nuevaReserva) => {
    try {
      const respuesta = await fetch(URI_RESERVAS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaReserva),
      });
      return respuesta;
    } catch (error) {
      console.error(error);
    }
  };

  //? obtener reserva 
  export const obtenerReserva = async (id) => {
    try {
      const respuesta = await fetch(`${URI_RESERVAS}/${id}`);
      return respuesta;
    } catch (error) {
      console.error(error);
    }
  };