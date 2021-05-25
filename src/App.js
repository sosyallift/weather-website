import { useState } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [location, setLocation] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="app">
      <nav className={`navbar ${hasSearched ? "navbar-transition" : ""}`}>
        <div
          className={`searchbar ${hasSearched ? "searchbar-transition" : ""}`}
        >
          <SearchBar
            setHasSearched={setHasSearched}
            setLocation={setLocation}
          />
        </div>
      </nav>
      <Transition in={hasSearched} timeout={900}>
        {(state) => (
          <div className={`weather-transition weather-transition-${state}`}>
            {hasSearched && <Weather location={location} />}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default App;
