// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-inner">
        <div className="logo">
          <h1 className="text-xl font-bold">📚</h1>
       
          <span className="logo-text">BookShelf</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Book</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
