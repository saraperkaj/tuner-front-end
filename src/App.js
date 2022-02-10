
import { Route, Routes } from "react-router-dom";
import Songs from "./Components/Songs";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import FootBar from "./Components/FootBar";
import New from "./Pages/New";
import Search from "./Pages/Search";


function App() {
  return (
    <div>
       <NavBar />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* work on the routes when we get more into the creation of things */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<Search />} />

      </Routes>
      <FootBar />
 
    </div>
  );
}

export default App;
