import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import { Navbar, Footer } from './components';
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)