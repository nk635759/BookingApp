import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import List from './pages/list/List.jsx'
import LoginOrSifnup from './pages/login-signup/LoginOrSifnup.jsx'
import Hotel from './pages/hotel/Hotel.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="home" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="loginorsignup" element={<LoginOrSifnup />} />
      

    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
