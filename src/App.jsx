
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {

  return (
    <>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
    </>
  )
}

export default App
