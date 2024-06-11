import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { PlanificacionIndex } from './pages/Planificacion/PlanificacionIndex'
import { HorarioIndex } from './pages/Horario/HorarioIndex'
import { AsignaturaIndex } from './pages/Asignatura/AsignaturaIndex'
import { AsignaturaFormPage } from './pages/Asignatura/AsignaturaFormPage'
import { SeccionIndex } from './pages/Seccion/SeccionIndex'
import { useState } from 'react'
import './App.css'

function App() {
  
  const [currentUser, setCurrentUser] = useState()

  return (
    <>
      <BrowserRouter>
        
        <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser}></Navigation>
      
        <Routes>
          <Route path='/' element={<Welcome></Welcome>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login setCurrentUser={setCurrentUser}></Login>}></Route>
          <Route path='/register' element={<Register setCurrentUser={setCurrentUser} ></Register>}></Route>
          <Route path='/planificacion' element={<PlanificacionIndex></PlanificacionIndex>}></Route>
          <Route path='/horario' element={<HorarioIndex></HorarioIndex>}></Route>
          <Route path='/asignatura' element={<AsignaturaIndex></AsignaturaIndex>}></Route>
          <Route path='/asignatura/create' element={<AsignaturaFormPage></AsignaturaFormPage>}></Route>
          <Route path='/asignatura/:id' element={<AsignaturaFormPage></AsignaturaFormPage>}></Route>
          <Route path='/seccion' element={<SeccionIndex></SeccionIndex>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
