import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ItemUsuario = ({usuariosAdmin, setUsuarioAdmin}) => {
  
  return (
    <>
    {usuariosAdmin.map((usuariosAdmin)=> (
     <tr key={usuariosAdmin._id}> 
         <td>#</td>
              <td>{usuariosAdmin.nombreCompleto}</td>
              <td>{usuariosAdmin.email}</td>
              <td>{usuariosAdmin.usuario}</td>
          
              <td>{usuariosAdmin.rol}</td>
              <td>{usuariosAdmin.suspendido? 'Desabilitado❌' : 'Habilitado✅'}</td>
                <td>
                <Button variant="warning" className="p-3 mx-1" >
                <FaEdit  />
                </Button>
                <Button variant="danger" className="p-3 mx-1 text-center">
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