import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import './styles.css'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon' + location.pathname).then(
      (response) => response.json().then((data) => setPokemon(data))
    )
  }, [location.pathname])

  return (
    <div>
      <h1>{pokemon?.name}</h1>

      <div className='imageContainer'>
        <img
          alt={pokemon?.name}
          src={pokemon?.sprites.other.dream_world.front_default}
        />
      </div>

      <div>
        <button onClick={() => navigate('/')}>Back</button>
        {pokemon?.id > 1 && (
          <button onClick={() => navigate('/' + (pokemon?.id - 1))}>
            Prev
          </button>
        )}
        {pokemon?.id < 151 && (
          <button onClick={() => navigate('/' + (pokemon?.id + 1))}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default Pokemon
