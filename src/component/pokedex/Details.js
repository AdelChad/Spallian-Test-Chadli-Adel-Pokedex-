const Details = ({pokemonSelected}) => {

  // Utilisation de la variable donnée par la classe parent
  return (
    <div className="detailPoke">
      <h1 className='titres'>PokeInfos</h1>
      {pokemonSelected && <div className="carteInfo" style={{borderColor: pokemonSelected[3]}}>
        <img src={pokemonSelected[1]} alt='' className='sprits'/>
        <p>No. : {pokemonSelected[4]}</p>
        <p>Name : {pokemonSelected[0]}</p>
        <p style={{color: pokemonSelected[3]}}>Type : {pokemonSelected[2]}</p>
        <div className='movesInfo'>
          <p>Attacks : </p>
          <div>
            <p>{pokemonSelected[5][0]}</p>
            <p>{pokemonSelected[5][1]}</p>
            <p>{pokemonSelected[5][2]}</p>
            <p>{pokemonSelected[5][3]}</p>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Details;