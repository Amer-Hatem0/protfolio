import React, { useEffect } from 'react';
import './Home.css';

import img from './pp.png';
import { Link } from 'react-router-dom';
export default function Home() {

  useEffect(() => {
    const type = document.querySelector('.type-');

    let listTexts = ['AMER HATEM', 'Full Stack Developer '];

    let index = -1;
    let current = 0;

    function typeTextFunc() {
      if (current === listTexts.length) {
        current = 0;
      }
      let typeText = setInterval(() => {
        if (index == listTexts[current].length - 1) {
          clearInterval(typeText);
          clearTextFunc();
        } else {
          index++;
          type.textContent += listTexts[current][index];
        }
      }, 150);
    }

    function clearTextFunc() {
      let clearText = setInterval(() => {
        if (type.textContent.length == 0) {
          clearInterval(clearText);
          index = -1;
          current++;
          typeTextFunc();
        } else {
          type.textContent = type.textContent.slice(0, -1);
        }
      }, 150);
    }

    typeTextFunc();

    // Cleanup function
    return () => {
      clearInterval(typeTextFunc);
      clearInterval(clearTextFunc);
    };
  }, []);
  return (<div className='home-main'>
    {/* d-none d-lg-block */}
    <div className="sid color-block " ></div>
    <div className="a overflow-hidden">
      <div className="row homerow ">
        <div className="col-sm-2 imgdiv">

          <div class="card__collection clear-fix">

            <div class="cards cards--three">
              <img src={img} class="img-responsive img" alt="" />
              <span class="cards--three__rect-1">
                <span class="shadow-1 "></span>
                <p className='ms-4'>Amer Hatem</p>
              </span>
              <span class="cards--three__rect-2">
                <span class="shadow-2"></span>
              </span>
              <span class="cards--three__circle"></span>
              <ul class="cards--three__list">
                <li><a href="https://www.facebook.com/AMeRHATeM20" target="_blank" rel="noreferrer" style={{}}>
                  <i class="fab fa-facebook-f"></i>
                </a>
                </li>

                {/* <li><i class="fab fa-linkedin-in"></i></li>
    <li><i class="fa-brands fa-github"></i></li> */}
                <li><a href="https://www.linkedin.com/in/amer-hatem-53867b247/" target="_blank" rel="noreferrer" style={{}}>
                  <i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/Amer-Hatem0" target="_blank" rel="noreferrer" style={{}}>
                  <i class="fa-brands fa-github"></i></a></li>


              </ul>
            </div>
          </div>

          {/* <img src={img} className='img d-none d-lg-block' alt="" /> */}

        </div>
        <div className="col-sm-8 contentt amer">
          <div className="row    ">
           
            <h3 className="  ">I'M <span class="type-">

            </span></h3>
            <p className="text-white mt-4 pp  ">Full-Stack Developer with hands-on experience in building scalable web applications using ASP.NET Core and React.Proficient  in  designing  secure  REST  APIs  (Identity/JWT,  EF  Core)  and  developing  responsive  UIs.  Completed  a  3-
month .NET Backend Internship, working with Razor Pages, role-based access, CI/CD, and AWS (EC2/S3). Skilled in
Docker, GitHub Actions, Azure, and applying Clean Architecture & CQRS across personal and academic projects.</p>
            <button className="button button-about mt-4 ms-3 " >
              <Link className='ii' to={{ pathname: 'about', state: { from: 'home' } }}>



                <span className="button-text">more about me</span>
                <span className="button-icon fa fa-arrow-right "></span>
              </Link>      </button>

          </div>



        </div>

      </div>

    </div>
    )
  </div>)
}

