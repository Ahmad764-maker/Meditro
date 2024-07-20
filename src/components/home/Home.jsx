// import React from "react";
import "./home.css";
export default function Home() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="sq">
            <img className="squ" src="/imgs/download (3).png" alt="" />
            <img className="cir" src="/imgs/download.png" alt="" />
            <img className="tr" src="/imgs/download (5).png" alt="" />
          </div>
          <div className="left col-md-6 col-lg-6">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <div className="button">
              <a href="#about">Read more</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <img className="doc" src="/imgs/doctor.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
