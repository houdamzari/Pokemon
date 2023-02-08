import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./Pokemon/pokemonReducer";
import searchPokemon from "./searchPokemon/searchPokemonReducer";
const store = configureStore({
  reducer: {
    pokemon: pokemonReducer.reducer,
    search: searchPokemon.reducer,
  },
});

export default store;
