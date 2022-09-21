import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";
import logo from '../images/resume_011.pdf'; 
import pic from '../images/pranavpic.png'; 



const Contact = () => {


  return (
    <>
      <div className="home-page">
      <div className="home-div">
         <h2><b>Contact Me</b></h2>
         <img src={pic} alt="logo" />
         <div className='row' >
                         <div className='col-md-6' >
                            <label ><h3>Designation </h3></label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>Assistant Engg</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h3>Name </h3></label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>Pranav</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h3> Email </h3></label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>pranavuppcl@gmail.com</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h3> Phone</h3> </label>
                         </div>
                          <div className='col-md-6' >
                            <p><h3>9450121399</h3></p>
                         </div>
                         <div className='col-md-6' >
                            <label ><h4> Download Resume:</h4> </label>
                         </div>
                          <div className='col-md-6' >
                            <Link type='button' className='btn btn-success' to={logo} target="blank" download>Download</Link>
                         </div>
                         
                     </div>
      </div>
      </div>
      
    </>
  )
}

export default Contact
