import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import ScholarshipTypes from './components/ScholarshipTypes';
import ScholarForm from './components/ScholarForm';
import Landing from './components/Landing';
import StudentHome from './components/StudentHome';
import AdminLogin from './components/Adminlogin';
import InstituteHome from './components/InstituteHome';

import './App.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthProvider';
import PageNotFound from './components/PageNotFound';
import PageNotFound_2 from './components/PageNotFound_2';
function App() {
  const auth = useContext(AuthContext);
  console.log(auth.isStudentLoggedIn+ " "+ auth.isAdminLoggedIn);

  useEffect(()=>{
    const data =JSON.parse(localStorage.getItem('adm-data'));
    if(data){
      auth.adm_login(data.aid);
    }
    const data2 = JSON.parse(localStorage.getItem('stu-data'));
    if(data2){
      auth.stu_login(data2.sid);
    }
  }, [auth.adm_login, auth.stu_login])

  return (
    <>
      <div className="d-flex justify-content-center container text-center mt-4">
        <div className="border w-75">
          <h2 className="align-top">National Scholarship Portal India</h2>
          <h5 className="font-weight-normal">Government of India</h5>
        </div>
      </div>
      <Navbar />
      <Routes>
        {!auth.isAdminLoggedIn && !auth.isStudentLoggedIn && (
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/adminlogin" exact element={<AdminLogin />} />
            <Route path="/signup/landing" exact element={<Landing />} />
            <Route path="*" exact element={<PageNotFound />} />
          </>
        )}
        {auth.isStudentLoggedIn && (
          <>
            <Route path="/student/home" exact element={<StudentHome />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/scholarship" exact element={<ScholarshipTypes />} />
            <Route path="/scholarship/form" exact element={<ScholarForm />} />
            <Route path="*" exact element={<PageNotFound_2 />} />
          </>
        )}
        {auth.isAdminLoggedIn && (
          <>
            <Route path="/institute" exact element={<InstituteHome />} />
            <Route path="*" exact element={<PageNotFound_2 />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
