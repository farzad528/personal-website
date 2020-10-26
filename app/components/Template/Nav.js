import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img
          src="https://github.com/farzad528/personal-website/blob/main/public/images/me_icon.jpg?raw=true"
          alt=""
        />
      </Link>
      <header>
        <h2>Farzad Sunavala</h2>
        <p>
          <a href="mailto:fsunavala1@gmail.com">fsunavala1@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Farzad. I like building things. I am a{" "}
        <a href="https://www.lsu.edu/eng/pete/index.php">
          LSU Petroleum Engineering
        </a>{" "}
        graduate, self-taught programmer thanks to Stack Overflow, YouTube,
        Udemy, Coursera, and edX, as well as the co-founder and CTO of{" "}
        <a href="https://www.instagram.com/barstat.lsu/?hl=en">BarStat</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Farzad D&apos;Sunavala <Link to="/">fullstackfarzzy.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
