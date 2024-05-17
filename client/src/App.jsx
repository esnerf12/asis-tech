import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
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
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
