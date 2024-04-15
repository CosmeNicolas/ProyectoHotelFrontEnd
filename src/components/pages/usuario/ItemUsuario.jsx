import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ItemUsuario = ({usuariosAdmin, setUsuarioAdmin}) => {
  
  return (
    <>
    {usuariosAdmin.map((usuariosAdmin)=> (
     <tr>
         <td>#</td>
              <td>Cosme Fulano</td>
              <td>admin@fulano.com</td>
              <td>cosmefulanito24</td>
              <td>123aA123*</td>
              <td>Administrador</td>
              <td>Habilitado</td>
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