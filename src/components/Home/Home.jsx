import React, {useState, useEffect} from 'react'
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import { ThemeContext, useTheme } from '../context/ThemeContextProvider';
import axios from 'axios';

const Home = () => {
    // use dark mode and toggle from the theme
    // context provider
    const { isDarkMode, toggleTheme } = useTheme();

    // create state to work with data from the API
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('')

    const getCountryData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setData(response.data);
        setFilteredCountries(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    };

    useEffect(() => {
        getCountryData()
    }, []);


    // create a function for the search functionality of 
    // the application
    const handleSearch = (countryName) => {
      const trimmedSearch = countryName.trim();
      if (trimmedSearch === '') {
        setFilteredCountries(data);
      } else {
        const filtered = data.filter((country) => 
          country.name.common.toLowerCase().includes(trimmedSearch.toLowerCase())
        );
        setFilteredCountries(filtered)
      }
    }

    // create a function to handle the filtering with the
    // select input
    const handleRegionSelection = (selectedRegion) => {
      if (selectedRegion === '') {
        setFilteredCountries(data)
      } else {
        const filtered = data.filter((country) => 
          country.region.toLowerCase() === selectedRegion.toLowerCase());
          setFilteredCountries(filtered);
      }
    }

  const cardData = filteredCountries.map(country => (
    <Card
      key={country.cca3}
      id={country.cca3} 
      flag={country.flags.png}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ))

  return (
    <div>
      <div className={`appBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header handleTheme={toggleTheme}/>
      <div className="container">
        <SearchBar 
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          handleSearch={handleSearch}
        />
        <Filter onFilterChange={handleRegionSelection}/>
      </div>
      <div />
      <div className="cardContainer">
        {cardData}
      </div>
    </div>
    </div>
  )
}

export default Home
