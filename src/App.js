/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Grid, Card } from "./components";
import { HomePage } from "./Pages";
import axios from "axios";
import "./index.css";
import "./tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./redux/Pokemon/pokemonReducer";
import { fetchSinglePokemonData } from "./redux/Pokemon/pokemonReducer";
function App() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemon);
  useEffect(() => {
    dispatch(fetchPokemonData());
  }, []);
  useEffect(() => {
    if (pokemons && Array.isArray(pokemons)) {
      pokemons.map((pokemon) => dispatch(fetchSinglePokemonData(pokemon.url)));
    }
  }, [pokemons]);
  return (
    <div
      style={{ backgroundColor: "#f6f8fc" }}
      className="flex flex-col justify-center items-center w-full
       py-20 px-10"
    >
      <HomePage />
    </div>
  );
}

export default App;
