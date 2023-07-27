
import React from 'react'
import {Link} from 'react-router-dom'
import Sahil from './Deveeloper/sahil.jpg'
import Shiv from './Deveeloper/shiv.jpg'
import './Deveeloper/style.css'
const Developers = () => {
    return (
      <>
     
      <section class="main">
      <h1 className='headingB'>Our Team</h1>
       <div className="mainB">

        <div class="profile-card">
        <div class="image">
        <img src={Sahil} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>SAHIL JANGRA</h2>
        <span>MERN Stack Developer </span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <a id="a3" href="https://github.com/Sahil-Jangra2622" target="_blank"><i class="fab fa-github"></i></a>
              {/* <a href="https://github.com/Sahil-Jangra2622" */}
            </div>  
            <div class="icon">
              <a id="a2" href="https://www.linkedin.com/in/sahil-jangra-13a5b2231/" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>MONGO DB</li>
              <li>REACT</li>
              <li>EXPRESS</li>
              <li>NODE JS</li>
              <li>JAVASCRIPT</li>
              <li>C++</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src={Shiv} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>SHIV KUMAR</h2>
        <span>MERN Stack Developer </span>
        </div>
       
          <div class="social-icons">

            
            <div class="icon">
            <a id="a3" href="https://github.com/SHIV3710" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            <div class="icon">
            <a id="a2" href="https://www.linkedin.com/in/shiv-kumar-448759229/" target="_blank"><i class="fab fa-linkedin"></i></a>

              </div>
            </div>
            <div class="skills">
            <h6 className='h6'>Skills</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Nodejs</li>
              <li>C++</li>
              <li>Postman</li>
            </ul>
            </div>
        </div>
        </div>
      </section>
      
      </>
      );
}

export default Developers