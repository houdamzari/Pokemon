import axios from "axios";
import React, { useEffect, useState } from "react";
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
  // const [loading, setLoading] = useState(true);
  // const [nextLink, setNextLink] = useState([]);
  // const [prevLink, setPrevLink] = useState([]);
  const [pokeUrl, setPokeUrl] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeAbility, setPokeAbility] = useState([]);
  const [pokeSpecie, setPokeSpecie] = useState([]);
  const [searchString, setSearchString] = useState([]);
  const [state, setState] = useState({});
  const [pokeSpecies, setPokeSpecies] = useState([]);
  const [type, setType] = useState();
  const [species, setSpecies] = useState();
  const [ability, setAbility] = useState();
  // const getUrl = async () => {
  //   const data = await axios.get(url).then(({ data }) => {
  //     setPokeUrl(data.results.map((item) => item.url));
  //   });
  // };

  // useEffect(() => {
  //   const getPokemon = async () => {
  //     const data = await axios.get(url).then(({ data }) => {
  //       // setPrevLink(data.previous);
  //       // setNextLink(data.next);
  //       setPokemon(data.results.map((item) => item));
  //       getUrl();
  //     });
  //   };
  //   getPokemon();
  // }, []);

  // const goToNextPage = () => {
  //   setUrl(nextLink);
  // };
  // const goBackToPreviousPage = () => {
  //   setUrl(prevLink);
  // };
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

  return (
    <>
      <div className="w-full flex flex-row justify-between gap-100">
        <div>
          <SearchBar searchPokemon={searchPokemon} />

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
            // url={url}
            pokemonDetails={pokemonDetails}
            setState={setState}
            pokemon={searchString.length > 0 ? searchString : pokemon}
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
