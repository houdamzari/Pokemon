import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./Pokemon/pokemonReducer";
const store = configureStore({
  reducer: {
    pokemon: pokemonReducer.reducer,
  },
});

export default store;
