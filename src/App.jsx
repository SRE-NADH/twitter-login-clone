import { useState } from 'react'
import './App.css'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'



function App() {

  return ( 
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/sign-up' element={<SignUpPage/>}/>
    </Routes>
      {/* <SignUpPage/> */}
      {/* <LoginPage/> */}
      </>  
  )
}

export default App
