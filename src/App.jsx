import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './QuienesSomos.css'
import Inicio from './components/pages/Inicio';
import Footer from './components/common/Footer';
import QuienesSomos from './components/pages/QuienesSomos';
import './Administrador.css'
import Administrador from './components/pages/Administrador';
function App() {

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route exact path='/' element={<Inicio/>}/>
    <Route exact path='/QuienesSomos' element={<QuienesSomos/>}/>
    <Route exact path='/administrador' element={<Administrador/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
