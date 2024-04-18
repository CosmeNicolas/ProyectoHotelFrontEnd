import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { eliminarUsuarioAPI, leerUsuariosAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";


const ItemUsuario = ({usuariosAdmin, setUsuarioAdmin, actualizarUsuarios}) => {

  const eliminarUsuario = async () => {
    const respuesta = await eliminarUsuarioAPI(usuariosAdmin._id);
      if(respuesta.status === 200){
        const usuarioActualizado = leerUsuariosAPI()
        setUsuarioAdmin(usuarioActualizado)
        console.log(usuarioActualizado)
      }else{
        console.log("tenemos un error")
      }
    }
  


  return (
    <>
    {usuariosAdmin.map((usuarioAdmin)=> (
     <tr key={usuarioAdmin._id}> 
         <td>#</td>
              <td>{usuarioAdmin.nombreCompleto}</td>
              <td>{usuarioAdmin.email}</td>
              <td>{usuarioAdmin.usuario}</td>
          
              <td>{usuarioAdmin.rol}</td>
              <td>{usuarioAdmin.suspendido? 'Desabilitado❌' : 'Habilitado✅'}</td>
                <td>
                <Link variant="warning" className="p-3 mx-1 btn btn-warning" to={`/administrador/editarUsuario/${usuarioAdmin._id}`}>
                <FaEdit  />
                </Link>
                <Button variant="danger" className="p-3 mx-1 text-center" onClick={eliminarUsuario}>
                <MdDelete />
                </Button>
                </td>
    </tr>
))
    }
    </>
  )
}

export default ItemUsuario