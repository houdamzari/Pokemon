import React, { useEffect } from "react";
import { Card } from ".";

function Grid({
  pokemon,
  url,
  setState,
  searchString,
  type,
  ability,
  species,
  pokemonDetails,
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14 p-10">
      {pokemonDetails.map((p) => {
        return (
          <Card
            url={url}
            pokemonDetails={pokemonDetails}
            p={p}
            setState={setState}
            searchString={searchString}
            type={type}
            species={species}
            ability={ability}
          />
        );
      })}
    </div>
  );
}

export default Grid;
