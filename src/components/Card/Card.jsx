import React from 'react'
import './Card.css'
import flag from '../../assets/images/german_flag.png'

const Card = () => {
  return (
    <main className='main'>
        <img src={flag} alt="flags of countries" className='flag'/>
        <h3>Germany</h3>
        <h5>Population: <span>81,770,900</span></h5>
        <h5>Region: <span>Europe</span></h5>
        <h5>Capital: <span>Berlin</span></h5>
    </main>
  )
}

export default Card
