//CSS
import "./Home.css";
//Components
import SearchBar from "../components/SearchBar";
//Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="home-welcome">
        <FontAwesomeIcon className="icon-cloud" icon={faCloud} />
        <h1>Welcome</h1>
      </div> */}
      <div className="home-SearchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
