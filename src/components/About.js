import React from 'react'
import shivapic from "../images/shiva.jpg";
import { useNavigate} from 'react-router-dom';

const bt =  {border: '0px solid #eee',
  color: '#460B13',
  fontFamily:'Apple Chancery, cursive',
  backgroundColor: '#fff',
  paddingLeft: '80px'
}
const btl =  {
  color: '#460B13',
  fontFamily:'Gill Sans, sans-serif',
  paddingLeft: '80px'
}
const cont = {
   maxWidth: '65%',
   marginBottom: '100px',
   paddingBottom: '10px'
 };

 

const About = () => {

     
  return (
    <>
      <div className='container emp-profile mt-5' style={cont}>
             <form method='GET'>
                   <div className='row'>
                        <div className='col-md-4'>
                           <div className='profile-img' >
                           <img src={shivapic} alt="pic" />
                           </div>
                        </div>

              <div className='col-md-6'>
                      <div className='profile-head'><br/>
                           <h5><b>!!!...About Me...!!!</b></h5>
                          <h5>...Web Developer...</h5>
                            <br/>
                          <ul className='nav nav-tabs' role='tablist'>
                            
                            <li  className= "nav-item">
                              <a className='nav-link active'  id='home-tab'  data-toggle='tab'  role='tab'  href='#home'>About </a>
                            </li>

                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#profile'>SkillSet </a>
                            </li>
                            <li className= "nav-item">
                             <a className='nav-link '  id='home-tab'  data-toggle='tab'  role='tab'  href='#exp'>Experience </a>
                            </li>

                          </ul>
                
                      </div>
              
                 </div>

           <div className='col-md-2' ><br/>
              {/* <input type='submit' className='profile-edit-btn btn btn-primary' name='btnAddMore' value='Edit Profile' ></input> */}
           </div>

          </div >

          <div className='row' >
            
            <div className='col-md-4' >  
              <div className='pofile-work' >
                 <b><p style={btl}>WORK LINKS</p></b>
                
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>UPPCL WEBSITE</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>MVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> PVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> PuVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}> DVVNL</a><br/></b>
                <b><a href='https://www.upenergy.in/' target='_link' style={bt}>KESCO</a><br/></b>
                 <br/>
              </div>
            </div>
               
              <div className='col-md-8 pl-5 about-info' >
                 <div className='tab-content profile-tab' id='myTabContent' >
                   <div className='tab-pane fade show active' id='home' role='tabpanel'  area-aria-labelledby='home-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label >Designation </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Assistant Engg</p>
                         </div>
                         <div className='col-md-6' >
                            <label >Name </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Pranav</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Love Doing </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Learn Coding From Google,Youtube as many institutions in India lack knowledgable teachers like we had training with IIITL but it was of no use coz they didn't even know what to teach</p>
                         </div>
                      </div>
                   </div>
                   <div className='tab-pane fade show active' id='profile' role='tabpanel'  area-aria-labelledby='profile-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label > WEB Skills </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Love to Solve Errors in Web Codes, Developing Logical Solutions</p>
                         </div>                 
                        <div className='col-md-6' >
                            <label > Qualifications </label>
                         </div>
                          <div className='col-md-6' >
                            <p>B.Tech in Computer Science</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Languages </label>
                         </div>
                          <div className='col-md-6' >
                            <p>C,C++,Java,JavaScript,PHP,ReactJs</p>
                         </div>
                      </div>
                   </div>
                   <div className='tab-pane fade show active' id='exp' role='tabpanel'  area-aria-labelledby='profile-tab'>
                      <div className='row' >
                         <div className='col-md-6' >
                            <label > WEB Projects </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Projects Like Management Portals in PHP, Hierarchy Modal Using ReactJs, Etc</p>
                         </div>                 
                        <div className='col-md-6' >
                            <label > Exam Experience </label>
                         </div>
                          <div className='col-md-6' >
                            <p>Cleared GATE,ISRO,IOCL,ONGC,UPPCL</p>
                         </div>
                         <div className='col-md-6' >
                            <label > Work Experience </label>
                         </div>
                          <div className='col-md-6' >
                            <p>More Than 3-Years Of Work Experience With UPPCL</p>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>

          </div>

        </form>
      </div>
    </>
  )
}

export default About
