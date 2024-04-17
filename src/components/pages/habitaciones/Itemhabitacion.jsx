import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { eliminarHabitacionAPI } from "../../../helpers/queries";


const ItemHabitacion = ({habitacionesAdmin, setHabitacionesAdmin, actualizarHabitaciones}) => {
  console.log(habitacionesAdmin)

  const handleEliminar = async (habitacionId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminada, no podrás recuperar esta habitación",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await eliminarHabitacionAPI(habitacionId);
          Swal.fire("¡Habitación eliminada!", "", "success");
          actualizarHabitaciones();
        } catch (error) {
          console.error(error);
          Swal.fire("Error", "No se pudo eliminar la habitación", "error");
        }
      }
    });
  };

  
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
                  <Button variant="danger" className="p-3 mx-1" onClick={() => handleEliminar(habitacionAdmin._id)}>
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