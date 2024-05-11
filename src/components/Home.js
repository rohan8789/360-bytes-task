import React from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import './Navbar';

const Home = () => {
    const navigate = useNavigate();
    const moveScholar = () =>{
      if(true){
        alert("you need to login first");
      }else{
        navigate('/scholarship');
      }
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
                }}
              >
                <div
                  className="scrollable-container"
                  style={{ height: "150px", marginTop: "20px" }}
                >
                  xyzove example creates three equal-width columns on small,
                  medium, large, and extra large devices using our predefined
                  grid classes. Those columns are centered in the page with the
                  parent . ove example creates three equal-width columns on
                  small, medium, large, and extra large devices using our
                  predefined grid classes. Those columns are centered in the
                  page with the parent .columns on small, medium, large, and
                  extra large devices using our predefined
                </div>
              </div>
              <div
                style={{
                  margin: "13px",
                  width: "350px",
                  height: "120px",
                  border: "1px solid black",
                }}
              >
                <address>
                  <strong>360 Bytes tech ventures</strong>
                  <br />
                  sector 74, phase-8, 
                  <br />
                  Mohali, chandigarh, 160072
                  <br />
                  India
                  <br />
                  <abbr title="Phone">Phone:</abbr> (123) 456-7890
                </address>
              </div>
            </div>
          </div>
          <div className="col-4 border border primary">
            <div
              className="scrollable-container"
              style={{ height: "200px", marginTop: "70px" }}
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
            <button
              className="btn btn-primary"
              style={{ position: "relative", left: "25%", top: "10%" }}
              onClick={moveScholar}
            >
              View Scholarship
            </button>
          </div>
          <div className="col-4 border border primary">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home