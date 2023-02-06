import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemonData = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const Pokemon = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=30"
    );
    return Pokemon.data.results;
    // .then(({ data }) => data.results)
    // .then((res) => res.map((item) => (poke = item)));
  }
);
export const fetchSinglePokemonData = createAsyncThunk(
  "pokemon/fetchSinglePokemon",
  async (url) => {
    await axios.get(url).then(({ data }) => console.log(data));
  }
);

const initialState = {
  pokemons: [],
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
      state.pokemons = action.payload;
    });
  },
});
export default pokemonReducer;
