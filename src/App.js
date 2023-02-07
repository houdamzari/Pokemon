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
import Spinner from "./components/Spinner";
function App() {
  const dispatch = useDispatch();
  const { pokemons, pokemonDetails } = useSelector((state) => state.pokemon);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchPokemonData());
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (pokemons && Array.isArray(pokemons)) {
      pokemons.map((pokemon) => dispatch(fetchSinglePokemonData(pokemon.url)));
    }
    setTimeout(() => setIsLoading(false), 6000);
  }, [pokemons]);
  return (
    <>
      {isLoading === false ? (
        <div
          style={{ backgroundColor: "#f6f8fc" }}
          className="flex flex-col justify-center items-center w-full
       py-20 px-10"
        >
          <HomePage pokemonDetails={pokemonDetails} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
