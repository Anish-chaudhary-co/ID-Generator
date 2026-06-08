import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login/Login.jsx";

const Navbar = ({ handleLogin }) => {
  const [open, setOpen] = useState(false);

  const ActiveLink = "text-white bg-slate-800";
  const NormalLink = "hover:text-gray-500";

  return (
    <>
      <div>
        <div
          className="
    bg-blue-300
      hidden
      md:flex flex-row
      justify-start md:justify-between
      items-center
      w-30 md:w-full
      h-screen md:h-auto
      py-5
      px-5
      shadow-gray-300
      shadow-lg
    "
        >
          {/* Logo */}
          <div className="mb-10 md:mb-0">
            <span className="font-bold text-xl">IDGen</span>
          </div>

          {/* Menu */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer h-9 w-20 flex items-center justify-center rounded-md ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/template"
              className={({ isActive }) =>
                `cursor-pointer h-9 w-20 flex items-center justify-center rounded-md ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              Templates
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `cursor-pointer h-9 w-20 flex items-center justify-center rounded-md ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cursor-pointer h-9 w-20 flex items-center justify-center rounded-md ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              About us
            </NavLink>

            {/* login button */}
            <div className="p-2 bg-blue-400 rounded-md hover:bg-blue-500">
              <button onClick={handleLogin} className="font-bold text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between md:hidden items-center shadow-gray-200 shadow-lg px-5 py-4">
        <h1>IDGen</h1>
        <button className="text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>


        <div
          className={`fixed
          bg-blue-400
          top-0
          left-0
          h-screen
          w-52
          z-40
          shadow-lg
          shadow-gray-600
          transform
          transition-transform
          duration-300
          md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="flex flex-between m-2">
            <h2 className="font-bold text-2xl">IDGen</h2>
          <FaTimes
            className="text-2xl absolute top-2 right-2 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          </div>

          <div className="flex flex-col fixed top-16 left-0 right-0 md:flex-row md:gap-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
        `cursor-pointer m-2 rounded-md py-5 px-full text-center
                 ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/template"
              className={({ isActive }) =>
        `cursor-pointer m-2 rounded-md py-5 px-full text-center
                 ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              Templates
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
        `cursor-pointer m-2 rounded-md py-5 px-full text-center
                 ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
        `cursor-pointer m-2 rounded-md py-5 px-full text-center
                 ${
                  isActive ? ActiveLink : NormalLink
                }`
              }
            >
              About us
            </NavLink>

            {/* login button */}
            <div
              onClick={handleLogin}
              className="p-2 m-2 text-center bg-slate-700 rounded-md hover:bg-slate-500"
            >
              <button className="font-bold text-white">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
