import React from 'react'

const PageNotFound = () => {
  return (
    <div
      className="container border"
      style={{
        width: "400px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <h5>Page doesn't exist or maybe you need to login first</h5>
    </div>
  );
}

export default PageNotFound