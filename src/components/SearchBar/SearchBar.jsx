import React, { useState } from 'react'
import './SearchBar.css'
import { IoIosSearch } from "react-icons/io"
import { useTheme } from '../context/ThemeContextProvider'

const SearchBar = ( {searchCountry, setSearchCountry, handleSearch} ) => {

  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchCountry(input)
    handleSearch(input)
  } 

  return (
    <div className={`searchBarWrapper ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className={`searchBar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <IoIosSearch className={`searchImg ${isDarkMode ? 'dark-mode' : 'light-mode'}`} />
            <input value={searchCountry} onChange={handleChange} type="text" className={`input ${isDarkMode ? 'dark-mode' : 'light-mode'}`} placeholder='Search for a country' />
        </div>
    </div>
  )
}

export default SearchBar
