import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { PlanificacionIndex } from './pages/Planificacion/PlanificacionIndex'
import { HorarioIndex } from './pages/Horario/HorarioIndex'
import { HorarioFormPage } from './pages/Horario/HorarioFormPage'
import { AsignaturaIndex } from './pages/Asignatura/AsignaturaIndex'
import { AsignaturaFormPage } from './pages/Asignatura/AsignaturaFormPage'
import { AsistenciaIndex } from './pages/Asistencia/AsistenciaIndex'
import { AsistenciaFormPage } from './pages/Asistencia/AsistenciaFormPage'
import { AulaIndex } from './pages/Aula/AulaIndex'
import { AulaFormPage } from './pages/Aula/AulaFormPage'
import { ClaseIndex } from './pages/Clase/ClaseIndex'
import { ClaseFormPage } from './pages/Clase/ClaseFormPage'
import { EstudianteIndex } from './pages/Estudiante/EstudianteIndex'
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

          <Route path='/asignatura' element={<AsignaturaIndex></AsignaturaIndex>}></Route>
          <Route path='/asignatura/create' element={<AsignaturaFormPage></AsignaturaFormPage>}></Route>
          <Route path='/asignatura/:id' element={<AsignaturaFormPage></AsignaturaFormPage>}></Route>

          <Route path='/asistencia' element={<AsistenciaIndex></AsistenciaIndex>}></Route>
          <Route path='/asistencia/create' element={<AsistenciaFormPage></AsistenciaFormPage>}></Route>
          <Route path='/asistencia/:id' element={<AsistenciaFormPage></AsistenciaFormPage>}></Route>

          <Route path='/aula' element={<AulaIndex></AulaIndex>}></Route>
          <Route path='/aula/create' element={<AulaFormPage></AulaFormPage>}></Route>
          <Route path='/aula/:id' element={<AulaFormPage></AulaFormPage>}></Route>

          <Route path='/clase' element={<ClaseIndex></ClaseIndex>}></Route>
          <Route path='/clase/create' element={<ClaseFormPage></ClaseFormPage>}></Route>
          <Route path='/clase/:id' element={<ClaseFormPage></ClaseFormPage>}></Route>

          <Route path='/estudiante' element={<EstudianteIndex></EstudianteIndex>}></Route>

          <Route path='/horario' element={<HorarioIndex></HorarioIndex>}></Route>
          <Route path='/horario/create' element={<HorarioFormPage></HorarioFormPage>}></Route>
          <Route path='/horario/:id' element={<HorarioFormPage></HorarioFormPage>}></Route>

          <Route path='/seccion' element={<SeccionIndex></SeccionIndex>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
