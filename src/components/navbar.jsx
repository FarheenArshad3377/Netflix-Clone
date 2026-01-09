import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navbar = useNavigate();

  const moveSign = () => {
    navbar("/login");
  };

  return (
    <header className="banner">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-3">
        <Link className="navbar-brand" to="/home">
          <img src="netflix_logo.png" className="logo" alt="Netflix Logo" />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${showMobileMenu ? "show" : ""}`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">TV Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">New & Popular</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">My List</Link>
            </li>
          </ul>

          {/* Right icons */}
          <div className="d-flex align-items-center">
            <CiSearch className="nav-icon me-3" />
            <IoMdNotifications className="nav-icon me-3" />
            <button className="btn btn-danger" onClick={moveSign}>Sign In</button>
          </div>
        </div>
      </nav>

      {/* BANNER CONTENT */}
      <div className="banner-content">
        <div className="netflix-title">
         
          <h1 className="salma-text">Salma</h1>
        </div>

        <div className="banner-buttons">
          <button className="btn btn-light" onClick={() => setShowTrailer(true)}>
            ▶ Play
          </button>
          <button className="btn btn-secondary">More Info</button>
        </div>
      </div>

      {/* TRAILER MODAL */}
      {showTrailer && (
        <div className="trailer-modal d-flex justify-content-center align-items-center">
          <div className="trailer-box position-relative">
            <span
              className="close-btn position-absolute top-0 end-0 p-2"
              onClick={() => setShowTrailer(false)}
            >
              ✖
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zrQVY5wY4qg?autoplay=1"
              title="Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

