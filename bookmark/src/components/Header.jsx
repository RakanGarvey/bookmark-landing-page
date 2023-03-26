import React from 'react'
import logo from './images/logo-bookmark.svg'
import menu from './images/menu.png'
import { ReactDOM } from 'react-dom'
import { useState,useEffect } from 'react'

const Header = () => {
  // const [showMenu,setShowMenu] = useState(false)
  // useEffect(()=>{
  //   const myMenu = document.createElement('div')
  //   myMenu.className = 'my-menu'
  //   document.body.appendChild(myMenu)
  // }, [])
  return (
    <>
    <div className='header'>
    {/* {showMenu && <div className='my-menu'></div>} */}
        <img src={logo} className='logo'/>
        <div className='btns'>
        <ul className='ull'>
            <li className='li1'>FEATURE</li>
            <li className='li1'>PRICING</li>
            <li className='li1'>CONTACT</li>
        </ul>
        <button className='login-btn'>LOGIN</button>
        <img src={menu} alt="" className='menu' />
        </div>
    </div>
    
    </>
  )
}

export default Header