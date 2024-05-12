import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ScholarshipTypes = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    console.log("hiiiii")
    navigate('/scholarship/form');
  }
  return (
    <>
      <section id="services">
        <div className="">
          <br />
          <Row>
            <div
              className="row mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="col">
                <Card>
                  <Card.Body>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="featured_info">
                      <span>Merit Based Scholarship</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore ratione facilis animi voluptas exercitationem.
                      </p>
                      <Link to={"/scholarship/form"}>
                        <Button variant="primary" onClick={handleClick}>
                          Apply Scholarships
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Body>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="featured_info">
                      <span>Need Based Scholarship</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut ipsum esse corrupti. Quo, labore debitis!
                      </p>
                      <Link to={"/scholarship/form"}>
                        <Button variant="primary" onClick={handleClick}>
                          Apply Scholarships
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Body>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div className="featured_info">
                      <span>International Scholarships</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non nostrum voluptate totam ipsa corrupti vero!
                      </p>
                      <Link to={"/scholarship/form"}>
                        <Button variant="primary" onClick={handleClick}>
                          Apply Scholarships
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Body>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div className="featured_info">
                      <span>International Scholarships</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non nostrum voluptate totam ipsa corrupti vero!
                      </p>
                      <Link to={"/scholarship/form"}>
                        <Button variant="primary" onClick={handleClick}>
                          Apply Scholarships
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card>
                  <Card.Body>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div className="featured_info">
                      <span>Sports Scholarships</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non nostrum voluptate totam ipsa corrupti vero!
                      </p>
                      <Link to={"/scholarship/form"}>
                        <Button variant="primary" onClick={handleClick}>
                          Apply Scholarships
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ScholarshipTypes;
