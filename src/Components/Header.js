import React from "react";
import PropTypes from "prop-types";
import logo from "../images/sl-dark-logo.png";
import "../styles/Header.css";

function Header({ title }) {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <h1 className="Header-h1">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;