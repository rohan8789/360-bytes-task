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
          <div className="col border border primary">
            <div className="row mb-3 mt-4">
              <div
                className="m-3 d-flex flex-column justify-content-center align-items-center border border-black"
                style={{ width: "92%" }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  My Profile
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  Check updates
                </a>
                <a href="#" style={{ textDecoration: "none" }}>
                  Notifications
                </a>
                <button className="mb-3" onClick={logMeOut}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="col border border primary">
            <h4 className="mt-5 text-center">All Schemes</h4>
            <ol className="justify-content-center align-items-center d-flex flex-column ">
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
          <div className="col border border primary">
            <h3 className="text-center mt-4">Guildlines</h3>
            <div className="scrollable-container m-2" style={{height:"65%"}}>
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
            <p className="pt-4 ps-5 pe-5">
              ra large devices using our predefined grid classes. Those columns
              are centered in the page with the parent . ove example creates
              three equal-width columns on small, medium, large, and extra large
              devices using our predefined gripredefined grid classes. Those
              columns are centered in the page with the parent . ove example
              creates three equal-width columns on small, medium, large, and
              extra large devices using our predefined gri
            </p>
            <div className='d-flex justify-content-center'>
              <button className="btn btn-primary" onClick={onScholarClick}>
                View Scholarship
              </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentHome;