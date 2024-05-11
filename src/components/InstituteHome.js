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
          <div className="col-4 border border primary">
            <div className="row mb-3">
              <div
                style={{
                  margin: "13px",
                  width: "350px",
                  height: "220px",
                  border: "1px solid black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ textAlign: "center", marginTop: "40px" }}>
                  Institute notice
                </h3>
                <div
                  className="scrollable-container"
                  style={{ height: "150px", marginTop: "10px" }}
                >
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
          <div className="col-4 border border primary">
            <div className="container border mt-4 mb-4">
              <h4 style={{ marginTop: "30px", textAlign: "center" }}>
                All Application forms
              </h4>
              <ol
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                    margin: "2px",
                  }}
                >
                  <li>
                    <a href="#">Application Form-1</a>
                  </li>
                  <button style={{}}>View</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                    margin: "2px",
                  }}
                >
                  <li>
                    <a href="#">Application Form-2</a>
                  </li>
                  <button style={{}}>View</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                    margin: "2px",
                  }}
                >
                  <li>
                    <a href="#">Application Form-3</a>
                  </li>
                  <button>View</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                    margin: "2px",
                  }}
                >
                  <li>
                    <a href="#">Application Form-4</a>
                  </li>
                  <button>View</button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "220px",
                    margin: "2px",
                  }}
                >
                  <li>
                    <a href="#">Application Form-5</a>
                  </li>
                  <button>View</button>
                </div>
              </ol>
            </div>
            <div
              className="container border"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button style={{ margin: "10px" }}>
                Add Bonafide certificate
              </button>
            </div>
          </div>
          <div className="col-4 border border primary">
            <div
              className="container border border primary"
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={logMeOut}
                style={{ padding: "3px", margin: "15px" }}
              >
                Admin Logout
              </button>
            </div>
            <div className="container border mt-4">

            <h5 style={{ textAlign: "center", marginTop:"20px" }}>Application Form-3</h5>
            <div
              className="container"
              style={{
                  marginTop: "15px",
                  marginBottom:"10px",
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
              <button
                onClick={() => {
                    alert("verified");
                }}
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
            <div className="container mt-4" style={{display:"flex", justifyContent:"center"}}>
                <button style={{width:"80px"}}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstituteHome;
