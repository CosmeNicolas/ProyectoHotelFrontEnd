import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/common/NavBar";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import QuienesSomos from "./components/pages/QuienesSomos";
import Login from "./components/pages/Login";
import Habitaciones from "./components/pages/Habitaciones";
import FormularioUsuario from "./components/pages/usuario/FormularioUsuario";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./QuienesSomos.css";
import "./Administrador.css";
import Servicios from "./components/pages/Servicios";
import Contacto from "./components/pages/Contacto";
import "./Usuario.css";
import Galeria from "./components/pages/Galeria";
import FormularioHabitacion from "./components/pages/habitaciones/FormularioHabitacion";
import Reserva from "./components/pages/usuario/Reserva";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("inicioHotel")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <NavBar
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="*" element={<Error404 />} />
        <Route exact path="/Habitaciones" element={<Habitaciones />} />
        <Route exact path="/QuienesSomos" element={<QuienesSomos />} />
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        />
        <Route
          exact
          path="/crearHabitacion"
          element={
            <FormularioHabitacion
              titulo="Crear Habitación"
              textoBoton="Crear"
              modoCrear={true}
            ></FormularioHabitacion>
          }
        ></Route>
        <Route
          exact
          path="/editarHabitacion/:id"
          element={
            <FormularioHabitacion
              titulo="Editar Habitación"
              textoBoton="Guardar Cambios"
              modoCrear={false}
            ></FormularioHabitacion>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        />
        <Route exact path="/CrearUsuario" element={<FormularioUsuario />} />
        <Route exact path="/servicios" element={<Servicios />} />
        <Route exact path="/reserva/:id" element={<Reserva 
        setUsuarioLogueado={setUsuarioLogueado}
        reserva={true} titulo="Nueva Reserva"
        />} />

        <Route exact path="/contacto"  element={<Contacto />} />

        <Route exact path="/galeria" element={<Galeria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
