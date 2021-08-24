import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const Pokemon = props => {
  const [monsterData, setMonsterData] = useState([]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response=>{
          console.log(response);
          setMonsterData(response.data.results)})
        .catch((err)=>console.log(err))
}, []);

  return (
    <div style={{width:"100%" ,height:"100%", margin:"auto", textAlign:"center"}}>
    <button>Fetch Pokemon</button>  
    { monsterData.map((monster, index)=>{
        return (<div >{monster.name}</div>)
    })}
    </div>
  );
}

export default Pokemon;