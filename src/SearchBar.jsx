import React, { useState } from "react";
import "./styles/SearchBar.css";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    console.log("Search triggered for:", searchTerm);
    const results = searchTerm;

    setSearchResults(results);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Sök..."
          className="rounded-search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
};

export default SearchBar;
