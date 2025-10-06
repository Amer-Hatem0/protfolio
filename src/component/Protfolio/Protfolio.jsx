
import React from 'react';
import './Protfolio.css';

import img1 from './rest.png';
import img2 from './bakery.png';
import img3 from './ramadan.png';
import img4 from './Screenshot 2023-08-23 131459.png';
import img5 from './pro.png';
import img6 from './ssScreenshot 2023-08-23 133528.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';
import img11 from './11.png';


const projects = [
    { img: img1, link: "https://startling-florentine-6abb58.netlify.app/", type: "Frontend" },
    { img: img2, link: "https://lustrous-zabaione-546e20.netlify.app/", type: "Frontend" },
    { img: img3, link: "https://frabjous-sopapillas-465a72.netlify.app/", type: "Frontend" },
    { img: img5, link: "https://starlit-pithivier-25dcd2.netlify.app/", type: "Frontend" },
    { img: img4, link: "https://bejewelled-smakager-c2041c.netlify.app", type: "Frontend" },
    { img: img6, link: "https://github.com/Amer-Hatem0/AHNews", type: "Frontend" },
    { img: img7, link: "https://github.com/Amer-Hatem0/API_PRO", type: "Backend", title: "Ticket Management System (ASP.NET Core, SQL Server)" },
    { img: img8, link: "https://github.com/Amer-Hatem0/Project-MVC", type: "Backend", title: "Paint Company Website (ASP.NET MVC)" },
    { img: img9, link: "https://github.com/Amer-Hatem0/DOS_project", type: "Backend", title: "Bazar.com Bookstore – Distributed Microservices (Flask, SQLite, Docker)" },
    { img: img10, link: "https://github.com/Amer-Hatem0/HopeConnect", type: "Full Stack", title: "HopeConnect – Orphan Support Platform (Node.js, MySQL)" },
    { img: img11, link: "https://github.com/Amer-Hatem0/Software-Graduate-Project", type: "Full Stack", title: "SHES - Hospital Management System (ASP.NET Core, React, Azure) - Graduation project" },
];

const ProjectGrid = React.memo(({ type }) => {
    const filtered = projects.filter(p => p.type === type);

    return (
        <div className="row images my-5 py-5">
            {filtered.map((project, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-card d-block">
                        <div className="card-shadow-wrapper">
                            <img src={project.img} className="img-fluid project-img" alt={`Project ${type} ${index}`} />
                            {project.title && (
                                <div className="project-title mt-2 px-2">
                                    <h5 className="text-white text-center">{project.title}</h5>
                                </div>
                            )}
                        </div>
                    </a>
                </div>


            ))}
        </div>
    );
});

export default function Portfolio() {
    return (
        <div className="a bb overflow-hidden">
            <div className="row d-flex">
                <div className="col-lg-12 aboutme1">
                    <div className="row">
                          <div className="title-section text-center text-sm-center position-relative">
                             <div className="ABOUTh1 position-relative " style={{ zIndex: 2 }}>
                                <h1 className="">MY <span>DESIGNS</span></h1>
                            </div>
                             <span className="title-bg d-none d-lg-block Resume position-absolute" style={{ zIndex: 1 }}>WEBSITES</span>
                        </div>
 

                        <h2 className="section-heading mt-5 pt-5">Frontend Projects</h2>
                        <ProjectGrid type="Frontend" />

                        <h2 className="section-heading">Backend Projects</h2>
                        <ProjectGrid type="Backend" />

                        <h2 className="section-heading">Full Stack Projects</h2>
                        <ProjectGrid type="Full Stack" />
                    </div>
                </div>
            </div>
        </div>
    );
}
