import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [institutionCode, setInstitutionCode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();
  const handleReset = () => {
    setState("");
    setDistrict("");
    setName("");
    setGender("");
    setMobile("");
    setEmail("");
    setInstitutionCode("");
    setAadharNumber("");
    setPassword("");
    setConfirmPassword("");
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to check institution details with the database here
    alert("Registered");
    navigate('/signup/landing');
    
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">State of Domicile:</label>
          <select
            className="form-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="male">Bihar</option>
            <option value="female">Punjab</option>
            <option value="other">Kerala</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label">District:</label>
          <select
            className="form-select"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="male">Vaishali</option>
            <option value="female">xyz</option>
            <option value="other">abc</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">

      <div className="mb-3 col-9">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3 col-3">
        <label className="form-label">Date of Birth:</label>
        <input
          type="date"
          className="form-control"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          />
      </div>
      </div>

      <div className="row mb-3">

      <div className="mb-3 col-6">
        <label className="form-label">Gender:</label>
        <select
          className="form-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-3 col-6">
        <label className="form-label">Mobile Number:</label>
        <input
          type="text"
          className="form-control"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          />
      </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row mb-3">

      <div className="mb-3 col-6">
        <label className="form-label">Institution Code:</label>
        <input
          type="text"
          className="form-control"
          value={institutionCode}
          onChange={(e) => setInstitutionCode(e.target.value)}
          />
      </div>
      <div className="mb-3 col-6">
        <label className="form-label">Aadhar Number:</label>
        <input
          type="text"
          className="form-control"
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
          />
      </div>
          </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="row mb-3 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary col-2"
          style={{ marginRight: "5px" }}
        >
          Submit
        </button>
        <button className="btn btn-primary col-2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Signup;
