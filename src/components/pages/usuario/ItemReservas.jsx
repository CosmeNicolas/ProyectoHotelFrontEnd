import {  Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { leerHabitacionesAPI } from "../../../helpers/queries";
import { useEffect, useState } from "react";



const ItemReservas = ({usuariosAdmin}) => {
const [mostrarReservas, setMostrarReservas] = useState([])
console.log(usuariosAdmin)

useEffect(() => {
  listarHabitaciones()
}, [])


const listarHabitaciones = async()=>{
  const reservas = await leerHabitacionesAPI()
  setMostrarReservas(reservas)
  console.log(reservas)
}
  return (
    <>
    {
      mostrarReservas.map((reserva)=>(

   <tr key={reserva._id}>
         
          <td>{reserva.email}</td>
          <td>{reserva.precio}</td>
          <td>
           {reserva.numero}
          </td>
          <td>
          {reserva.disponible ? 'Disponible ✅' : 'No Disponible ❌'}
          </td>
          <td>
          {new Date(reserva.fechaIngreso).toISOString().split("T")[0]}
          </td>
          <td>
          {new Date(reserva.fechaSalida).toISOString().split("T")[0]}
          </td>
          <td>
          <img
              className="imagen-habitacion-admin"
              src={reserva.imagen}
              alt="imagen-habitacion"
            />
          </td>
          <td>
          <Link
              className="p-3 mx-1 btn btn-warning"
              to={`/editarHabitacion/${reserva._id}/`}
            >
              <FaEdit />
            </Link>
            <Button
              variant="danger"
              className="p-3 mx-1"
            /*   onClick={() =>
                handleEliminar(habitacionAdmin._id, habitacionAdmin.numero)
              } */
            >
              <MdDelete />
            </Button>
          </td>
        </tr>
      ))

    }
    
   
      </>
  )
}

export default ItemReservas
