import React from "react";
import "./hero.css";
import prodImage from "../../assests/Group.png";
import Navbar from "../../components/Navbar";
const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-img">
        <img src={prodImage} alt="product" />
      </div>
      <div className="hero-content">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ratione sit obcaecati totam accusantium, praesentium ullam autem ipsam
          illum corporis cumque nemo, ipsum officia velit vitae atque minima
          earum consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ratione sit obcaecati.
        </p>
        <div className="hero-btn">
            <div className="btn1 btn">
                <button>Purchase UI Kit</button>
            </div>
            <div className="btn2 btn">
                <button>Learn More</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
