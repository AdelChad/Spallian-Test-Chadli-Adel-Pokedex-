import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Carte from "./CarteShop"
import Detail from "./DetailsShop"

const App = () => {

  // Variables que je vais modifier et donner aux composants enfant
  const [items, setItems ] = useState([])
  const [itemsSprits, setItemsSprits ] = useState([])
  const [itemSelected, setItemSelected] = useState()

  // Appel de l'API qui récupère les 20 premiers pokemons
  const getItemsUrl = async () => {
    try {
      const data = await (
        await fetch("https://pokeapi.co/api/v2/item/")
      ).json();
      setItems(data.results);
    } catch (error) { 
      console.log(error);
    }
  };

  // Formatage des données récupéré dans le premier appel
  const itemSearch = (data) => {
    return [data.name, data.sprites.default, [data.category.name, data.cost]];
  };

  // Appel des fonctions déclarées précédemment
  useEffect(() => {
    getItemsUrl();
  }, []);

  useEffect(() =>{
    const formatData = async () => {
      if (items){
        const itemsUrl = items.map((item) => fetch(item.url).then((res) => res.json()))
        const result = await Promise.all(itemsUrl)
        const formatedInfo = result.map((res) => 
          itemSearch(res)
        )
        setItemsSprits(formatedInfo)
      }
    }
    formatData()

  },[items])

  if (!items.length) { 
    return <></> 
  }
  else return ( 
    <div className='pokeshop'>
      <div className='titres'>
      <Link className='titre' to={`/`}>Pokédex</Link>
      <Link className='titre' to={`/pokeshop`}>Pokéshop</Link>
      </div>
      <div className="container">
      {itemsSprits.map((poke, index) => (
        <div key={index} className="pokemon">
          {<Carte data={poke} setItemSelected={setItemSelected}/>}
        </div>
        ))}
      </div>
      <Detail itemSelected={itemSelected}/>
    </div>
  ); 
}

export default App;