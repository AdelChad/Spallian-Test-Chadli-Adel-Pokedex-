import React from 'react'

const Carte = ({data, setPokemonSelected}) => {

  // Fonction qui permet de mettre à jour la variable de la classe parent
  const toggle = () => {
    setPokemonSelected(data)
  }

  return (
    <div className='carte'>
      <div onClick={ toggle }>
        <img src = {data[1]} alt='sprits' className='sprits'/>
        <p>{data[0]}</p>
        <p style={{color: data[3]}}>{data[2]}</p>
      </div>
    </div>
  ); 
}

export default Carte;