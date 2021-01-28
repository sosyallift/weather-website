import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

// SearchBar Component
// MUST be put in a div/container --> this is for resizing (home page vs weather page)
const SearchBar = (props) => {
  //States
  const [input, setInput] = useState("");
  //React Router History object so that we can redirect on enter key press
  let history = useHistory();

  //Event Handlers
  //updates the input const
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  //redirects to correct weather page on enter press
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      setInput("");
      history.push(`/weather/${input}`);
    }
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={input}
        placeholder="Please enter your location"
        onChange={handleInputChange}
        onKeyPress={onEnterPress}
      ></input>
      <Link className={styles.button} to={`/weather/${input}`}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      </Link>
    </>
  );
};

export default SearchBar;
