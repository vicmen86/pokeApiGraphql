/* import { gql, useQuery } from "@apollo/client";
import client from "./apolloClient";
const getAllPokemon = async() =>{

const pokemon = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/(int).png`);
const img = pokemon.url;

const {data}= await client.query({
    query: gql`
    query MyQuery {
      pokemon_v2_pokemon {
        id
        name
        is_default
        base_experience
      }
    }
    `,
  })
  
return {
  props:{
    pokemon: data.pokemon_v2_pokemon[0],
    img
  }
}
}

//export default getAllPokemon; */