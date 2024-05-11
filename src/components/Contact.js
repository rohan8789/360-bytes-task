import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    scheme: "",
    address: "",
    domicileCertificate: null,
    photograph: null,
    idCard: null,
    incomeCertificate: null,
    marks10th: null,
    marks12th: null,
    aadharCardPdf: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      scheme: "",
      address: "",
      domicileCertificate: null,
      photograph: null,
      idCard: null,
      incomeCertificate: null,
      marks10th: null,
      marks12th: null,
      aadharCardPdf: null,
      termsAccepted: false,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Details Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="scheme" className="form-label">
            Choose Scheme Applying For:
          </label>
          <input
            type="text"
            className="form-control"
            id="scheme"
            name="scheme"
            value={formData.scheme}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="domicileCertificate" className="form-label">
            Domicile Certificate:
          </label>
          <input
            type="file"
            className="form-control"
            id="domicileCertificate"
            name="domicileCertificate"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photograph" className="form-label">
            Photograph:
          </label>
          <input
            type="file"
            className="form-control"
            id="photograph"
            name="photograph"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idCard" className="form-label">
            ID Card:
          </label>
          <input
            type="file"
            className="form-control"
            id="idCard"
            name="idCard"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="incomeCertificate" className="form-label">
            Income Certificate:
          </label>
          <input
            type="file"
            className="form-control"
            id="incomeCertificate"
            name="incomeCertificate"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="marks10th" className="form-label">
            10th Marks:
          </label>
          <input
            type="file"
            className="form-control"
            id="marks10th"
            name="marks10th"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="marks12th" className="form-label">
            12th Marks:
          </label>
          <input
            type="file"
            className="form-control"
            id="marks12th"
            name="marks12th"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aadharCardPdf" className="form-label">
            Aadhar Card PDF:
          </label>
          <input
            type="file"
            className="form-control"
            id="aadharCardPdf"
            name="aadharCardPdf"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            I accept the terms and conditions
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

export default Contact;
