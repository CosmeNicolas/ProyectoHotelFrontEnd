import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const admin = JSON.parse(sessionStorage.getItem("inicioHotel")) || {};
  if (!admin || admin.rol !== "Administrador") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default RutasProtegidas;
