import { Link } from "react-router-dom";
import {
  leerHabitacionesAPI,
  eliminarHabitacionAPI,
} from "../../../helpers/queries";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ItemReservas = ({ usuariosAdmin, actualizarHabitaciones }) => {
  const [mostrarReservas, setMostrarReservas] = useState([]);

  useEffect(() => {
    listarHabitaciones();
  }, []);

  const eliminarReserva = async (habitacionId) => {
    Swal.fire({
      html: `¿Estas seguro que deseas borrar a la Reserva?`,
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
            html: `Su reserva ha sido borrada!`,
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

  const listarHabitaciones = async () => {
    const reservas = await leerHabitacionesAPI();
    setMostrarReservas(reservas);
  };
  return (
    <>
      {mostrarReservas.map((reserva) => (
        <tr key={reserva._id}>
          <td>{reserva.email}</td>
          <td>{reserva.precio}</td>
          <td>{reserva.numero}</td>
          <td>{reserva.disponible ? "Disponible ✅" : "No Disponible ❌"}</td>
          <td>{new Date(reserva.fechaIngreso).toISOString().split("T")[0]}</td>
          <td>{new Date(reserva.fechaSalida).toISOString().split("T")[0]}</td>
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
              onClick={() => {
                eliminarReserva(reserva._id);
              }}
            >
              <MdDelete />
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ItemReservas;
