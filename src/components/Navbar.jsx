import React,{useState} from 'react'
import Logo from './Logo'
import './navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import NavButton from './NavButton'

const Navbar = () =>{
    const[menuToggle,setMenuToggle] = useState(false)
    const mobileList =(
        <ul className={`mobileList ${menuToggle ? "active" : null}`} onClick={()=>setMenuToggle(false)}>
            <li >Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
    return(
        
        <nav className='navbar wrapper'>
         <ul className='navList'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
         </ul>
         <Logo/>
       <div className="navbtn">
       <NavButton className="navbtn"/>
       </div>
         <div className='menu-icon' onClick={()=>setMenuToggle(!menuToggle)}>
            {!menuToggle ? <FaBars style={{fontSize:"22px"}}/> : <FaTimes style={{fontSize:"22px"}}/>}
         </div>
         {
            menuToggle && mobileList
         }
        </nav>
        
       
    )
}   

export default Navbar;