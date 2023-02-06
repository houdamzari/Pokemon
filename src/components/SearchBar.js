import React from "react";

function SearchBar({ searchPokemon }) {
  return (
    <div className="w-full h-14 bg-white  flex justify-end items-center rounded-full p-6 shadow-md">
      <input
        onChange={(e) => searchPokemon(e.target.value)}
        className="w-full px-10 py-1 bg-transparent"
        type="text"
        name="search"
        placeholder="Search Your Pokemon Here"
      ></input>
      <button className="w-10 h-14 rounded-full ">
        <img src="./img/pokemon.png" alt="Search Pokemon" />
      </button>
    </div>
  );
}

export default SearchBar;
