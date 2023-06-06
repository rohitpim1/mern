import React from "react";
import "./service.css";
import { FaEdit } from "react-icons/fa";
import serviceImg from "../../assests/undraw_mobile_login_ikmv.png";
const Service = () => {
  return (
    <section className="service">
      <div className="content wrapper">
        <div className="sub-content1">
          <h2>Light, Fast & Powerful</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ratione sit obcaecati totam accusantium, praesentium ullam autem
            ipsam illum corporis cumque nemo, ipsum officia velit vitae atque
            minima earum consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ratione sit obcaecati.
          </p>
          <div className="cont-parts">
            <div className="part1">
              <div className="part1-img">
                <FaEdit style={{fontSize:"30px"}}/>
              </div>
              <h4>Title goes here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ratione sit obcaecati.
              </p>
            </div>
            <div className="part1">
              <div className="part1-img">
                <FaEdit style={{fontSize:"30px"}}/>
              </div>
              <h4>Title goes here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ratione sit obcaecati.
              </p>
            </div>
          </div>
        </div>
        <div className="sub-content2">
          <img src={serviceImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Service;
