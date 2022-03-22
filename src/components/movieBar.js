import React from "react";

const MovieBar = ( { item } ) =>
{
    console.log(item)
    return(
        <div className="w-200 h-200 md:w-300 h-300 border-1 flex items-center justify-center border-dark relative hover:bg-dark bg-cover">
            <img src={`${item.Poster}`} className="relative w-full h-full hover:hidden" />
            <h4 className="hidden hover:flex text-center text-white">{item.Title}</h4>
        </div>
    )
}

export default MovieBar
