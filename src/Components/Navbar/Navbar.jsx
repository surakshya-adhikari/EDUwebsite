import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>program</li>
            <li>About us</li>
            <li>College</li>
            <li>Testimonals</li>
            <li ><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar