import React from "react";

const Projects = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(44, 182, 198)" }}
      id="project"
      className="py-12"
    >
      <h1 className="text-5xl font-bold  text-start ml-36 mb-8">Projects</h1>
      <div className="w-3/4 h-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
        <div className="card w-80 h-72 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <img src="https://i.ibb.co/WfQ9TYF/jbjhbjjb.jpg" alt="" />
          <div>
            <h1 className="text-2xl font-semibold">Plumbing-Service</h1>
            <p>
              This is a service providing project , built for showcasing a
              service where buyer can put their review about the service..
            </p>
          </div>
        </div>
        <div className="card w-80 h-72 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <img
            className="w-full h-36"
            src="https://i.ibb.co/xq3XCpR/dfddf.jpg"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">Online Master</h1>
            <p>
              {" "}
              It is a online course website where reader can create account and
              download book as PDF.
            </p>
          </div>
        </div>
        <div className="card w-80 h-72 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
          <img className="" src="https://i.ibb.co/FKL05P6/dimg4.jpg" alt="" />
          <div>
            <h1 className="text-2xl font-semibold">Gadget Bazar</h1>
            <p>
              This is a Full-stack project , built for buying used product as
              buyer selling as seller ..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
