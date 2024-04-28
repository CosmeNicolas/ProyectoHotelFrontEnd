import { eliminarHabitacionAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ItemHabitacion = ({habitacionesAdmin, actualizarHabitaciones}) => {
  const handleEliminar = async (habitacionId, numero) => {
    Swal.fire({
      html: `¿Estas seguro que deseas borrar a la habitación <span class="text-danger">${numero}</span> ?`,
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: "contenedor-sweet",
      },
      confirmButtonColor: "#B79B63",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await eliminarHabitacionAPI(habitacionId);
          Swal.fire({
            title: "Borrado!",
            html: `Su habitación: <span class="text-danger">${numero}</span> ha sido borrada!`,
            icon: "success",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
          actualizarHabitaciones();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Ops!",
            text: `Se produjo un error intente mas tarde`,
            icon: "error",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
        }
      }
    });
  };

  return (
    <>
      {habitacionesAdmin.map((habitacionAdmin) => (
        <tr key={habitacionAdmin._id}>
          <td>#</td>
          <td>{habitacionAdmin.numero}</td>
          <td>{habitacionAdmin.tipo}</td>
          <td>${habitacionAdmin.precio}</td>
          <td>
            {new Date(habitacionAdmin.fechaIngreso).toISOString().split("T")[0]}
          </td>
          <td>
            {new Date(habitacionAdmin.fechaSalida).toISOString().split("T")[0]}
          </td>
          <td>
            {habitacionAdmin && habitacionAdmin.disponible
              ? "✅ Disponible"
              : "❌No Disponible"}
          </td>
          <td>
            <img
              className="imagen-habitacion-admin"
              src={habitacionAdmin.imagen}
              alt="Imagen-habitación"
            />
          </td>
          <td>
            <Link
              className="p-3 mx-1 btn btn-warning"
              to={`/editarHabitacion/${habitacionAdmin._id}/`}
            >
              <FaEdit />
            </Link>
            <Button
              variant="danger"
              className="p-3 mx-1"
              onClick={() =>
                handleEliminar(habitacionAdmin._id, habitacionAdmin.numero)
              }
            >
              <MdDelete />
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ItemHabitacion;
