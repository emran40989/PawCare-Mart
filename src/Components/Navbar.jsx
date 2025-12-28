import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
  }

  const links = (
    <>
      <li>
        <NavLink to="/" className="text-sm font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies" className="text-sm font-semibold">
          Pets & Supplies
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"} className="text-sm font-semibold">
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to={"/add-service"} className="text-sm font-semibold">
          Add Service
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto py-2 shadow-sm my-2 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex gap-5 justify-center items-center">
            <img src={logo} alt="Logo" className="w-[30px]" />
            <p className="text-lg font-semibold">PawCare Mart</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user && (
          <div className="navbar-end">
            <button onClick={handleSignOut} className="btn btn-outline btn-primary">
              {" "}
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        )}
        {!user && (
          <div className="navbar-end">
            <button className="btn btn-outline btn-primary">
              {" "}
              <Link to={"/login"} className="text-sm font-semibold">
                Login
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
