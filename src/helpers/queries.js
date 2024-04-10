const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;

//! Login 
const admin = {
    email: "admin@usuario.com",
    password: "A12345678a",
  };
export const login = (usuario)=>{
    if(usuario.email === admin.email && usuario.password === admin.password){
        sessionStorage.setItem("inicioHotel", JSON.stringify(usuario.email))
        return true
    }else{
        return false
    };
}

export const crearUsuario = async (usuario) => {
    try {
      const respuesta = await fetch(URI_USUARIOS + "/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };