import React, { useEffect, useState } from "react";
import axios from "axios";
import { getTypeStyle } from "../utilities/useColor";
function Card({ url, p, setState, searchString, type, ability, species }) {
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    const getSinglePokemon = async () => {
      await axios.get(p.url).then(({ data }) => setSingleData(data));
    };
    getSinglePokemon();
  }, [searchString]);
  const abilities = singleData?.abilities?.map((a) => a.ability.name);
  const types = singleData?.types?.map((t) => t.type.name);
  const specie = singleData?.species?.name;
  const showCard = () => {
    return (
      (type?.length > 0 && types?.includes(type)) ||
      (ability?.length > 0 && abilities?.includes(ability)) ||
      (specie?.length > 0 && species === specie) ||
      (!type && !species && !ability)
    );
  };
  const hideCard = () => {
    return (
      (type && !types?.includes(type)) ||
      (ability && !abilities?.includes(ability)) ||
      (specie && !(species === specie))
    );
  };
  return (
    <>
      {showCard() ? (
        <button
          className="w-64 h-44 rounded-lg bg-white shadow-xl flex justify-center flex-col items-center gap-4 relative pt-10 "
          onClick={() => {
            setState(singleData);
          }}
        >
          <img
            className="w-32 h-30 rounded-full absolute -top-16 "
            src={singleData?.sprites?.front_default}
            alt="pokemon"
          />

          <span>N : {singleData.order} </span>
          <h1 className="text-md font-bold">{singleData.name} </h1>
          <div className="flex flex-row gap-2">
            {singleData.types &&
              singleData.types.map((type) => {
                return (
                  <div
                    style={getTypeStyle(type.type.name)}
                    className="w-16 h-8  
        rounded-lg flex justify-center items-center px-14"
                  >
                    {type.type.name.toUpperCase()}
                  </div>
                );
              })}
          </div>
        </button>
      ) : hideCard() ? null : (
        <button
          className="w-64 h-44 rounded-lg bg-white shadow-xl flex justify-center flex-col items-center gap-4 relative pt-10 "
          onClick={() => {
            setState(singleData);
          }}
        >
          <img
            className="w-32 h-30 rounded-full absolute -top-16 "
            src={singleData?.sprites?.front_default}
            alt="pokemon"
          />

          <span>N : {singleData.order} </span>
          <h1 className="text-md font-bold">{singleData.name} </h1>
          <div className="flex flex-row gap-2">
            {singleData.types &&
              singleData.types.map((type) => {
                return (
                  <div
                    style={getTypeStyle(type.type.name)}
                    className="w-16 h-8  
        rounded-lg flex justify-center items-center px-14"
                  >
                    {type.type.name.toUpperCase()}
                  </div>
                );
              })}
          </div>
        </button>
      )}
    </>
  );
}

export default Card;
