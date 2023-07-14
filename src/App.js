import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import NewArrival from './Components/NewArrival'
import Menu from './Components/Menu'

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/AboutUs" element={<AboutUs/>}></Route>
<Route path="/NewArrival" element={<NewArrival/>}></Route>
<Route path="/Menu" element={<Menu/>}></Route>
<Route path="/contactus" element={<ContactUs/>}></Route>



  </Routes>
  
  </BrowserRouter>

    </>
  )
}

export default App
