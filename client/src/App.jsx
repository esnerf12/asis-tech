import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Navigation></Navigation>
      
        <Routes>
          <Route path='/' element={<Welcome></Welcome>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
