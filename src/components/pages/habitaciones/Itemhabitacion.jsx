import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ItemHabitacion = ({habitacionesAdmin, setHabitacionesAdmin}) => {
  console.log(habitacionesAdmin)
  return (
    <>
    { habitacionesAdmin.map((habitacionAdmin)=>(
      <tr key={habitacionAdmin._id}>
           <td>#</td>
                <td>{habitacionAdmin.numero}</td>
                <td>{habitacionAdmin.tipo}</td>
                <td>${habitacionAdmin.precio}</td>
                <td>{new Date(habitacionAdmin.fechaIngreso).toISOString().split('T')[0]}</td>
                <td>{new Date(habitacionAdmin.fechaSalida).toISOString().split('T')[0]}</td>
                <td>{habitacionAdmin && habitacionAdmin.disponible ? '✅ Disponible' : '❌No Disponible'}</td>
                <td>
                  <img className="imagen-habitacion-admin" src={habitacionAdmin.imagen} alt="" />
                  </td>
                  <td>
                  <Button variant="warning" className="p-3 mx-1" >
                  <FaEdit  />
                  </Button>
                  <Button variant="danger" className="p-3 mx-1">
                  <MdDelete />
                  </Button>
                  </td>
      </tr>
    ))
   }
     </>
  )
}

export default ItemHabitacion