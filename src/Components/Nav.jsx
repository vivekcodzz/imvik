import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#FEF06B" : "#474327",
  textDecoration: "none",
  
});

const Nav = () => {
  return (
    <div className="menu">
      <p className="text">
        <p>build</p>
        <p>beautiful</p>
        <p>things.</p>
      </p>
      <ul>
        <li>
        <NavLink to="/" style={linkStyle} className="space">
          About
        </NavLink>
        </li>

        <li>
          <NavLink to="/work" style={linkStyle} className="space">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/writing" style={linkStyle} className="space">
            Writing
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
