import { faDivide } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/SearchBar";

const HomeScreen = (props) => {
  return (
    <div>
      <SearchBar submitHandler={props.submitHandler} />
    </div>
  );
};

export default HomeScreen;
