import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const InstituteHome = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  
  const logMeOut = () => {
    auth.adm_logout();
    navigate("/");
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row border border primary">
          <div className="col border border primary">
            <div className="row mb-3">
              <div>
                <h3 className="text-center mt-3">Institute notice</h3>
                <div className="scrollable-container mt-3">
                  xyzove example creates three equal-width columns on small,
                  medium, large, and extra large devices using our predefined
                  grid classes. Those columns are centered in the page with the
                  parent . ove example creates three equal-width columns on
                  small, medium, large, and extra large devices using our
                  predefined grid classes. Those columns are centered in the
                  page with the parent .columns on small, medium, large, and
                  extra large devices using our predefined grid classes. Those
                  columns are centered in the page with the parent . ove example
                  creates three equal-width columns on small, medium, large, and
                  extra large devices using our predefined gri
                </div>
              </div>
            </div>
          </div>
          <div className="col border border primary">
            <div className="container border mt-4 mb-4">
              <h4 className="text-center mt-2 mb-4">All Application forms</h4>
              <ol className="d-flex flex-column align-items-center">
                <div className="d-flex w-100 justify-content-md-between m-1">
                  <li>
                    <a href="#">Application Form-1</a>
                  </li>
                  <button>View</button>
                </div>
                <div className="d-flex w-100 justify-content-md-between m-1">
                  <li>
                    <a href="#">Application Form-2</a>
                  </li>
                  <button style={{}}>View</button>
                </div>
                <div className="d-flex w-100 justify-content-md-between m-1">
                  <li>
                    <a href="#">Application Form-3</a>
                  </li>
                  <button>View</button>
                </div>
                <div className="d-flex w-100 justify-content-md-between m-1">
                  <li>
                    <a href="#">Application Form-4</a>
                  </li>
                  <button>View</button>
                </div>
                <div className="d-flex w-100 justify-content-md-between m-1">
                  <li>
                    <a href="#">Application Form-5</a>
                  </li>
                  <button>View</button>
                </div>
              </ol>
            </div>
            <div className="container border d-flex justify-content-center m-1">
              <button className="mt-2">
                Add Bonafide certificate
              </button>
            </div>
          </div>
          <div className="col border border primary">
            <div className="container border border primary mt-3 d-flex justify-content-center ">
              <button onClick={logMeOut} className="p-1 m-2">
                Admin Logout
              </button>
            </div>
            <div className="container border mt-4">
              <h5 className="text-center mt-2">
                Application Form-3
              </h5>
              <div className="container mt-2 mb-2 d-flex justify-content-center align-items-center">
                <button onClick={() => {alert("verified");}}
                  style={{ padding: "3px", margin: "5px", width: "80px" }}
                >
                  Verify
                </button>
                <button
                  onClick={() => {
                    alert("Rejected");
                  }}
                  style={{ padding: "3px", margin: "5px", width: "80px" }}
                >
                  Reject
                </button>
              </div>
            </div>
            <div
              className="container mt-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button style={{ width: "80px" }}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstituteHome;
