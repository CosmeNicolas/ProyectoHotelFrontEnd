import {  Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { leerHabitacionesAPI } from "../../../helpers/queries";
import { useEffect } from "react";
/* import { useEffect } from "react"; */


const Usuario = () => {
  const usuario= JSON.parse(sessionStorage.getItem("inicioHotel")) || {};
/* console.log(usuario) */


useEffect(() => {
  listarHabitaciones()
}, [])


const listarHabitaciones =async ()=>{
  const respuesta = await leerHabitacionesAPI()
  /* console.log(respuesta) */
}

  
  
  return (
    <>
 
   <tr>
          <td>#</td>
          <td>Usuario</td>
          <td>correo@correo</td>
          <td>$5000</td>
          <td>
           {/*  {new Date(habitacionAdmin.fechaIngreso).toISOString().split("T")[0]} */}
           407
          </td>
          <td>
          disponoble
          {/*   {habitacionAdmin && habitacionAdmin.disponible
              ? "✅ Disponible"
              : "❌No Disponible"} */}
          </td>
          <td>
            Ingreso/egreso
         {/*    {new Date(habitacionAdmin.fechaSalida).toISOString().split("T")[0]} */}
      
          </td>
          <td>
            de hoy 
           
          </td>
          <td>
           🛎️
          </td>
          <td>
            <Link
              className="p-3 mx-1 btn btn-warning"
            /*   to={`/editarHabitacion/${habitacionAdmin._id}`} */
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
    
   
      </>
  )
}

export default Usuario
