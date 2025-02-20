import { useState, useEffect } from "react";
import axios from "axios";
import { getTypePokemon, searchPokemon } from "./Fetch";

function UsePokemonFetch(type, finalName) {
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPokemons() {
      setLoading(true);
      setError(null);
      try {
        let pokemons;

        if (finalName) {
          pokemons = await searchPokemon(finalName);

          const pokemonName = pokemons.name;
          const pokemonImage = pokemons.sprites;
          const pokemonTypes = pokemons.types;
          const pokemonAbilities = pokemons.abilities;
          const pokemonMoves = pokemons.moves;

          setPokeList([
            {
              pokemonName,
              sprite: pokemonImage["front_default"],
              pokemonTypes,
              pokemonAbilities,
              pokemonMoves,
            },
          ]);
        } else {
          // Fetch by type
          pokemons = await getTypePokemon(type);
          const pokemonDetails = await Promise.all(
            pokemons.pokemon.map(async (char) => {
              const response = await axios.get(char.pokemon.url);
              const pokemonName = response.data.name;
              const pokemonImage = response.data.sprites;
              const pokemonTypes = response.data.types;
              const pokemonAbilities = response.data.abilities;
              const pokemonMoves = response.data.moves;
              return {
                pokemonName,
                sprite: pokemonImage["front_default"],
                pokemonTypes,
                pokemonAbilities,
                pokemonMoves,
              };
            }),
          );

          setPokeList(pokemonDetails);
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    loadPokemons();
  }, [type, finalName]);

  return { pokeList, loading, error };
}

export default UsePokemonFetch;
