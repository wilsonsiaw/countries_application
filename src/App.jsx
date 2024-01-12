import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Card from './components/Card/Card'

function App() {

  return (
    <div>
      <Header />
      <SearchBar />
      <Card />
    </div>
  )
}

export default App
