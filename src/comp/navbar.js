import React from "react";
import logo from "../images/logo2.png"
import "./navbar.css";

function Navbar() {
    return(
        <>
        <header>
            <nav className = "nav">
                <div className="nav-logo">
                    <img src={logo}></img>
                    <h1>QRinfo</h1>
                </div>
                <div className="nav-right">
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <div className="nav-logo">
                        <button className="nav-btn">Create QR</button>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar;