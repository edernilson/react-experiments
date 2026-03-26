import React from "react";
import { Link } from "react-router-dom";

import logo from '../../chart.gif';

function Header() {
  const token = localStorage.getItem("token");
  
  return (
    <header>
      <img src={logo} alt="Skillsoft Logo" id="logo" />
      <h1><a href="index.html" >Skillsoft Weight Tracker</a></h1>
      <nav>
        <ul>
				<li><Link to="/">Home</Link></li>
				{/* <li><Link to="/enterweight">Enter Weight</Link></li>
				<li><Link to="/myweight">My Weight</Link></li> */}
          {!token ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/teamweights">Team Weights</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}
			</ul>
      </nav>
    </header>
  );
}

export default Header;