import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="link">
              weather
            </Link>
          </li>
          <li>
            <Link to="/chart" className="link">
              insights
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
