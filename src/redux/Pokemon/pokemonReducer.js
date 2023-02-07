import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonData = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const Pokemon = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    );
    return Pokemon.data.results;
  }
);
export const fetchSinglePokemonData = createAsyncThunk(
  "pokemon/fetchSinglePokemon",
  async (url) => {
    const res = await axios.get(url).then(({ data }) => data);
    return res;
  }
);

const initialState = {
  pokemons: [],
  pokemonDetails: [],
};
const pokemonReducer = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    SEARCH_POKEMON() {
      console.log("pokemon");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonData.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
    });
    builder.addCase(fetchSinglePokemonData.fulfilled, (state, action) => {
      state.loading = false;
      if (!state.pokemonDetails.some((item) => item.id === action.payload.id)) {
        state.pokemonDetails.push(action.payload);
      }
    });
  },
});
export default pokemonReducer;
