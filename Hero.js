import React from "react";

const Hero = () => {
  return (
    <div id="home">
      <div
        className="hero min-h-screen "
        style={{ backgroundColor: " rgb(44, 202, 218)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt=""
            src="https://i.ibb.co/3ypxCNB/intro-section-illustration.png"
            className="max-w-sm rounded-lg shadow-2xl animate-pulse"
          />
          <div className="mr-16 w-1/2 text-justify">
            <h1 className="text-5xl font-bold">Hey!, I'm Abdullah</h1>
            <p className="py-6">
              I’m a Front End Developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building accessible, human-centered
              products
            </p>
            <button className="btn btn-primary rounded-full text-xl font-bold">
              {" "}
              <a
                href="https://drive.google.com/uc?export=download&id=1s2VlZcsw_c1dI3TxzMyaEzHKjQdMkDl3"
                download
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
