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
    <div className="flex h-full cursor-default flex-col">
      <div className="m-4">
        {selectedPokemon && (
          <div className="SlideEffect m-auto flex w-1/4 items-center justify-center border-b-2">
            <img
              className="flex-1"
              src={selectedPokemon.props.sprite}
              alt={selectedPokemon.props.name}
            />
            <div className="flex-1">
              <h2 className="pb-3 text-2xl font-semibold text-gray-200">
                {selectedPokemon.props.name}
              </h2>
              <p className="pb-1 text-sm font-medium text-gray-200">
                Type:{" "}
                {selectedPokemon.props.pokemonTypes
                  .map((el) => el.type.name)
                  .join(",")}
              </p>
              <p className="pb-1 text-sm font-medium text-gray-200">
                Abilities:{" "}
                {selectedPokemon.props.pokemonAbilities
                  .map((el) => el.ability.name)
                  .join(",")}
              </p>
            </div>
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
