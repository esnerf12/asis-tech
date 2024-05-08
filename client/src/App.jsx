import { Navigation } from './components/Navigation'
import { Welcome } from './pages/Welcome'
import { Card } from './components/Card'
import './App.css'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className='flex flex-wrap gap-5 mx-5 my-10'>
        <Card nombre={'Planificaciones'} cantidad={10}></Card>
        <Card nombre={'Horarios'} cantidad={2}></Card>
        <Card nombre={'Asignaturas'} cantidad={10}></Card>
        <Card nombre={'Secciones'} cantidad={10}></Card>
      </div>
    </>
  )
}

export default App
