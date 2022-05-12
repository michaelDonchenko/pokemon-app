import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function trimUrl(link) {
  return '/' + link.split('/')[6]
}

const Pokemons = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map((pokemon) => {
        return (
          <div key={pokemon.name} className='pokemonRow'>
            <h3>{pokemon.name}</h3>

            <Link to={trimUrl(pokemon.url)}>Link</Link>
          </div>
        )
      })}
    </>
  )
}

export default Pokemons
