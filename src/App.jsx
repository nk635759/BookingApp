import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'


function App() {
  return (
    <div className='h-auto'>
      <Navbar/> 
      <Header/>
      <Home/>

      <Outlet/>
    </div>
  )
}

export default App
