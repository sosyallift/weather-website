import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

// SearchBar Component
// NEEDS to be put in a div/container --> this is for resizing (home page vs weather page)
const SearchBar = (props) => {
  //States
  const [input, setInput] = useState("");

  //Event Handlers
  //updates the input const
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    // <form className={styles.SearchBar}>
    <>
      <input
        className={styles.input}
        type="text"
        value={input}
        placeholder="Please enter your location"
        onChange={handleInputChange}
      ></input>
      <Link className={styles.button} to={`/weather/${input}`}>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </Link>
      {/* </form> */}
    </>
  );
};

export default SearchBar;
