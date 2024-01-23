import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Page from './components/Page/Page'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/card/:id/*' element={<Page />}/>
      </Routes>
    </div>
  )
}

export default App
