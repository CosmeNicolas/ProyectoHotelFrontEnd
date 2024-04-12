
import { Navigate} from 'react-router-dom'

const RutasProtegidas = ({children}) => {
    const admin = JSON.parse(sessionStorage.getItem("inicioHotel")) || null
    //si es el administrador
    if(!admin || admin.rol!== 'Administrador'){
        return <Navigate to='/login' />
    }else{
        //si es el administrador
        return children
    }
}

export default RutasProtegidas