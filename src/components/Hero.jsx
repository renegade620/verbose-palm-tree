import React, { useState, useEffect } from "react";

import "../styles/hero.css";
import profilePicture from "../assets/profile.webp";

function Hero() {
    const [currentRole, setCurrentRole] = useState("Software Developer");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRole(
              currentRole === "Software Developer"? "Creative Writer" : "Software Developer"
            );
          }, 4000);

          return () => clearInterval(intervalId);
        }, []);
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Frankline Were</h1>
          <p className="hero-description">
            I am a{" "}
            <span className="roles-container">
              <span className="role-1">{currentRole}</span> and{" "}
              <span className="role-2">{currentRole === "Software Developer" ? "Creative Writer" : "Software Developer"}</span>
            </span>
            . I love code wars and word porn.
          </p>
          <button className="cta-buttom">Un/Suit up and Jump in</button>
        </div>
        <div className="hero-image">
          <img
            src={profilePicture}
            alt="Frankline Were"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
