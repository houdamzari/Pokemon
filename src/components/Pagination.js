import React from "react";

function Pagination({ goToNextPage, goBackToPreviousPage }) {
  return (
    <div className="p-10 w-full flex flex-row justify-between items-center ">
      <button
        className="bg-green-400 w-32 h-10 rounded-full m-2"
        onClick={goBackToPreviousPage}
      >
        Previous
      </button>
      <button
        onClick={goToNextPage}
        className="bg-green-400 w-32 h-10 rounded-full"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
