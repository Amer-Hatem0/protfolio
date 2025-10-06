import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'
import './About.js'
const skillCategories = [
  {
    title: "Frontend",
    className: "frontend",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Blazor"
    ]
  },
  {
    title: "Backend",
    className: "backend",
    skills: [
      "C#",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Razor Pages",
      "Web API",
      "Minimal API",
      "EF Core (Entity Framework Core)",
      "LINQ",
      "Identity",
      "JWT Authentication",
      "Role-Based Access",
      "FluentValidation",
      "API Versioning",
      "CQRS"    ]
  },
  {
    title: "Databases & APIs",
    className: "databases",
    skills: [
      "SQL Server",
      "MySQL",
      "SQLite",
      "RESTful APIs",
      "OpenAPI/Swagger"
    ]
  },
  {
    title: "Tools & Architecture",
    className: "tools",
    skills: [
      "Git & GitHub",
      "GitHub Actions (CI/CD)",
      "Docker",
      "Docker Compose",
      "Azure",
      "AWS (EC2, S3)",
      "Postman",
      "Clean Architecture",
      "Repository Pattern",
      "SOLID Principles",
      "Microservices (Basics)",
      "Serilog",
      "Seq",
      "OpenTelemetry",
      "Health Checks",
      "Rate Limiting",
      "Caching (In-Memory, Distributed, Output/Response)"
    ]
  }
];




const CircularProgressBar = ({ progressEndValue }) => {
    const [progressValue, setProgressValue] = useState(0);
    const speed = 100;

    useEffect(() => {
        let progress;

        if (progressValue < progressEndValue) {
            progress = setTimeout(() => {
                setProgressValue(progressValue + 1);
            }, speed);
        }

        return () => {
            clearTimeout(progress);
        };
    }, [progressValue, progressEndValue]);

    const circularProgressStyle = {
        background: `conic-gradient(#0d00ff ${progressValue * 3.6}deg, #252525 0deg)`,
    };

    return (
        <div className="container">
            <div className="circular-progress" style={circularProgressStyle}>
                <span className="progress-value">{`${progressValue}%`}</span>
            </div>

        </div>
    );
};

const About = () => {





    return (
        <div>
            <div>
                <div className="a aabout overflow-hidden">
                    <div className="row d-flex ">

                        <div className="col-lg-10   aboutme1 ">
                            <div className="row ">
                            <div className="title-section text-center text-sm-center position-relative">
    <div className="ABOUTh1 position-relative " style={{ zIndex: 2 }}>
        <h1>ABOUT <span>ME</span></h1>
    </div>
    <span className="title-bg d-none d-lg-block Resume position-absolute" style={{ zIndex: 1 }}>
        Resume
    </span>
</div>



                            </div>



                        </div>
                        <div className="row maincon mt-5 pt-5">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-5 col-12">
                                        <div className="row"><div className="col-12">
                                            <h3 className="text-uppercase per custom-title mb-0 ft-wt-600 text-white pb-4">personal infos</h3>
                                        </div><div className="col-12 d-block d-sm-none">
                                            </div>
                                            <div class="col-md-12 ">
                                                <ul class="about-list list-unstyled ">
                                                    <li><p><span class="title ">First Name: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">AMER</span></p></li>
                                                    <li><p><span class="title">last Name: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">HUSSEIN</span></p></li>
                                                    {/* <li><p><span class="title">Age: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">23 Years</span></p></li> */}
                                                    <li><p><span class="title">Nationality: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Palestinian</span></p></li>
                                                    <li><p><span class="title">Freelance: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block green">Available</span></p></li>
                                                    {/* <li><p><span class="title">Address: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Palestine</span></p></li> */}
                                                    <li><p><span class="title">phone: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">+970569691385</span></p></li>
                                                    <li>
                                                        <p>
                                                            <span class="title">LinkedIn: </span>
                                                            <a href="https://www.linkedin.com/in/amer-hatem/" target="_blank" class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-decoration-none text-primary fw-semibold text-white">
                                                                Amer Hatem
                                                            </a>
                                                        </p>
                                                    </li>
  <li><p><span class="title ">Email: </span><span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">amerhatem01@mail.com</span></p></li>

                                                    <li><p><span class="title">Langages: </span>
                                                        <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block ">Arabic, English</span></p></li>
                                                  
                                                </ul>
                                            </div>
                                            <div className="rev2 col-12 mt-1">
                                                <a className="button mt-5" target='-blank' href="https://drive.google.com/file/d/1zErKNuIwb9rlTmZ-pEvG2HXFTL01OyaF/view?usp=sharing" download >
                                                    <span className="button-text">Download CV</span><span className="button-icon fa fa-download" /></a>


                                            </div>
                                        </div>
                                    </div>




                                    <div className=" col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="box-stats ">
                                                    <h3 className="poppins-font position-relative">1</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">year of
                                                        <span className="d-block">experience</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="box-stats ">
                                                    <h3 className="poppins-font position-relative">5</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects
                                                    </span></p></div></div>

                                            <div className="col-6">
                                                <div className="box-stats ">
                                                    <h3 className="poppins-font position-relative">3</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">Happy <span className="d-block">customers
                                                    </span></p></div></div>


                                            <div className="col-6"><div className="box-stats ">
                                                <h3 className="poppins-font position-relative">2</h3><p className="open-sans-font m-0 position-relative text-uppercase">
                                                    awards <span className="d-block">won</span>
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                <div className="container my-5 skill-section">
                                    <h2 className="text-center fw-bold text-uppercase mb-5 text-light" style={{ letterSpacing: "2px" }}>
                                        My Skills
                                    </h2>

                                    <div className="row gy-4">
                                        {skillCategories.map((category, index) => (
                                            <div key={index} className="col-md-6">
                                                <div className="skill-card-horizontal text-white p-4 rounded-4 shadow-custom h-100">
                                                    <h5 className={`skill-title mb-4 text-uppercase fw-bold`} style={{ color: '#0d00ff', letterSpacing: '1px' }}>
                                                        {category.title}
                                                    </h5>
                                                    <div className="d-flex flex-wrap gap-3">
                                                        {category.skills.map((skill, i) => (
                                                            <span key={i} className="badge skill-badge rounded-pill px-3 py-2 fw-semibold">
                                                                <i className="bi bi-check-circle-fill me-2 text-success"></i>{skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>






                            </div>
                        </div>




                        <div class="rev  col-lg-9 bio my-5 pt-5">
                            <div class="row container">
                                <div class="d-flex justify-content-center">
                                    <div class="title position-relative">
                                        <h2 class="text-uppercase Experience">
                                            Experience & Education</h2>

                                    </div>

                                </div>


                                <div class="row mt-5 ">
                                    <div class="col-md-6">
                                        <div class="d-flex haed align-items-center
                            position-relative">
                                            <i class="fas fa-graduation-cap"></i>
                                            <h3 class="ms-3 fs-5 mb-0">Education</h3>

                                        </div>
                                        <div class="desc pt-3">
                                            <div class="item carddd position-relative">
                                                <h4> Computer Engineering , <span class="fw-light
                                        "> An Najah National University </span></h4>
                                                <span class="custom-color my-2 d-inline-block ">Sep
                                                    2020 - June
                                                    2025</span>
                                                <p class=" m-0">Dedication, perseverance, studying, participation, diligence, development, learning, challenges, advancement, growth, skill acquisition, creativity, achievement, excellence, projects, responsibility, personal development.</p>
                                            </div>
                                            <div class="item carddd position-relative pt-3">
                                                <h4>Full Stack , <span class="fw-light
                                        ">Knowledge Academy</span></h4>
                                                <span class="custom-color my-2 d-inline-block ">Dec
                                                    2022 - Dec
                                                    2023</span>
                                                <p class=" m-0">Comprehensive program covering entire web
                                                    development spectrum for creating versatile applications.</p>
                                            </div>
                                            <div class="item carddd position-relative ">
                                                <h4>High School (Tawjihi) , <span class="fw-light
                                        ">Omar Bin Al-Khattab Secondary School</span></h4>
                                                <span class=" custom-color my-2 d-inline-block">My high school GPA is 95.6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex haed align-items-center
                            position-relative">
                                            <i class="fas fa-briefcase"></i>
                                            <h3 class="ms-3 fs-5 mb-0">Work Experiences</h3>

                                        </div>

                                        <div class="desc pt-3">
                                            <div class="item carddd position-relative">
                                                <h4><span class="fw-light"> Backend Developer Intern</span>, <span class="fw-bold">DEAL Software Design</span></h4>
                                                <span class="custom-color my-2 d-inline-block">June 2025 – Aug  2025</span>
                                                <p class="m-0">
                                                    Working on real-world backend development using ASP.NET Core, SQL Server, REST APIs, and clean architecture.
                                                    Involved in debugging, feature development, and integrating backend services in a production-grade system.
                                                </p>
                                            </div>

                                            <div class="item carddd position-relative">
                                                <h4> <span class="fw-light
                                        ">Bodybuilding coach</span></h4>

                                                <p class="pb-3 m-0">Guiding clients in muscle building, tailored workouts, nutrition plans, form correction, motivation, progress tracking, personalized routines, fitness expertise, goal achievement.</p>
                                            </div>
                                           

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                </div></div>
        </div>
    )
}


export default About;