import React from "react";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-3 fixed">
{/*         <a className="navbar-brand" href="http://localhost:3000/">
          LOGO
        </a>
        <SearchInput /> */}

        <button
          className="navbar-toggler p-0 text-center"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <h2>
            <i className="fas fa-bars p-0"></i>Menu
          </h2>
        </button>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <ul className="bg-dark p-4">
          <NavLink className="text-white h5 d-block p-2 align-items-end" to="/">
            Home
          </NavLink>
          <NavLink className="text-white h5 d-block p-2" to="/movies">
            Movies
          </NavLink>
          <NavLink className="text-white h5 d-block p-2" to="/series">
            Series
          </NavLink>
          <NavLink className="text-white h5 d-block p-2" to="/tv-show">
            Tv Show
          </NavLink>
          <NavLink className="text-white h5 d-block p-2" to="/kids">
            Kids
          </NavLink>
          <NavLink className="text-white h5 d-block p-2" to="/stars">
            Stars
          </NavLink>
          <NavLink className="text-white h5 d-block p-2" to="/news">
            News
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavBar;