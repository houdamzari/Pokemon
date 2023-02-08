import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_POKEMON } from "../redux/Pokemon/pokemonReducer";
function SearchBar({ setSearchString }) {
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    dispatch(SEARCH_POKEMON(e.target.value));
  };

  return (
    <div className="w-full h-14 bg-white  flex justify-end items-center rounded-full p-6 shadow-md">
      <input
        onChange={searchHandler}
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
