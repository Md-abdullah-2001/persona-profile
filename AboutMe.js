import React from "react";
const AboutMe = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundColor: "rgb(44, 182, 198)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse items-center py-12">
          <img
            alt=""
            src="https://i.ibb.co/7JFc534/service-1.png"
            className="max-w-sm  rounded-lg shadow-2xl animate-bounce"
          />
          <div className="mr-16 w-1/2 text-justify">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              Hello! My name is Abdullah and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2020 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
