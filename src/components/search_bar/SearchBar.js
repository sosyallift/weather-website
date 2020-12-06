import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = (props) => {
  //States
  const [input, setInput] = useState("");

  //updates the input const
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={props.submitHandler(input, setInput)}>
        <input
          type="text"
          value={input}
          placeholder="Please enter your location"
          onChange={handleInputChange}
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;