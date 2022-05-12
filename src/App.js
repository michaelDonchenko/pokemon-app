import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokemons from './pokemons'
import Pokemon from './pokemon'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').then(
      (response) => response.json().then((data) => setPokemons(data.results))
    )
  }, [])

  return (
    <BrowserRouter>
      <div className='appContainer'>
        <h1>Pokemon react app</h1>

        <Routes>
          <Route path='/' element={<Pokemons pokemons={pokemons} />} />
          <Route path='/:id' element={<Pokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
