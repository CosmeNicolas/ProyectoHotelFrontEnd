import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./QuienesSomos.css";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import QuienesSomos from "./components/pages/QuienesSomos";
import "./Administrador.css";
import Administrador from "./components/pages/Administrador";
import Login from "./components/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="*" element={<Error404 />} />
        <Route exact path="/QuienesSomos" element={<QuienesSomos />} />
        <Route exact path="/administrador" element={<Administrador />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
