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

//! PUT - para editar habitacion
export const editarHabitacionApi = async (id, habitacion) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitacion),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//! GET - para traer 1 habitacion por su id
export const obtenerHabitacion = async (id) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
