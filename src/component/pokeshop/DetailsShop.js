const Details = ({itemSelected}) => {

  // Utilisation de la variable donnée par la classe parent
  return (
    <div className="detailPoke">
      <h1 className='titres'>PokeInfos</h1>
      {itemSelected && <div className="carteInfo">
        <img src={itemSelected[1]} alt='' className='sprits'/>
        <p>Name : {itemSelected[0]}</p>
        <p>Type : {itemSelected[2][0]}</p>
        <p>Cost : {itemSelected[2][1]} ₽</p>
      </div>}
    </div>
  );
}

export default Details;