import React, { useState } from 'react'
import './Filter.css'
import { useTheme } from '../context/ThemeContextProvider'

const Filter = () => {

  const {isDarkMode} = useTheme();

  return (
    <select className={`regions ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
  )
}

export default Filter
