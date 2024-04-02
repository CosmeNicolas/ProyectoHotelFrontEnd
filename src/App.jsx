import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import NavBar from './components/common/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route>
      {/* falta agregar la pagina de inicio y en su clase contenedora colocar la clase main para bajar el footer */}
    </Route>
   </Routes>
   </BrowserRouter>

  )
}

export default App
