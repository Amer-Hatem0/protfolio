import React, { useEffect } from 'react';
import './Home.css';
import img from './pp.png';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const type = document.querySelector('.type-');
    if (!type) return; // Guard clause in case the element isn't found

    let listTexts = ['AMER HATEM', 'A Full Stack Developer'];
    let listIndex = 0; // Index for which text in the list to show
    let charIndex = -1; // Index for the character in the current text

    let typeTextInterval;
    let clearTextInterval;

    function typeTextFunc() {
      // Reset to the beginning of the list if we've gone through all texts
      if (listIndex === listTexts.length) {
        listIndex = 0;
      }
      
      typeTextInterval = setInterval(() => {
        if (charIndex === listTexts[listIndex].length - 1) {
          clearInterval(typeTextInterval);
          // Add a small delay before clearing the text
          setTimeout(clearTextFunc, 1000); 
        } else {
          charIndex++;
          type.textContent += listTexts[listIndex][charIndex];
        }
      }, 150);
    }

    function clearTextFunc() {
      clearTextInterval = setInterval(() => {
        if (type.textContent.length === 0) {
          clearInterval(clearTextInterval);
          charIndex = -1; // Reset character index
          listIndex++; // Move to the next text in the list
          typeTextFunc(); // Start typing the next text
        } else {
          type.textContent = type.textContent.slice(0, -1);
        }
      }, 150);
    }

    typeTextFunc(); // Initial call to start the effect

    // Correct cleanup function
    return () => {
      clearInterval(typeTextInterval);
      clearInterval(clearTextInterval);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className='home-main'>
      <div className="sid color-block "></div>
      <div className="a overflow-hidden">
        <div className="row homerow ">
          <div className="col-sm-2 imgdiv">
            <div className="card__collection clear-fix">
              <div className="cards cards--three">
                <img src={img} className="img-responsive img" alt="Amer Hatem" />
                <span className="cards--three__rect-1">
                  <span className="shadow-1 "></span>
                  <p className='ms-4'>Amer Hatem</p>
                </span>
                <span className="cards--three__rect-2">
                  <span className="shadow-2"></span>
                </span>
                <span className="cards--three__circle"></span>
                <ul className="cards--three__list">
                  <li><a href="https://www.facebook.com/AMeRHATeM20" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a></li>
                  <li><a href="https://www.linkedin.com/in/amer-hatem-53867b247/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://github.com/Amer-Hatem0" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-8 contentt amer">
            <div className="row">
              <h3>I'M <span className="type-"></span></h3>
              <p className="text-white mt-4 pp">
                Full-Stack Developer with hands-on experience in building scalable web applications using ASP.NET Core and React. Proficient in designing secure REST APIs (Identity/JWT, EF Core) and developing responsive UIs. Completed a 3-month .NET Backend Internship, working with Razor Pages, role-based access, CI/CD, and AWS (EC2/S3). Skilled in Docker, GitHub Actions, Azure, and applying Clean Architecture & CQRS across personal and academic projects.
              </p>
              <button className="button button-about mt-4 ms-3 ">
                <Link className='ii' to={{ pathname: 'about', state: { from: 'home' } }}>
                  <span className="button-text">more about me</span>
                  <span className="button-icon fa fa-arrow-right "></span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}