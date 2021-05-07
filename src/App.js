import React from "react";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Stars from "./pages/Stars";
import TvShow from "./pages/TvShow";
import Movies from "./pages/Movies";
import { MoviesProvider } from "./context/MoviesContext";
import Kids from "./pages/Kids";
import News from "./pages/News";

function App() {
  return (
    <MoviesProvider>
      <div className="bg-dark">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/tv-show" component={TvShow} />
        <Route exact path="/tv-show" component={Kids} />
        <Route exact path="/stars" component={Stars} />
        <Route exact path="/news" component={News} />
      </div>
    </MoviesProvider>
  );
}

export default App;
