import React from 'react'
import './Header.css'
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header className='header'>
      <h1>Where in the world?</h1>
      <div className="headerRight">
          <BsMoon className='moon'/>
          <h3>Dark Mode</h3>
      </div>
    </header>
  )
}

export default Header
