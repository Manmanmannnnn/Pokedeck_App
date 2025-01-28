import Card from "./Components/Card";
import Nav from "./Components/Nav";
import { getTypePokemon, searchPokemon } from "./Components/Fetch";
import { useEffect, useState } from "react";
import Container from "./Components/Container";
import Category from "./Components/Category";

function App() {
  const [pokeList, setPokeList] = useState({});
  const [type, setType] = useState("type/3");
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  //category filter

  function handlePokemonType(e) {
    setType((t) => e.target.value);

    setFinalName("");
  }

  useEffect(() => {
    async function loadInitialPoke() {
      try {
        const pokemons = await getTypePokemon(type);

        const pokemonDetails = await Promise.all(
          pokemons.pokemon.map(async (char) => {
            const response = await fetch(char.pokemon.url);
            const data = await response.json();
            return { ...char, sprite: data.sprites["front_default"] };
          })
        );
        setPokeList({ pokemons: pokemonDetails });
      } catch (err) {
        console.log(err);
      }
    }

    loadInitialPoke();
  }, [type]);

  //name filter
  function handleInputChange(e) {
    setName((n) => e.target.value);
  }

  function handleFinalName() {
    setFinalName(name);
  }

  useEffect(() => {
    async function loadSearchedName() {
      try {
        if (finalName) {
          const pokemons = await searchPokemon(finalName);
          console.log(pokemons);
          const sprite = await pokemons.sprites["front_default"];
          setPokeList({ ...pokemons, sprite: sprite });
        }
      } catch (err) {
        console.log(err);
      }
    }

    loadSearchedName();
  }, [finalName]);

  function display(list) {
    let pokemonList = list;

    if (finalName) {
      return <Card name={pokemonList.name} sprite={pokemonList.sprite} />;
    }

    if (pokemonList?.pokemons) {
      return pokemonList.pokemons.map((char, index) => {
        return (
          <Card name={char.pokemon.name} sprite={char.sprite} key={index} />
        );
      });
    }

    return <div>Loading...</div>;
  }

  const result = display(pokeList);

  return (
    <div>
      <Nav
        handleInputChange={handleInputChange}
        name={name}
        handleFinalName={handleFinalName}
      />
      <Category handlePokemonType={handlePokemonType} />
      <Container result={result} />
    </div>
  );
}

export default App;
