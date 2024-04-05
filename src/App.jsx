import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
<<<<<<< HEAD
import './QuienesSomos.css'
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import QuienesSomos from './components/pages/QuienesSomos';
=======
import './Administrador.css'
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import Administrador from './components/pages/Administrador';
>>>>>>> 0d0567e0d2c2c8ee92aad3b0b6ff68342421d3d4
function App() {

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route exact path='/' element={<Inicio/>}/>
<<<<<<< HEAD
    <Route exact path='/QuienesSomos' element={<QuienesSomos/>}/>
=======
    <Route exact path='/administrador' element={<Administrador/>}/>
>>>>>>> 0d0567e0d2c2c8ee92aad3b0b6ff68342421d3d4
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
