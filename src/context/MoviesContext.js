import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const imageSiteLink = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

// Popular movies
export const popularMoviesContext = createContext();

export const PopularMoviesProvider = ({ children }) => {
  const [popularMovies, setPopularmovies] = useState([]);
  useEffect(() => {
    const getPopularMovies = async () => {
      const popularMovies = await axios(
        "https://api.themoviedb.org/3/movie/popular?api_key=86e7844afe44008b6c1d5c07da1adfd8"
      );
      setPopularmovies(popularMovies.data.results);
    };
    getPopularMovies();
  }, []);
  return (
    <popularMoviesContext.Provider value={[popularMovies, setPopularmovies]}>
      {children}
    </popularMoviesContext.Provider>
  );
};

// Top rated movies
export const ratedMoviesContext = createContext();

export const RatedMoviesProvider = ({ children }) => {
  const [ratedMovies, setRatedmovies] = useState([]);

  useEffect(() => {
    const getRatedMovies = async () => {
      const ratedMovies = await axios(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=86e7844afe44008b6c1d5c07da1adfd8"
      );
      setRatedmovies(ratedMovies.data.results);
    };
    getRatedMovies();
  }, []);
  return (
    <ratedMoviesContext.Provider value={[ratedMovies, setRatedmovies]}>
      {children}
    </ratedMoviesContext.Provider>
  );
};

// UpComing movies
export const upComingMoviesContext = createContext();
export const UpComingMoviesProvider = ({ children }) => {
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    const getUpComingMovies = async () => {
      const upComingMovies = await axios(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=86e7844afe44008b6c1d5c07da1adfd8"
      );
      setUpComingMovies(upComingMovies.data.results);
    };
    getUpComingMovies();
  }, []);
  return (
    <upComingMoviesContext.Provider value={[upComingMovies, setUpComingMovies]}>
      {children}
    </upComingMoviesContext.Provider>
  );
};

// Now playing movies
export const nowPlayingMoviesContext = createContext();
export const NowPlayingMoviesProvider = ({ children }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const nowPlayingMovies = await axios(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=86e7844afe44008b6c1d5c07da1adfd8"
      );
      setNowPlayingMovies(nowPlayingMovies.data.results);
    };
    getNowPlayingMovies();
  }, []);
  return (
    <nowPlayingMoviesContext.Provider value={[nowPlayingMovies, setNowPlayingMovies]}>
      {children}
    </nowPlayingMoviesContext.Provider>
  );
};
