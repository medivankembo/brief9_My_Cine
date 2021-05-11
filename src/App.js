import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Stars from "./pages/Stars";
import TvShow from "./pages/TvShow";
import Movies from "./pages/Movies";
import {
  NowPlayingMoviesProvider,
  PopularMoviesProvider,
  RatedMoviesProvider,
  UpComingMoviesProvider,
} from "./context/MoviesContext";
import Kids from "./pages/Kids";
import News from "./pages/News";
import ShowDetail from "./pages/ShowDetail";
import StarDetail from "./pages/StarDetail";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <PopularMoviesProvider>
      <RatedMoviesProvider>
        <UpComingMoviesProvider>
          <NowPlayingMoviesProvider>
            <div className="application">
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/movies" component={Movies} />
                <Route exact path="/movies/show-detail" component={ShowDetail} />

                <Route exact path="/series" component={Series} />
                <Route exact path="/series/show-detail" component={ShowDetail} />

                <Route exact path="/tv-show" component={TvShow} />

                <Route exact path="/tv-show" component={Kids} />

                <Route exact path="/stars" component={Stars} />
                <Route exact path="/stars/star-detail" component={StarDetail} />


                <Route exact path="/news" component={News} />

                <Route exact path="*" component={ErrorPage} />

              </Switch>
            </div>
          </NowPlayingMoviesProvider>
        </UpComingMoviesProvider>
      </RatedMoviesProvider>
    </PopularMoviesProvider>
  );
}

export default App;
