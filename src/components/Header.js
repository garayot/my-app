import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html">Club 1990</a></h1>
     
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#news">News</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#events">Events</a></li>
          <li><a className="nav-link scrollto" href="#chefs">Teams</a></li>
          <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <Link to='/Login'>   <button className="btn w-full bg-[#fff] text-yellow py-2 border color-white rounded mb-2">Login</button> </Link>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      

    </div>
  </header>
  )
}

export default Header