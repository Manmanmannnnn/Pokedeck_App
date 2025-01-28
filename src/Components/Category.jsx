import "./Category.css";

function Category({ handlePokemonType }) {
  return (
    <div className='categoryArea'>
      <button value='type/3' onClick={(e) => handlePokemonType(e)}>
        Flying
      </button>
      <button value='type/13' onClick={(e) => handlePokemonType(e)}>
        Electric
      </button>
      <button value='type/15' onClick={(e) => handlePokemonType(e)}>
        Ice
      </button>
      <button value='type/10' onClick={(e) => handlePokemonType(e)}>
        Fire
      </button>
      <button value='type/6' onClick={(e) => handlePokemonType(e)}>
        Rock
      </button>
      <button value='type/11' onClick={(e) => handlePokemonType(e)}>
        Water
      </button>
    </div>
  );
}

export default Category;
