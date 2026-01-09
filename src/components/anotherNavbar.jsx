import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
const AnotherNavbar = () => {
  return (
    <div>
       {/* NAVBAR */}
      <nav className="netflix-navbar-another  mb-3">
        <div className="nav-left">
          <img src="netflix_logo.png" className="logo" />

          <ul className="nav-links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/movie">TV Shows</Link>
            </li>
            <li>
              <Link to="/movie">Movies</Link>
            </li>
            <li>
              <Link to="/movie">New & Popular</Link>
            </li>
            <li>
              <Link to="/movie">My List</Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <CiSearch className="nav-icon" />
          <IoMdNotifications className="nav-icon" />
          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>

    </div>
  )
}

export default AnotherNavbar
