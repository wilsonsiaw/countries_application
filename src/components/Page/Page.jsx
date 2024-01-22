import React from 'react'
import './Page.css'
import german from '../../assets/images/german_flag.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { ThemeContext, useTheme } from '../context/ThemeContextProvider'
import Header from '../Header/Header'

const Page = () => {

    const{ isDarkMode, toggleTheme } = useTheme()

  return (
    <main className={`pageBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header handleTheme={toggleTheme}/>
        <section>
            <div className={`back ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <div className={`backContent ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                    <FaArrowLeftLong className={`backArrow ${isDarkMode} ? dark-mode : light-mode`}/>
                    <h5>Back</h5>
                </div>
            </div>
        </section>
        <section className={`section2 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className='flag'>
                <img src={german} alt="The flag of germany" />
            </div>
            <div className="infoContent">
                <h2 className='country'>Germany</h2>
                <div className="infoSection">
                    <div className='info'>
                        <h5>Native Name: <span>Germany</span></h5>
                        <h5>Population: <span>11,319,511</span></h5>
                        <h5>Region: <span>Europe</span></h5>
                        <h5>Sub Region: <span>Western Europe</span></h5>
                        <h5>Capital: <span>Berlin</span></h5>
                    </div>
                    <div className='info2'>
                        <h5>Top Level Domain: <span>.be</span></h5>
                        <h5>Currencies: <span>Euro</span></h5>
                        <h5>Languages: <span>Dutch, French, German</span></h5>
                    </div>
                </div>
                <div className={`border ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                    <h3>Border Countries:</h3>
                    <span>France</span>
                    <span>Germany</span>
                    <span>Netherlands</span>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Page
