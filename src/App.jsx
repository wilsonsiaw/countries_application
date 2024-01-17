import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'
import { ThemeContext, useTheme } from './components/context/ThemeContextProvider'
import axios from 'axios'

function App() {

  // use dark mode and toggle from the theme
  // context provider
  const { isDarkMode, toggleTheme } = useTheme();

  // create state to work with data from the API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const reponse = await axios.get('https://restcountries.com/v3.1/all')
        setData(reponse.data);
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    };
    getData();
  }, []);

  // console.log(data)

  const cardData = data.map(country => (
    <Card
      key={country.cca3} 
      flag={country.flags.png}
      name={country.name.common}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ))

  return (
    <div className={`appBody ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header handleTheme={toggleTheme}/>
      <div className="container">
        <SearchBar />
        <Filter />
      </div>
      <div />
      <div className="cardContainer">
        {cardData}
      </div>
    </div>
  )
}

export default App
