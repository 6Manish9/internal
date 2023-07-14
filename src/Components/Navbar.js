import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Outlet,Link} from "react-router-dom"

const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <img src="https://tse2.mm.bing.net/th?id=OIP.Jd-H-LHiVSkNBlLR65nuVwHaEK&pid=Api&P=0&h=180" height="50px"></img>
        <div>
            <div>
        <Link to="/Delicious Food" class="navbar-brand"></Link>
        </div>
            
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/AboutUs">AboutUs</Link>
                </li>
                <li className="nav-item">
                <Link to="/NewArrival">NewArrival</Link>
                </li>
                <li className="nav-item">
                <Link to="/Menu">Menu</Link>
                </li>
                <li className="nav-item">
                <Link to="/ContactUs">ContactUs</Link>
                </li>
            </ul>
        </div>
        </div>
        </nav>
       < Outlet />
            
   </>

  )
}

export default Navbar
