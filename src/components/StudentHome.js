import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const StudentHome = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const onScholarClick = () =>{
        if (false) {
          alert("you need to login first");
        } else {
          navigate("/scholarship");
        }
    }
    const logMeOut = () =>{
        auth.stu_logout();
        navigate('/');
    }
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
                <a href="#" style={{ textDecoration: "none" }}>
                  My Profile
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none" }}>
                  Check updates
                </a>
                <br />
                <button onClick={logMeOut}>Logout</button>
              </div>
            </div>
          </div>
          <div className="col-4 border border primary">
            <h4 style={{ marginTop: "70px", textAlign: "center" }}>Schemes</h4>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li>
                <a href="#">scheme 1</a>
              </li>
              <li>
                <a href="#">scheme 1</a>
              </li>
              <li>
                <a href="#">scheme 1</a>
              </li>
              <li>
                <a href="#">scheme 1</a>
              </li>
              <li>
                <a href="#">scheme 1</a>
              </li>
            </ol>
          </div>
          <div className="col-4 border border primary">
            <h3 style={{ textAlign: "center", marginTop: "40px" }}>
              Guildlines
            </h3>
            <div
              className="scrollable-container"
              style={{ height: "150px", marginTop: "10px" }}
            >
              xyzove example creates three equal-width columns on small, medium,
              large, and extra large devices using our predefined grid classes.
              Those columns are centered in the page with the parent . ove
              example creates three equal-width columns on small, medium, large,
              and extra large devices using our predefined grid classes. Those
              columns are centered in the page with the parent .columns on
              small, medium, large, and extra large devices using our predefined
              grid classes. Those columns are centered in the page with the
              parent . ove example creates three equal-width columns on small,
              medium, large, and extra large devices using our predefined gri
            </div>
          </div>
          <div className="container border">
            <p style={{paddingLeft:"80px", paddingRight:"80px", paddingTop:"10px"}}>
              ra large devices using our predefined grid classes. Those columns
              are centered in the page with the parent . ove example creates
              three equal-width columns on small, medium, large, and extra large
              devices using our predefined gri
            </p>
            <button
              className="btn btn-primary"
              style={{
                position: "relative",
                left: "40%",
                width: "200px",
                margin: "30px",
                marginTop:"0px"
              }}
              onClick={onScholarClick}
            >
              View Scholarship
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentHome;