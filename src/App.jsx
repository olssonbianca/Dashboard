import { Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Group from './pages/Group';
import Config from './pages/Config';


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Peliculas' element={<Movies/>}/>
        <Route path='/Usuarios' element={<Users/>}/>
        <Route path='/Participantes' element={<Group/>}/>
        <Route path='/Configuracion' element={<Config/>}/>
      </Routes>
    </>
  )
}

export default App
