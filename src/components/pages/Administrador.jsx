import { Container, Table, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import ItemHabitacion from "./habitaciones/Itemhabitacion";
import ItemUsuario from "./usuario/ItemUsuario";
import { leerHabitacionesAPI } from "../../helpers/queries";
import { leerUsuariosAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import HashLoader from "react-spinners/HashLoader";

const Administrador = () => {
  const [habitacionesAdmin, setHabitacionesAdmin] = useState([]);
  const [usuariosAdmin, setUsuarioAdmin] = useState([]);
  const [cargando, setCargando] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      cargarDatosHotel()
    }, 2000);
  }, []);

  const cargarDatosHotel = async()=>{
    try {
      await Promise.all([mostrarHabitacionesAdmin(), mostrarUsuariosAdmin()])
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ocurrió un error en el servidor",
        text: "Intente realizar esta acción en unos minutos",
        icon: "error",
      });
      
    }
    setCargando(false)
  }
  
  const mostrarHabitacionesAdmin = async () => {
    try {
      setCargando(true);
      const respuesta = await leerHabitacionesAPI();

      if (respuesta === 200) {
        const mostrarHabitaciones = await respuesta;
        setHabitacionesAdmin(mostrarHabitaciones);
      }
      const mostrarHabitaciones = await respuesta;
      setHabitacionesAdmin(mostrarHabitaciones);
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error en el servidor",
        text: "Intente realizar esta acción en unos minutos",
        icon: "error",
      });
      setCargando(false);
    }
  };

  const actualizarHabitaciones = async () => {
    try {
      const habitaciones = await leerHabitacionesAPI();
      setHabitacionesAdmin(habitaciones);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la lista de habitaciones",
        icon: "error",
      });
    }
  };

  const mostrarUsuariosAdmin = async () => {
    try {
      setCargando(true);
      const respuesta = await leerUsuariosAPI();
      
      if (respuesta === 200) {
        const mostrarUsuarios = await respuesta;
        setUsuarioAdmin(mostrarUsuarios);
      }
      const mostrarUsuarios = await respuesta;
      setUsuarioAdmin(mostrarUsuarios);
    } catch (error) {
     
      Swal.fire({
        title: "Ocurrió un error en el servidor",
        text: "Intente realizar esta acción en unos minutos",
        icon: "error",
      });
      setCargando(false);
    }
  };
  
  const actualizarUsuarios = async () => {
    try {
      const usuarios = await leerUsuariosAPI();
      setUsuarioAdmin(usuarios);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la lista de usuarios",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Container fluid className="contenedorAdministrador p-1">
        <div className="section-administrador d-flex justify-content-around pt-5 w-100 ">
          <h1 className=" titulo-administrador text-light">
            Administrador Rolling Resort
          </h1>
        </div>

        <br />

        {/* Tabla Habitaciones */}
        <article className="mx-3">
          <Tabs variant="underline" fill defaultActiveKey="habitaciones">
            <Tab eventKey="habitaciones" title="Habitaciones">
              <div className="d-flex align-items-center justify-content-between my-2">
                <h2 className="fs-1 fw-bold text-center titulos">
                  Habitaciones
                </h2>
                <Link className="btn color-boton-admnistrador my-1 btn-dark" to={"/crearHabitacion"}>
                  <BsFillCalendar2PlusFill />
                </Link>
              </div>
              <hr />
              {
                cargando ? (
                <div className="text-center d-flex justify-content-center">
                 <HashLoader 
            color="#60195D"
            cssOverride={{}}
          />
                </div>
               ) : (<Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nro Habitacion</th>
              <th>Tipo de Habitación</th>
              <th>Precio</th>
              <th>Fecha de Ingreso</th>
              <th>Fecha de Salida</th>
              <th>Disponible</th>
              <th>Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemHabitacion
              habitacionesAdmin={habitacionesAdmin}
              setHabitacionesAdmin={setHabitacionesAdmin}
              actualizarHabitaciones={actualizarHabitaciones}
            />
          </tbody>
        </Table>)
          }
            </Tab>

            {/* Tabla Ususarios */}
            <Tab eventKey="usuarios" title="Usuarios">
              <div className="d-flex align-items-center justify-content-between my-2">
                <h2 className="fs-1 fw-bold titulos">Usuarios</h2>
              </div>
              <hr />
              {
                 cargando ? (<HashLoader
            color="#60195D"
            cssOverride={{}}
          />) : (<Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Cod</th>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <ItemUsuario
                    usuariosAdmin={usuariosAdmin}
                    setUsuarioAdmin={setUsuarioAdmin}
                    actualizarUsuarios={actualizarUsuarios}
                  />
                </tbody>
              </Table>)
              }
              
            </Tab>
          </Tabs>
        </article>
      </Container>
      <hr />
    </>
  );
};

export default Administrador;
