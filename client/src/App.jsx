import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { PlanificacionIndex } from './pages/Planificacion/PlanificacionIndex'
import { PlanificacionFormPage } from './pages/Planificacion/PlanificacionFormPage'
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
import { SeccionFormPage } from './pages/Seccion/SeccionFormPage'
import { TipoHorarioIndex } from './pages/TipoHorario/TipoHorarioIndex'
import { TipoHorarioFormPage } from './pages/TipoHorario/TipoHorarioFormPage'
import { TipoSemanaIndex } from './pages/TipoSemana/TipoSemanaIndex'
import { TipoSemanaFormPage } from './pages/TipoSemana/TipoSemanaFormPage'
import { Profile } from './pages/Profile'
import { Unexca } from './pages/Unexca'
import { Acercade } from './pages/Acercade'
import { SinAcceso } from './pages/SinAcceso'
import { useState } from "react"
import axios from 'axios'
import './App.css'

function App() {
  
  const [currentUser, setCurrentUser] = useState()

  return (
    <>
      <BrowserRouter>
        
        <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser}></Navigation>
      
        <Routes>
          <Route path='/' element={<Welcome></Welcome>}></Route>
          <Route path='/unexca' element={<Unexca></Unexca>}></Route>
          <Route path='/acercade' element={<Acercade></Acercade>}></Route>
          <Route path='/login' element={<Login setCurrentUser={setCurrentUser}></Login>}></Route>
          <Route path='/register' element={<Register setCurrentUser={setCurrentUser} ></Register>}></Route>

{/*           {
            currentUser ? (
              <> */}
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/profile' element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}></Profile>}></Route>

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
      
                <Route path='/planificacion' element={<PlanificacionIndex></PlanificacionIndex>}></Route>
                <Route path='/planificacion/create' element={<PlanificacionFormPage></PlanificacionFormPage>}></Route>
                <Route path='/planificacion/:id' element={<PlanificacionFormPage></PlanificacionFormPage>}></Route>
      
                <Route path='/seccion' element={<SeccionIndex></SeccionIndex>}></Route>
                <Route path='/seccion/create' element={<SeccionFormPage></SeccionFormPage>}></Route>
                <Route path='/seccion/:id' element={<SeccionFormPage></SeccionFormPage>}></Route>
      
                <Route path='/tipo_horario' element={<TipoHorarioIndex></TipoHorarioIndex>}></Route>
                <Route path='/tipo_horario/create' element={<TipoHorarioFormPage></TipoHorarioFormPage>}></Route>
                <Route path='/tipo_horario/:id' element={<TipoHorarioFormPage></TipoHorarioFormPage>}></Route>

                <Route path='/tipo_semana' element={<TipoSemanaIndex></TipoSemanaIndex>}></Route>
                <Route path='/tipo_semana/create' element={<TipoSemanaFormPage></TipoSemanaFormPage>}></Route>
                <Route path='/tipo_semana/:id' element={<TipoSemanaFormPage></TipoSemanaFormPage>}></Route>
              {/* </>
            ) : (
              <Route path='/*' element={<SinAcceso></SinAcceso>}></Route>
            )
          } */}
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
