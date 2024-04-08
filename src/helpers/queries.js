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