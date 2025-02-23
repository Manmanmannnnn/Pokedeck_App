import axios from "axios";
const base_url = "https://pokeapi.co/api/v2/";

export async function getTypePokemon(type) {
  const response = await axios.get(type);
  return response.data;
}

export async function searchPokemon(name) {
  const response = await axios.get(
    `${base_url}pokemon/${encodeURIComponent(name)}`,
  );
  return response.data;
}
