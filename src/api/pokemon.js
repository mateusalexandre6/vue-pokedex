import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';



export const getAllPokemon = async (offset, limit) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching Pokemon data:', error.message);
        throw error;
      }
}
export const getPokemonDetail = (pokemon) => {
   try {
    const response = axios.get(pokemon.url);
    return response
   } catch (error) {
       console.error('Error fetching Pokemon data:', error.message);
       throw error;
   }
      
      
}

export const getOnePokemon = async (pokemonName) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching Pokemon data:', error.message);
        throw error;
      }
}




export const getPokemonAbility = async (abilityName) => {
    try {
        const response = await axios.get(`${BASE_URL}/ability/${abilityName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokemon ability:', error);
        throw error;
    }
};
