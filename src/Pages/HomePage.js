import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Pagination,
  Pokemon,
  SearchBar,
  Spacer,
  FilterBar,
} from "../components";

function HomePage({ pokemonDetails }) {
  const [pokemon, setPokemon] = useState([]);
  const [pokeUrl, setPokeUrl] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeAbility, setPokeAbility] = useState([]);
  const [pokeSpecie, setPokeSpecie] = useState([]);
  const [state, setState] = useState({});
  const [pokeSpecies, setPokeSpecies] = useState([]);
  const [type, setType] = useState();
  const [species, setSpecies] = useState();
  const [ability, setAbility] = useState();
  const [searchString, setSearchString] = useState([]);

  const filteredPokemons = useSelector(
    (state) => state.pokemon.filteredPokemons
  );

  const getSpecis = async () => {
    if (state.species) {
      await axios
        .get(state.species.url)
        .then(({ data }) => setPokeSpecies(data));
    }
  };
  useEffect(() => {
    getSpecis();
  }, [state]);

  const searchPokemon = (string) => {
    const searchData = pokemon.filter((item) => item.name.includes(string));

    setSearchString(searchData);
  };
  const getAllTypes = () => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(({ data }) => setPokeTypes(data.results));
  };
  const getAllAbilities = () => {
    axios
      .get("https://pokeapi.co/api/v2/ability/")
      .then(({ data }) => setPokeAbility(data.results));
  };
  const getAllSpecies = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species")
      .then(({ data }) => setPokeSpecie(data.results));
  };

  useEffect(() => {
    getAllTypes();
    getAllAbilities();
    getAllSpecies();
  }, []);
  console.log(filteredPokemons);

  return (
    <>
      <div className="w-full flex flex-row justify-between gap-100">
        <div>
          <SearchBar setSearchString={setSearchString} />

          <Spacer size={50} />
          <FilterBar
            pokeTypes={pokeTypes}
            pokeAbility={pokeAbility}
            pokeSpecie={pokeSpecie}
            pokemon={pokemon}
            setType={setType}
            setAbility={setAbility}
            setSpecies={setSpecies}
          />
          <Spacer size={50} />
          <Grid
            pokemonDetails={
              filteredPokemons.length > 0 ? filteredPokemons : pokemonDetails
            }
            setState={setState}
            pokemon={searchString.length > 0 ? searchString : pokemonDetails}
            pokeUrl={pokeUrl}
            searchString={searchString}
            type={type}
            ability={ability}
            species={species}
            getAllAbilities={getAllAbilities}
          />
          {/* <Pagination
            goToNextPage={goToNextPage}
            goBackToPreviousPage={goBackToPreviousPage}
          /> */}
        </div>
        {state.name && <Pokemon state={state} pokeSpecies={pokeSpecies} />}
      </div>
    </>
  );
}

export default HomePage;
