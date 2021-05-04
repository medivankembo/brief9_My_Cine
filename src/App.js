import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Star from "./pages/Star";
import TvShow from "./pages/TvShow";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/tv-show" component={TvShow} />
        <Route exact path="/stars" component={Star} />
      </div>
    </BrowserRouter>
  );
}

export default App;
