import { Route, Routes } from "react-router-dom";
import Administrador from "../pages/Administrador";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />} />
      </Routes>
    </>
  );
};

export default RutasAdmin;
