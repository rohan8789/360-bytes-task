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
    {auth.isAdminLoggedIn ? <div className="container border border primary" style={{marginTop:"20px"}}><h1 style={{textAlign:"center", fontWeight:"500"}}>Institute Home Page</h1></div> : 
      <nav className="nav navbar">
        <div className="container border border primary">
          <ul className="ul row">
            {
              !auth.isAdminLoggedIn && !auth.isStudentLoggedIn &&  <li className="li col"><NavLink to="/">Home</NavLink></li>
            }
            {
              auth.isStudentLoggedIn && <li className="li col"><NavLink to="/student/home">StudentHome</NavLink></li>
            }
            <li className="li col">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="li col">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {auth.isStudentLoggedIn ? "": (
              <li className="li col">
                <NavLink to="/signup">Register</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    }
    </>
  );
};

export default Navbar;
