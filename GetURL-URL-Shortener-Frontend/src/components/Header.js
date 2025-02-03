import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../logo.png";
import {Link, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Clicks from "./Clicks";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

export default function Header(props) {

  const[theme,setTheme] = useState(moon);
  const[themeName,setThemeName] = useState('Dark');
  const[themeStyle,setThemeStyle] = useState('light-theme');
  
  const toggleTheme = () => {
        if (theme === moon) {
          setTheme(sun);
          setThemeName('Light');
          setThemeStyle('dark-theme');
        } else {
          setTheme(moon);
          setThemeName('Dark');
          setThemeStyle('light-theme');
        }

      };

    useEffect(() => {
          document.body.className = themeStyle;
        }, [themeStyle]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container-fluid">
        <a className="navbar-brand flex-grow-1 text-white ms-2 fs-2" href="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-center me-2"
          />
          Get URL
        </a>
        <button
          className="navbar-toggler border border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5 ">
            <Link to="/" className="nav-link text-white me-3" aria-current="page">
              Home
            </Link>
            <Link to="/clicks"className="nav-link text-white">
              Your URL Clicks
            </Link>
          </div>
        </div>
      </div>
      <a className="float" href="#img-theme" onClick={toggleTheme}>
          <img
            src={theme}
            alt="Theme Icon"
            width="20"
            height="20"
            className="d-inline-block align-text-center me-2"
            id="img-theme"
          />
        <span className="theme-switch">{themeName}</span>
          </a>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/clicks' element={<Clicks/>}></Route>
    </Routes>
    </div>
  );
}
