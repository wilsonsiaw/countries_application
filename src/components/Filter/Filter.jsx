import React, { useState } from 'react'
import './Filter.css'
import { useTheme } from '../context/ThemeContextProvider'

const Filter = ( {onFilterChange} ) => {

  const {isDarkMode} = useTheme();

  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (e) => {
    const selected = e.target.value;
    setSelectedRegion(selected);
    onFilterChange(selected);
  }

  return (
    <select className={`regions ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      value={selectedRegion}
      onChange={handleChange}
    >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
  )
}

export default Filter
