import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { nav } from '../../data/Data';

const Header = () => {
  const [navlist,setnavlist] = useState(false)
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>

          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              
            </ul>
          </div>

          <div className="button flex btn2">
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Log in
            </button>
          </div>

          <div className="toggle btn2">
            <button onClick={() => setnavlist(!navlist)}>
              {navlist ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
