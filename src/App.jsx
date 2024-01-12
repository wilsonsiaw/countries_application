import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'

function App() {

  return (
    <div>
      <Header />
      <SearchBar />
      <Filter />
      <Card />
    </div>
  )
}

export default App
