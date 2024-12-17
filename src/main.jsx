import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import LoginOrSifnup from './pages/login-signup/LoginOrSifnup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="loginorsignup" element={<LoginOrSifnup />} />
      

    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
