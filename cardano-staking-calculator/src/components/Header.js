import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className='Header'>
        <NavLink exact to='/'>
            home
        </NavLink>  
        <NavLink to='/about'>
            about
        </NavLink>
    </div>
  )
}

export default Header;