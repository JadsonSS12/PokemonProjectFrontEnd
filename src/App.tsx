import { useState } from 'react'
import './App.css'
import {Card} from './components/card';
// import { type PokemonData } from './interface/PokemonData';
import { usePokemonData } from './hooks/usePokemonData';

function App() {
  const { data } = usePokemonData();

  return (
    
      <div className='container'>
        <h1>Pokedex</h1>
        <div className="card-grid">
          {data?.map(PokemonData => 
          <Card 
            atack={PokemonData.atack}
            defense={PokemonData.defense}
            title={PokemonData.title}
            type={PokemonData.type}
            image={PokemonData.image}/>)}
        </div>
      </div>
  )
}

export default App
