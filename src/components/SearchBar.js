import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUndo } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

// SearchBar Component
// MUST be put in a div/container --> this is for resizing (home page vs weather page)
const SearchBar = ({ setLocation, setHasSearched }) => {
  //States
  const [input, setInput] = useState("");
  const inputRef = useRef();

  //Event Handlers
  //updates the input const
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  //redirects to correct weather page on enter press
  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      setLocation(input);
      setHasSearched(true);
      setInput("");
      inputRef.current.blur();
    }
  };
  //handles search button click
  const submitClick = () => {
    setLocation(input);
    setHasSearched(true);
    setInput("");
    inputRef.current.blur();
  };
  //handles back button click
  const resetClick = () => {
    setHasSearched(false);
  };

  return (
    <>
      <button className={styles.button1} onClick={resetClick}>
        <FontAwesomeIcon icon={faUndo} className={styles.icon} />
      </button>
      <input
        className={styles.input}
        type="text"
        value={input}
        ref={inputRef}
        placeholder="Please enter your location"
        onChange={handleInputChange}
        onKeyPress={onEnterPress}
      ></input>
      <button className={styles.button1} onClick={submitClick}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      </button>
    </>
  );
};

export default SearchBar;
