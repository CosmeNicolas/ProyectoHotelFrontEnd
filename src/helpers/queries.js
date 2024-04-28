const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;
const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;
const URI_USUARIOS_GET = import.meta.env.VITE_API_USUARIOS_GET;

export const crearUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS + "registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/* //?Habitaciones */
export const leerHabitacionesAPI = async () => {
  try {
    const respuesta = await fetch(URI_HABITACIONES);
    const listarHabitaciones = await respuesta.json();
    return listarHabitaciones;
  } catch (error) {
    console.error(error);
  }
};

export const eliminarHabitacionAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("inicioHotel")).token,
      },
    });
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.error(error);
  }
};

/* //?Usuarios */
export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URI_USUARIOS_GET);
    const listarUsuarios = await respuesta.json();
    return listarUsuarios;
  } catch (error) {
    console.error(error);
  }
};


export const eliminarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS_GET}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("inicioHotel")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const editarUsuarioApi = async (id, usuario) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS_GET}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    console.error(respuesta)
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS_GET}/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
