import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
        <nav className='navbar_nav'>
            <h3 className='nav_brand'>
                <Link to="/">
                    <i className='fa-solid fa-video'></i> TV SHOW SEARCH
                </Link>
            </h3>
            <ul className='nav_links'>
                <li className='links_link'>
                    <Link to = "/">HOME</Link>
                </li>
                <li className='links_link'>
                    <Link to ="/about">ABOUT</Link>
                </li>
            </ul>
        
      
    </nav>
    </div>
    </div>
  )
}

export default Navbar
