import React from "react";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex px-3 fixed">
        <a className="navbar-brand" href="logo">
          LOGO
        </a>
        <SearchInput />

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
          <NavLink className="text-white h5" to="/">
            Home
          </NavLink>
          <NavLink className="text-white h5" to="/movies">
            Movies
          </NavLink>
          <NavLink className="text-white h5" to="/series">
            Series
          </NavLink>
          <NavLink className="text-white h5" to="/tv-show">
            Tv Show
          </NavLink>
          <NavLink className="text-white h5" to="/stars">
            Stars
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
/*
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarToggleExternalContent"
      aria-controls="navbarToggleExternalContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
  </div>
</nav> */
