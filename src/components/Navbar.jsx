import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 backdrop-blur-lg">
      <h1 className="text-2xl">Clone</h1>
      <div className="mr-3 gap-5 text-1xl flex justify-around items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
