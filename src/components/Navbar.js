import React from "react";
import logo from '../assets/images/sample_logo.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <a href=""><img src={logo} alt="" width={300} className="h-16 py-2" /></a>
      </div>
      <div className="navbar-end">
        <p className="">Need help ? Call 8107344682</p>
      </div>
    </div>
  );
};

export default Navbar;
