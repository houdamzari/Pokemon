import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { getTypeStyle, getStatStyle } from "../utilities/useColor";
import { Spacer } from "../components";
function Pokemon({ state, pokeSpecies }) {
  const randomDesc = useMemo(() => {
    if (pokeSpecies.flavor_text_entries) {
      const array = pokeSpecies.flavor_text_entries.filter(
        (desc) => desc.language.name === "en"
      );
      const randomNumber = Math.floor(Math.random() * (array.length - 1));
      return array[randomNumber].flavor_text;
    }
  }, [pokeSpecies.flavor_text_entries]);
  return (
    <div className="w-fit max-w-md shadow-xl bg-white h-fit fixed top-4 right-0  m-10 flex pt-10  pb-2 flex-col gap-1 items-center  pt-12 rounded-lg px-2">
      <img
        src={state?.sprites?.front_shiny}
        alt="peofileImage"
        className="w-52 h-48 -top-16 absolute"
      />
      <Spacer size={60} />
      <span className="text-gray-400 font-bold "> #{state.order}</span>
      <h1 className="text-black font-bold text-2xl">
        {state.name.charAt(0).toUpperCase()}
        {state.name.slice(1)}
      </h1>
      {pokeSpecies.genera &&
        pokeSpecies.genera.map((specie) => {
          return (
            specie.language.name === "en" && (
              <span className="text-gray-400 text-sm ">{specie.genus}</span>
            )
          );
        })}
      <div className=" flex flex-row gap-2 mb-2">
        {state.types &&
          state.types.map((type) => {
            return (
              <div
                style={getTypeStyle(type.type.name)}
                className="w-16 h-8  
        rounded-lg flex justify-center items-center px-12 font-bold
        text-sm"
              >
                {type.type.name.toUpperCase()}
              </div>
            );
          })}
      </div>

      <div className="flex flex-col gap-2 justify-center items-center mb-1">
        <h2 className="font-bold tracking-widest">POKEDEX ENTRY</h2>
        <div>{randomDesc}</div>
      </div>

      <h2 className="font-bold tracking-widest text-md mb-1">ABILITIES</h2>
      <div className="flex w-fit flex-row justify-around  ">
        {state.abilities &&
          state.abilities.map((a) => {
            return (
              <button
                className="text-black  bg-gray-100 w-fit h-fit border-red-800 mx-1 px-4 py-2 rounded-full border-2"
                key={a.ability.name}
              >
                {a.ability.name}
              </button>
            );
          })}
      </div>
      <Spacer size={2} />

      <div className="flex flex-row justify-around w-fit ">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="font-bold tracking-wider text-md ">HEIGHT</div>
          <div className="text-black  bg-gray-100 w-40 h-10 mx-1 p-1 rounded-full border-2 flex justify-center items-center">
            {state.height}m
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="font-bold tracking-wider text-md ">WEIGHT</div>
          <div className="text-black  bg-gray-100 w-40 h-10 mx-1 p-1 rounded-full border-2 flex justify-center items-center">
            {state.weight}Kg
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around w-fit">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="font-bold tracking-wider text-md ">BASE EXP</div>

          <div className="text-black  bg-gray-100 w-40 h-10 mx-1 p-1 rounded-full border-2 flex justify-center items-center">
            {state.base_experience}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="font-bold tracking-wider text-md ">
            BASE HAPPINESS
          </div>

          <div className="text-black  bg-gray-100 w-40 h-10 mx-1 p-1 rounded-full border-2 flex justify-center items-center">
            {pokeSpecies.base_happiness}
          </div>
        </div>
      </div>
      <Spacer size={10} />
      <h2 className="font-bold text-md tracking-wider">STATS</h2>
      <div className="w-full flex flex-row justify-around items-center ">
        {state.stats &&
          state.stats.map((s) => {
            return (
              <div className="flex flex-col bg-gray-200 h-fit rounded-full p-1 justify-center items-center">
                <div
                  style={getStatStyle(s.stat.name)}
                  className="w-fit h-fit p-1.5 bg-red-100 rounded-full text-sm text-white font-bold "
                >
                  {s.stat.name.slice(0, 3)}
                </div>
                <div>{s.base_stat}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Pokemon;
