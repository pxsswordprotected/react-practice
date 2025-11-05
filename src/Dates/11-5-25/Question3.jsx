import React, { useState, useEffect } from "react";

const Question3 = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
      .then((r) => {
        setResults(r.data);
      });
  };
};

return (
  <>
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
    ></input>
    <button onClick={handleSearch}>Search</button>

    <ul>
      {results &&
        results.map((result) => {
          <li key={result.id}>{result.content}</li>;
        })}
    </ul>
  </>
);

export default Question3;

// Build a component called SearchResults that:

//     Has an input field where a user can type a search query

//     Has a button to submit the search

//     When the button is clicked, fetch results from https://jsonplaceholder.typicode.com/posts?q={query} (replace {query} with what they typed)

//     Display the matching post titles below

//     Critical: The effect should only run when the user intentionally clicks the button, NOT every time they type in the input field
