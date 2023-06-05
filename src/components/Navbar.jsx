import React from 'react'
import Logo from './Logo'
import './navbar.css'
import NavButton from './NavButton'

const Navbar = () =>{
    return(
        <nav className='navbar wrapper'>
         <ul className='navList'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
         </ul>
         <Logo/>
         <NavButton/>
        </nav>
    )
}

export default Navbar;