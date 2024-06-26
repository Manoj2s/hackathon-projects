import React from 'react'
import './Navbar.css'
// import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="parent">
      <div className="left-nav">
        <h1>Crafters Movies</h1>
      </div>
      <div className="center-nav">
        <div className="search-box">
          <input
            type="text"
            className="searchbar"
            placeholder="Search Your Movie..."
          />
          {/* <CiSearch className='search-icon' /> */}
         
        </div>
      </div>
      <div className="right-nav">
        <button>Favorite</button>
      </div>
    </div>
  );
}

export default Navbar