import React from 'react'
import './Header.css'
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import {useTheme} from '../context/ThemeContextProvider'

const Header = ( {handleTheme} ) => {

  const {isDarkMode} = useTheme();

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Where in the world?</h1>
      <div className="headerRight" onClick={handleTheme}>
          {isDarkMode ? <IoSunnyOutline className='moon'/> : <BsMoon className='moon'/> }
          <h3>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</h3>
      </div>
    </header>
  )
}

export default Header
