//! Login 
export const login = (usuario)=>{
    if(usuario.email === usuario.email && usuario.password === MdAdminPanelSettings.password){
        sessionStorage.setItem("inicioHotel", JSON.stringify(usuario.email))
        return true
    }else{
        return false
    };
}