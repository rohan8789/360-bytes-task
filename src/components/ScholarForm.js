import React, { useState } from "react";

const ScholarForm = () => {
  const [basicDetails, setBasicDetails] = useState({
    aadharNo: "",
    religion: "",
    fatherName: "",
    motherName: "",
    annualIncome: "",
  });

  const [academicDetails, setAcademicDetails] = useState({
    instituteName: "",
    fromDate: "",
    toDate: "",
    universityName: "",
    cgpa: "",
    class10Details: "",
    class12Details: "",
  });

  const [otherDetails, setOtherDetails] = useState({
    disability: "",
    maritalStatus: "",
    nationality: false,
  });

  const handleBasicDetailsChange = (e) => {
    const { name, value } = e.target;
    setBasicDetails({ ...basicDetails, [name]: value });
  };

  const handleAcademicDetailsChange = (e) => {
    const { name, value } = e.target;
    setAcademicDetails({ ...academicDetails, [name]: value });
  };

  const handleOtherDetailsChange = (e) => {
    const { name, value } = e.target;
    setOtherDetails({ ...otherDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      basicDetails,
      academicDetails,
      otherDetails,
    });
  };

  const handleReset = () => {
    setBasicDetails({
      aadharNo: "",
      religion: "",
      fatherName: "",
      motherName: "",
      annualIncome: "",
    });
    setAcademicDetails({
      instituteName: "",
      fromDate: "",
      toDate: "",
      universityName: "",
      cgpa: "",
      class10Details: "",
      class12Details: "",
    });
    setOtherDetails({
      disability: "",
      maritalStatus: "",
      nationality: false,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Basic Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="aadharNo" className="form-label">
            Aadhar No:
          </label>
          <input
            type="text"
            className="form-control"
            id="aadharNo"
            name="aadharNo"
            value={basicDetails.aadharNo}
            onChange={handleBasicDetailsChange}
          />
          <select
            className="form-select mt-2"
            name="religion"
            value={basicDetails.religion}
            onChange={handleBasicDetailsChange}
          >
            <option value="">Select Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fatherName" className="form-label">
            Father Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="fatherName"
            name="fatherName"
            value={basicDetails.fatherName}
            onChange={handleBasicDetailsChange}
          />
          <label htmlFor="motherName" className="form-label mt-2">
            Mother Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="motherName"
            name="motherName"
            value={basicDetails.motherName}
            onChange={handleBasicDetailsChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="annualIncome" className="form-label">
            Annual Income:
          </label>
          <input
            type="text"
            className="form-control"
            id="annualIncome"
            name="annualIncome"
            value={basicDetails.annualIncome}
            onChange={handleBasicDetailsChange}
          />
        </div>

        <hr />

        <h2>Academic Details</h2>
        <div className="mb-3">
          <label htmlFor="instituteName" className="form-label">
            Institute Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="instituteName"
            name="instituteName"
            value={academicDetails.instituteName}
            onChange={handleAcademicDetailsChange}
          />
        </div>
        {/* Add more academic fields as needed */}

        <hr />

        <h2>Other Details</h2>
        <div className="mb-3">
          <label htmlFor="disability" className="form-label">
            Disability:
          </label>
          <input
            type="text"
            className="form-control"
            id="disability"
            name="disability"
            value={otherDetails.disability}
            onChange={handleOtherDetailsChange}
          />
        </div>
        {/* Add more other details fields as needed */}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="nationality"
            name="nationality"
            checked={otherDetails.nationality}
            onChange={(e) =>
              setOtherDetails({
                ...otherDetails,
                nationality: e.target.checked,
              })
            }
          />
          <label className="form-check-label" htmlFor="nationality">
            I confirm my nationality
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScholarForm;
