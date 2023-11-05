import { Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Group from './pages/Group';
import Config from './pages/Config';
import { UserProvider } from './Context/Context';


function App() {
  
  return (
    <>
    <UserProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Peliculas' element={<Movies/>}/>
        <Route path='/Usuarios' element={<Users/>}/>
        <Route path='/Participantes' element={<Group/>}/>
        <Route path='/Configuracion' element={<Config/>}/>
      </Routes>
      </UserProvider>
    </>
  )
}

export default App
