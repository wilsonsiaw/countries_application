import React from 'react'
import './SearchBar.css'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className='searchBarWrapper'>
        <div className="searchBar">
            <IoIosSearch className='searchImg'/>
            <input type="text" id='input' placeholder='Search for a country'/>
        </div>
    </div>
  )
}

export default SearchBar
