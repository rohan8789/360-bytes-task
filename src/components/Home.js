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
      <div className="container-x ms-5 me-5 mt-4">
        <div className="row border border primary">
          <div className="col border border primary">
            <div className="row mb-3">
              <div className='me-4 mt-2'>
                <div className="container border scrollable-container mt-2 mb-1">
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
              <div className='container'>
                <address className='container mt-1 border p-2'>
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
          <div className="col border border primary">
            <div
              className="scrollable-container mt-5"
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
            <div className='d-flex justify-content-center mt-5'>
              <button
                className="btn btn-primary"
                onClick={moveScholar}
                >
                View Scholarship
              </button>
              </div>
          </div>
          <div className="col border border primary">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home