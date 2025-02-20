import Card from "./Components/Card";
import Nav from "./Components/Nav";
import Category from "./Components/Category";
import Container from "./Components/Container";
import UsePokemonFetch from "./Components/UsePokemonFetch";
import { useState } from "react";
import "./index.css";

function App() {
  const [type, setType] = useState("type/3");
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { pokeList, loading, error } = UsePokemonFetch(type, finalName);

  function handlePokemonType(e) {
    setType(e.target.value);
    setFinalName("");
  }

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleFinalName() {
    setFinalName(name);
  }

  function handlePokemonClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  function display(list) {
    if (!Array.isArray(list)) {
      return [];
    }

    if (list.length === 0) {
      return <div>No Pokémon found</div>;
    }

    return list.map((pokemon, index) => (
      <Card
        name={pokemon.pokemonName}
        sprite={pokemon.sprite}
        key={index}
        pokemonTypes={pokemon.pokemonTypes}
        pokemonAbilities={pokemon.pokemonAbilities}
        pokemonMoves={pokemon.pokemonMoves}
      />
    ));
  }

  return (
    <div>
      <Nav
        handleInputChange={handleInputChange}
        name={name}
        handleFinalName={handleFinalName}
      />
      <Category handlePokemonType={handlePokemonType} />
      <Container
        result={display(pokeList)}
        handlePokemonClick={handlePokemonClick}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
}

export default App;
