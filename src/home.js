import React from "react";
import './Home.css';
import Navbar from './comp/navbar.js';
import Content from './comp/content.js';

function Home(){
    return (
        <div className="Home">
          <header className="Home-header">
            <Navbar></Navbar>
            <Content></Content>
            {/* <SplineEx></SplineEx> */}
          </header>
        </div>
      );
}

export default Home;