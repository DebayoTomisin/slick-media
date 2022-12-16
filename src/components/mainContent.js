import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieBar from "./movieBar";

const MainContent = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  // const [data, setData] = useState([]);

  async function getSearch(searchText) {
    try {
      if (searchText !== "") {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}s=${searchText}`
        );
        console.log(response);
        setSearchData(response.data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearch(search);
    }, 5000);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="mt-6 md:mt-10">
      <div className="px-[28px] lg:px-[77px] pb-[67px]">
        <label className="text-base md:text-2xl font-normal pb-[4px]">
          Search
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-base md:text-xl h-[34px] md:h-[54px] border-dark border-1 px-4 py-2"
        />
      </div>
      <div className="pl-6 lg:pl-12 my-4 flex flex-wrap justify-center items-center gap-x-[13px] gap-y-4">
        {searchData.length === 0 ? (
          <h1>Please search for a movie</h1>
        ) : (
          searchData.map((item, idx) => <MovieBar item={item} index={idx} />)
        )}
      </div>
    </div>
  );
};

export default MainContent;
