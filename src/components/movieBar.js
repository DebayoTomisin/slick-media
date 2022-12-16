import React from "react";

const MovieBar = ({ item }) => {
  // console.log(item)
  return (
    <div className="w-200 h-200 md:w-300 h-300 border-1 flex items-center justify-center border-dark relative rounded-lg bg-black bg-cover">
      <img
        src={`${item.Poster}`}
        className="relative hidden w-full h-full hover:flex"
        alt={item.Title}
      />
      <h4 className="text-center text-white">{item.Title}</h4>
    </div>
  );
};

export default MovieBar;
