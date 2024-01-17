import React from 'react'
import './Card.css'
import { useTheme } from '../context/ThemeContextProvider'

const Card = (props) => {

  const { isDarkMode } = useTheme();

  return (
    <main className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <img src={props.flag} alt="flags of countries" className='flag'/>
        <h3>{props.name}</h3>
        <h5>Population: <span>{props.population}</span></h5>
        <h5>Region: <span>{props.region}</span></h5>
        <h5>Capital: <span>{props.capital}</span></h5>
    </main>
  )
}

export default Card
