import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './Form.css'
import { validate } from './validators';
import { AuthContext } from '../context/AuthProvider';

const Form = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setFormError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const switchHandle = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handle = () =>{
    navigate('/adminlogin');
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    let x = validate(loginForm);
    setFormError({
      email: x.email,
      password: x.password,
    });
    if (x.email === "" && x.password === "") {
      alert("Data is sent to backend");
      auth.stu_login("xyz");
      navigate('/student/home');
    } else {
      x.email = "";
      x.password = "";
    }
  };
  return (
    <form className="place-form" onSubmit={submitHandler}>
      <h1>Student Login</h1>
      <div className="form-control">
        <label htmlFor="email">Aadhar no: </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={loginForm.email}
          placeholder="Enter your Aadhar no "
        />
        {formError.email ? <p>{formError.email}</p> : ""}
      </div>

      <div className="form-control">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={loginForm.password}
          placeholder="Enter your password "
        />

        {formError.password ? <p>{formError.password}</p> : ""}
      </div>
      <a href="#">Forgot Password?</a>
      <a href="/signup">New User?</a>
      <div className="form-control">
        <button type="submit" className="btn-shared submit-btn">
          Login
        </button>
        <button onClick={handle} className="btn-shared submit-btn">
          Admin Login
        </button>
      </div>
    </form>
  );
}

export default Form