import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { eliminarUsuarioAPI, leerUsuariosAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemUsuario = ({ usuariosAdmin, setUsuarioAdmin }) => {
  //!-------------------- Funciones -------------------------
  const eliminarUsuario = async (id, usuario) => {
    Swal.fire({
      html: `¿Estas seguro que deseas borrar al usuario <span class="text-danger">${usuario}</span> ?`,
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
        const respuesta = await eliminarUsuarioAPI(id);
        if (respuesta.status === 200) {
          const usuariosActualizados = await leerUsuariosAPI();
          setUsuarioAdmin(usuariosActualizados);
          Swal.fire({
            title: "Borrado!",
            html: `Su usuario: <span class="text-danger">${usuario}</span> ha sido borrado!`,
            icon: "success",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
        } else {
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

  //!-------------------- Maquetado -------------------------
  return (
    <>
      {usuariosAdmin.map((usuarioAdmin) => (
        <tr key={usuarioAdmin._id}>
          <td>#</td>
          <td>{usuarioAdmin.nombreCompleto}</td>
          <td>{usuarioAdmin.email}</td>
          <td>{usuarioAdmin.usuario}</td>
          <td>{usuarioAdmin.rol}</td>
          <td>{usuarioAdmin.suspendido ? "Desabilitado❌" : "Habilitado✅"}</td>
          <td>
          <Link
              className="p-3 mx-1 btn btn-warning"
              to={`/administrador/editarUsuario/${usuarioAdmin._id}`}
            >
              <FaEdit />
            </Link>
            <Button
              variant="danger"
              className="p-3 mx-1 text-center"
              onClick={() =>
                eliminarUsuario(usuarioAdmin._id, usuarioAdmin.usuario)
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

export default ItemUsuario;
