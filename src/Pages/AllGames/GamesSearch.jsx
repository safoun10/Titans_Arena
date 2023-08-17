import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const GamesSearch = () => {
    const [games, setGames] = useState([])
    const searchRef = useRef(null)
    const [search, setSearch] = useState("")
    
  
    useEffect( ()=>{
      fetch(`http://localhost:5000/searchGames?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
    } ,[search])
  
    const handleSearch = () => {
      console.log(searchRef.current.value)
      setSearch(searchRef.current.value);
     
  }
    return (
      <form>
        <div className="py-5 px-10 flex justify-center items-center">
          <input
            type="text"
            className="py-2 rounded px-10 lg:w-[50%] w-full relative"
            name="search"
            id="search"
            ref={searchRef}
            placeholder="Search Games"
          />
          <div className="absolute lg:left-[345px] left-12">
              <FaSearch></FaSearch>
          </div>
        <input type="submit" onClick={() => handleSearch()} className="border lg:px-10 px-3 py-[7px] bg-image text-white border-[#f36b3b]text-white rounded absolute lg:right-[335px] right-10 lg:w-[200px] w-[35%]" name="" value="Search College" id="" />
        </div>
      </form>
    );
};

export default GamesSearch;