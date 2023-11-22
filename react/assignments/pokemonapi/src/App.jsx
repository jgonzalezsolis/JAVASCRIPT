import { useState,useEffect} from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=800")
//     .then(response => {
//     // not the actual JSON response body but the entire HTTP response
//     return response.json();
// }).then(response => {
//     // we now run another promise to parse the HTTP response into usable JSON
//     setPokemon(response.results);
// }).catch((err)=>{
//     console.log(err);
// });
// }, []);

// return (
//   <div>
//     <li>
//       {
//         pokemon.map((pokemon, idx)=>{
//           return(<p key={idx}>{pokemon.name}</p>)
//         })
//       }
//     </li>
//   </div>
// )
//     }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
    console.log(response.data.results);
    setPokemon(response.data.results);
})
.catch((err)=>{
    console.log(err);
});
}, []);

return (
  <div>
    <ul>
      {
        pokemon.map((pokemon, idx)=>{
          return(<li key={idx}>{pokemon.name}</li>)
        })
      }
    </ul>
  </div>
)
    }


export default App


// axios.get('http://www.example.com').then(response=>{
//     console.log(response);
// })