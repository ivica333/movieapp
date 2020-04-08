import React from 'react';
import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="links">
        <Link to="/movies" className="link">Movies</Link>
        <Link to="/shows" className="link">TV Shows</Link>
      </div> 
    </div>
  );
}

export default Navbar;