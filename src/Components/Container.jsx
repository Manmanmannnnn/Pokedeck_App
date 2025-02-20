import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Pagination } from "swiper/modules";

function Container({ result, handlePokemonClick, selectedPokemon }) {
  if (!Array.isArray(result)) {
    return <div>Loading data....</div>;
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="h-1/2">
        {selectedPokemon && (
          <div className="m-auto flex w-1/2 flex-col items-center justify-center rounded-2xl border-2 border-solid border-cyan-100">
            <h2 className="text-2xl font-semibold text-gray-200">
              {selectedPokemon.props.name}
            </h2>
            <img
              className="duration-75 hover:scale-110"
              src={selectedPokemon.props.sprite}
              alt={selectedPokemon.props.name}
            />

            <p className="text-xl font-medium text-gray-200">
              Type:{" "}
              {selectedPokemon.props.pokemonTypes
                .map((el) => el.type.name)
                .join(",")}
            </p>
            <p className="text-xl font-medium text-gray-200">
              Abilities:{" "}
              {selectedPokemon.props.pokemonAbilities
                .map((el) => el.ability.name)
                .join(",")}
            </p>
          </div>
        )}
      </div>
      <div className="h-1/2">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          modules={[Grid, Navigation, Pagination]}
          className="mySwiper"
        >
          {result.map((pokemon, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handlePokemonClick(pokemon)}
            >
              {pokemon}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Container;
