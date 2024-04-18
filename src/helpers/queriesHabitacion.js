const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;

//! POST -  nueva habitacion */
export const crearHabitacionAPI = async (nuevaHabitacion) => {
  try {
    const respuesta = await fetch(URI_HABITACIONES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaHabitacion),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
