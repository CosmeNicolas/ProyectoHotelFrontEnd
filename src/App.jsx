import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import NavBar from './components/common/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Inicio from './components/pages/Inicio';
function App() {

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route exact path='/' element={<Inicio/>}/>
   </Routes>
   </BrowserRouter>

  )
}

export default App
