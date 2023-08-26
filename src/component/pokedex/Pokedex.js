import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Carte from "./Carte"
import Detail from "./Details"

const App = () => {

  // Variables que je vais modifier et donner aux composants enfants
  const [pokemons, setPokemons ] = useState([])
  const [pokemonsSprits, setPokemonsSprits ] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState()

  // Appel de l'API qui récupère les 20 premiers pokemons
  const getPokemonsUrl = async () => {
    try {
      const data = await (
        await fetch("https://pokeapi.co/api/v2/pokemon/")
      ).json();
      setPokemons(data.results);
    } catch (error) { 
      console.log(error);
    }
  };

  // Formatage des données récupéré dans le premier appel
  const updatePokemonInfos = (pokemon) => {
    let color = ''
    switch (pokemon.types[0].type.name) {
      case 'grass':
        color = 'green'
      break;
      case 'fire':
        color = 'red'
      break;
      case 'water':
        color = 'blue'
      break;
      case 'bug':
        color = 'yellow'
      break;
      default:
        color = 'gray'
      break;
    }
    const moves = [];
    for (let index = 0; index < 4; index++) {
      moves.push(pokemon.moves[index].move.name)
    }
    return [pokemon.name, pokemon.sprites.other["official-artwork"].front_default, pokemon.types[0].type.name, color, pokemon.game_indices[3].game_index, moves]
  }

  // Appel des fonctions déclarées précédemment
  useEffect(() => {
    getPokemonsUrl();
  },[]);

  useEffect(() => {
    const formatData = async () => {
      if (pokemons){
        const pokemonUrl = pokemons.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
        const result = await Promise.all(pokemonUrl)
        const formatedInfo = result.map((res) =>
          updatePokemonInfos(res)
        )
        setPokemonsSprits(formatedInfo)
      }
    }
    formatData()

  },[pokemons])

  if (!pokemons.length) {
    return <></>
  }
  else return (
    <div className='pokedex'>
      <div className='titres'>
        <Link className='titre' to={`/`}>Pokédex</Link>
        <Link className='titre' to={`/pokeshop`}>Pokéshop</Link>
      </div>
      <div className="container">
        {pokemonsSprits.map((poke, index) => (
          <div key={poke[4]} className="pokemon">
            {<Carte data={poke} setPokemonSelected={setPokemonSelected}/>}
          </div>
        ))}
      </div>
      <Detail pokemonSelected={pokemonSelected}/>
    </div>
  );
}

export default App;