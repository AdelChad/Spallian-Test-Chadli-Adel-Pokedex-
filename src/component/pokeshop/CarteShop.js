import React from 'react'

const Carte = ({data, setItemSelected}) => {

  // Fonction qui permet de mettre à jour la variable de la classe parent
  const toggle = () => {
    setItemSelected(data)
  }

  return (
    <div className='carte'> 
      <div onClick={ toggle }>
        <img src = {data[1]} alt='sprits' className='sprits'/>
        <p>{data[0]}</p>
      </div>
    </div>
  ); 
}

export default Carte;