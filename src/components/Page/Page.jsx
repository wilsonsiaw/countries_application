import React, {useState, useEffect} from 'react'
import './Page.css'
import german from '../../assets/images/german_flag.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { ThemeContext, useTheme } from '../context/ThemeContextProvider'
import Header from '../Header/Header'
import { useParams, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const Page = () => {

    // State for the dark mode and toggle
    const{ isDarkMode, toggleTheme } = useTheme()

    // Parameter for setting routes
    const { id } = useParams()

    // The state for the API call
    const [countryCard, setCountryCard] = useState(null);
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false)

    // A function that fetches the data for the detailed page
    useEffect(() => {
        // check the id
        console.log(id)
        const getDetailedData = async () => {
            try {
                // fetch data from 2 endpoints concurrently
                const [cardResponse, countryResponse] = await Promise.all([
                    fetch(`https://restcountries.com/v3.1/alpha/${id}`),
                    fetch('https://restcountries.com/v3.1/all'),
                ])

                // extract the JSON body content from the response
                const [cardData, countryData] = await Promise.all([
                    cardResponse.json(),
                    countryResponse.json(),
                ]);

                // update the state with fetched data
                setCountryCard(cardData);
                setCountryData(countryData);

            } catch (error) {
                // handle errors from the fetch operations
                console.error("Error fetching data:", error)
            } 
        }
        console.log(id)
        getDetailedData();
    }, [id])

    console.log(countryCard)

    // The helper function that finds the abbreviation of the country
    // using the country cca3 and sets it equal to the abbreviation
    const findCountrybyAbbreviation = (abbreviation) => {
        return countryData.find((country) => country?.cca3 === abbreviation)
    }
    
    // The rendering logic for the component
    return (
        <main className={`pageBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header handleTheme={toggleTheme}/>
            <Link to="/" className='link'>
                <div className={`back ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                    <div className={`backContent ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                        <FaArrowLeftLong className={`backArrow ${isDarkMode} ? dark-mode : light-mode`}/>
                        <h5>Back</h5>
                    </div>
                </div>
            </Link>
            {countryCard && countryCard.map(country => 
            (
            <section className={`section2 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} key={country?.cca3}>
                <div className='flag'>
                    <img src={country?.flags?.png} alt="The flag of germany" />
                </div>
                <div className="infoContent">
                    <h2 className='country'>{country?.name?.common}</h2>
                    <div className="infoSection">
                        <div className='info'>
                            <h5>Native Name: <span>{country?.name?.common}</span></h5>
                            <h5>Population: <span>{new Intl.NumberFormat().format(country?.population)}</span></h5>
                            <h5>Region: <span>{country?.region}</span></h5>
                            <h5>Sub Region: <span>{country?.subregion}</span></h5>
                            <h5>Capital: <span>{country?.capital}</span></h5>
                        </div>
                        <div className='info2'>
                            <h5>Top Level Domain: <span>{country?.tld[0]}</span></h5>
                            <h5>Currency: 
                                {
                                    Object.keys(country?.currencies).map(currency => (
                                        <span className='currency'>
                                            {country?.currencies[currency]?.name}
                                        </span>
                                    ))
                                }
                            </h5>
                            <h5>Languages: <span>{Object.values(country?.languages).join(", ")}</span></h5>
                        </div>
                    </div>
                    <div className={`border ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                        <h3>Border Countries:</h3>
                        {
                            country?.borders && country?.borders.length > 0 ? (
                                <span>
                                    {
                                        // map over the country borders array if it is not empty
                                        country.borders.map((borderAbbreviation, index) => {

                                            // use the helper function to check borde
                                            const match = findCountrybyAbbreviation(borderAbbreviation)
                                        
                                        // render the button
                                        return (
                                            <Link key={index} to={`/card/${borderAbbreviation}`} className={`link ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                                <button className='borderBtn'>{match?.name?.common || borderAbbreviation}</button>
                                            </Link>
                                        )
                                        })
                                    }
                                </span>
                            ) : (
                                <p>No border countries</p>
                            )
                        }
                    </div>
                </div>
            </section>
            ))}
            <Routes>
                <Route path='/:border' element={<Page />}/>
            </Routes>
        </main>
    )
}

export default Page
