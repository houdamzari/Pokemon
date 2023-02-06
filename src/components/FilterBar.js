import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import axios from "axios";
function FilterBar({
  pokeTypes,
  pokeAbility,
  pokeSpecie,
  pokemon,
  setType,
  setAbility,
  setSpecies,
}) {
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    const getSinglePokemon = () => {
      pokemon.map(async (p) => {
        await axios.get(p.url).then(({ data }) => setSingleData(data));
        return singleData;
      });
    };

    getSinglePokemon();
  }, [pokemon]);
  return (
    <div className="flex flex-row gap-8 w-full h-fit ">
      <DropDown
        PokeType="Type"
        options={pokeTypes}
        id={0}
        singleData={singleData}
        setType={setType}
      />
      <DropDown
        PokeType="Ability"
        options={pokeAbility}
        id={1}
        singleData={singleData}
        setType={setAbility}
      />
      <DropDown
        PokeType="Specie"
        options={pokeSpecie}
        id={2}
        singleData={singleData}
        setType={setSpecies}
      />

      <div></div>
    </div>
  );
}

export default FilterBar;
