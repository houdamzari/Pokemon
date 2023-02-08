import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchTerm: "" };

const searchPokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    SEARCH_POKEMON(state, action) {
      return { ...state, searchTerm: action.payload };
      
    },
  },
});

export default searchPokemon;
export const { SEARCH_POKEMON } = searchPokemon.actions;
