import React, { useContext } from "react";
import {NavLink, useNavigate} from "react-router-dom";

import './Navbar.css'
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth);

  
  return (
    <>
      {auth.isAdminLoggedIn ? (
        <div className="container border border primary mt-3">
          <h1 className="text-center fw-3">
            Institute Home Page
          </h1>
        </div>
      ) : (
        <nav className="nav row container-x border border m-2 ">
          <ul className="ul container-x row mt-3">
            {!auth.isAdminLoggedIn && !auth.isStudentLoggedIn && (
              <li className="li col m-2 p-3">
                <NavLink to="/" className="ms-1 ps-5 pe-5 p-3">
                  Home
                </NavLink>
              </li>
            )}
            {auth.isStudentLoggedIn && (
              <li className="li col m-2 p-3">
                <NavLink to="/student/home" className="ms-1 ps-5 pe-5 p-3">
                  StudentHome
                </NavLink>
              </li>
            )}
            <li className="li col m-2 p-3">
              <NavLink to="/about" className="ms-1 ps-5 pe-5 p-3">
                About
              </NavLink>
            </li>

            <li className="li col m-2 p-3">
              <NavLink to="/contact" className="ms-1 ps-5 pe-5 p-3">
                Contact
              </NavLink>
            </li>
            {auth.isStudentLoggedIn ? (
              ""
            ) : (
              <li className="li col m-2 p-3">
                <NavLink to="/signup" className="ms-1 ps-5 pe-5 p-3">
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
