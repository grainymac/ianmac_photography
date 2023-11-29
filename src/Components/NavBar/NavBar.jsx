import React from 'react'
import './NavBar.sass'
import logo from './assets/navbar_logo.png'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo-title'>
                <img src={logo} alt='logo' className='navbar-logo'/>
                <p className='navbar-title'>__ian mac__photography</p>
            </div>
            <nav className='navbar-link-container'>
                <button className='navbar-button'>about</button>
                <button className='navbar-button'>gallery</button>
                <button className='navbar-button'>projects</button>
                <button className='navbar-button'>contact</button>
            </nav>
        </div>
    )
}

export default NavBar