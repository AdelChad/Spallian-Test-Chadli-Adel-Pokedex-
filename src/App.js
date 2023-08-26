import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './component/pokedex/Pokedex'
import Pokeshop from './component/pokeshop/Pokeshop'

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pokedex/>}/>
          <Route path='/pokeshop' element={<Pokeshop/>}/>
        </Routes>
      </BrowserRouter>
  </div>
  )


  
}

export default App;
