import React from 'react';
import './styles/SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="result-container">
      <h2>Search Results</h2>
      <ul>
{/*         {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))} */}
        <li>{results}</li>
      </ul>
    </div>
  );
};

export default SearchResults;