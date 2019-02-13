import React from 'react';
import './NavBar.css'
var Logoicon = require('./static/img/bellotero.svg');


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg d-flex flex-row flex-wrap justify-content-start">
            <div>
                <ul className="navbar-nav">
                    <li>
                        <a href="/"> <img src={Logoicon} alt="Bellotero Logo" /> </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/calculator" className="nav-link Solutions">Solutions</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link Partners">Partners</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link Stories">Stories</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link About">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link Blog">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;
