import React from "react";

const Skills = () => {
  return (
    <div id="skills" style={{ backgroundColor: "rgb(29, 222, 238)" }}>
      <h1 className="text-5xl font-bold  text-start ml-36 mb-8 pt-10">
        Key Skills
      </h1>
      <div className=" w-2/3 mx-auto grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-7 py-20">
        <div className="w-2/3 flex items-center lg:flex-col">
          <img
            src="https://i.ibb.co/0tN0Lhz/css.png"
            className="w-3/4"
            alt=""
          />
          <h1 className="text-lg font-semibold">CSS</h1>
        </div>
        <div className="w-2/3 flex items-center lg:flex-col">
          <img
            src="https://i.ibb.co/CvbpsB5/tailwind.png"
            className="w-3/4"
            alt=""
          />
          <h1 className="text-lg font-semibold">Tailwind CSS</h1>
        </div>
        <div className="w-2/3 flex items-center lg:flex-col">
          <img
            src="https://i.ibb.co/pKjt9Xg/javascript-736400-640.png"
            className="w-3/4 rounded-lg"
            alt=""
          />
          <h1 className="text-lg font-semibold">Javascript</h1>
        </div>
        <div className="w-2/3 flex items-center lg:flex-col">
          <img
            src="https://i.ibb.co/m0Nd535/icons8-react-160.png"
            className="w-3/4"
            alt=""
          />
          <h1 className="text-lg font-semibold">React JS</h1>
        </div>
        <div className="w-2/3 flex items-center lg:flex-col">
          <img
            src="https://i.ibb.co/6JR4Qhm/node-js-736399.png"
            className="w-4/4"
            alt=""
          />
          <h1 className="text-lg font-semibold">Node JS</h1>
        </div>
        <div className="w-2/3 flex items-center lg:flex-col">
          <img src="https://i.ibb.co/YRzNzjj/vs.png" className="w-3/4" alt="" />
          <h1 className="text-lg font-semibold">Visual Studio</h1>
        </div>
        <div className="w-2/3 flex items-center lg:flex-col">
          <img
            src="https://i.ibb.co/rkYJ5pT/git.png"
            className="w-3/4"
            alt=""
          />
          <h1 className="text-lg font-semibold">Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
