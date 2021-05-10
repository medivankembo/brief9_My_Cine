import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const imageSiteLink = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

// Data-shop
export const MoviesContext = createContext();

// MoviesProvider
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // axios.get("https://api.themoviedb.org/3/movie/550?api_key=86e7844afe44008b6c1d5c07da1adfd8")
  // .then(function(resp){resp})
  useEffect(() => {
    const movies = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/popular?api_key=86e7844afe44008b6c1d5c07da1adfd8"
      );
      setMovies(data.data.results);
      //            const srcImageLink = "https://www.themoviedb.org/t/p/w220_and_h330_face/" + data.data.results[0].poster_path
      //            console.log(srcImageLink);
    };
    movies();
  }, []);
  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {children}
    </MoviesContext.Provider>
  );
};
