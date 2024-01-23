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
    const [cardDetailData, setCardDetailData] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);
    const [loading, setLoading] = useState(false)

    // A function that fetches the data for the detailed page
    useEffect(() => {
        console.log(id)
        const getDetailedData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
                setCardDetailData(response.data)
                setBorderCountries(response.data?.[0]?.borders || []);
            } catch (error) {
                console.error("Error fetching data:", error)
            } 
        }
        console.log(id)
        getDetailedData();
    }, [id])
    
    // The rendering logic for the component
    return (
        <main className={`pageBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Header handleTheme={toggleTheme}/>
            <Link to="/">
                <div className={`back ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                    <div className={`backContent ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                        <FaArrowLeftLong className={`backArrow ${isDarkMode} ? dark-mode : light-mode`}/>
                        <h5>Back</h5>
                    </div>
                </div>
            </Link>
            {cardDetailData && cardDetailData.map(country => 
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
                            <h5>Population: <span>{country?.population}</span></h5>
                            <h5>Region: <span>{country?.region}</span></h5>
                            <h5>Sub Region: <span>{country?.subregion}</span></h5>
                            <h5>Capital: <span>{country?.capital}</span></h5>
                        </div>
                        <div className='info2'>
                            <h5>Top Level Domain: <span>{country?.tld[0]}</span></h5>
                            <h5>Currency: <span>{Object.keys(country?.currencies)}</span></h5>
                            <h5>Languages: <span>{Object.values(country?.languages).join(", ")}</span></h5>
                        </div>
                    </div>
                    <div className={`border ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                        <h3>Border Countries:</h3>
                        {
                            country?.borders && country?.borders.length > 0 ? (
                                <span>
                                    {borderCountries.map((borderAbbreviation, index) => {
                                        const matchingCountry = cardDetailData.find(
                                            (countryData) => countryData?.cca3 === borderAbbreviation
                                        );

                                        console.log('Abbreviation:', borderAbbreviation);
                                        console.log('Matching Country:', matchingCountry);

                                        return (
                                            <Link key={index} to={`/card/${borderAbbreviation}`}>
                                                <span>{matchingCountry?.name.common || borderAbbreviation}</span>
                                            </Link>
                                        ) 
                            })}
                                </span>
                            ) : (
                                    <p>No bordering countries</p>
                        )}
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
