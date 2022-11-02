import React from "react";
import { Link } from "react-router-dom";
import { HOME, HEROES, COMICS, SERIES } from "../routes/paths";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <div className="header">
      <nav className="navbar">
        <Link to={HOME}><img width="25%" src= "/src/assets/logoMarvel.png" /></Link>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to={HOME}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to={HEROES}>Heroes</Link>
          </li>
          <li className="nav-item">
            <Link to={COMICS}>Comics</Link>
          </li>
          <li className="nav-item">
            <Link to={SERIES}>Series</Link>
          </li>
        </ul>
      </nav>
      <ul></ul>
    </div>
  );
};

export default Navbar;
