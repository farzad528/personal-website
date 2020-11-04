import React from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import routes from "../../data/routes";

const Header = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} to={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        <a
          href="https://ko-fi.com/fullstackfarzzy"
          className="app__navbar--link"
        >
          <span className="app__navbar--coffee-logo">
            <img
              src="https://storage.ko-fi.com/cdn/cup-border.png"
              className="kofimg"
              alt="coffee"
            />
          </span>
          Buy me a Coffee
        </a>
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
