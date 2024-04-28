const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;

export const crearHabitacionAPI = async (nuevaHabitacion) => {
  try {
    const respuesta = await fetch(URI_HABITACIONES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("inicioHotel")).token,
      },
      body: JSON.stringify(nuevaHabitacion),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

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

export const obtenerHabitacion = async (id) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
