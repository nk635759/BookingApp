import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'


function App() {
  return (
    <div>
      <Navbar/> 
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
