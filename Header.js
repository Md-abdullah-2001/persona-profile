import React from "react";

const Header = () => {
  return (
    <div className="relative">
      <div
        className="navbar fixed top-0 z-10"
        style={{ backgroundColor: "rgb(29, 222, 238)" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li tabIndex={0}>
                <a href="/" className="justify-between">
                  Projects
                </a>
              </li>
              <li>
                <a href="/">Skills</a>
              </li>
              <li>
                <a href="https://drive.google.com/uc?export=download&id=1s2VlZcsw_c1dI3TxzMyaEzHKjQdMkDl3">
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className=" ml-16  rounded ">
            <span>
              {" "}
              <a
                href="/"
                className="btn   text-center normal-case hidden lg:block text-2xl "
              >
                A
              </a>
              bdullah
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white  font-semibold">
            <li>
              <a href="#home">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li className="text-xl font-bold">
              <a
                href="https://drive.google.com/uc?export=download&id=1s2VlZcsw_c1dI3TxzMyaEzHKjQdMkDl3"
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden  navbar-end">
          <span>
            {" "}
            <a href="/" className="btn">
              A
            </a>
          </span>
          bdullah
        </div>
      </div>
    </div>
  );
};

export default Header;
