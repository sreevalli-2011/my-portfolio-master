import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/images/about-im3.png';
import verticalBgImage from '../assets/images/projects-bg.jpg';


const Projects = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/home');
  }

  const projects = [
    { title: 'Igel', description: 'Igel is my personal website, which I designed and developed from concept to deployment. It showcases my end-to-end web development capabilities.html,css,javascript,jquery,bootstrap',
       link: 'https://igel-ifuture.netlify.app/' },
    { title: 'Birthday Album', description: 'A dynamic digital photo album capturing cherished birthday memories. Built with React and Vite for a fast, modern user experience. html4,css,javascript,jquery,bootstarp4 and React+vite with Redux', 
      link: 'https://sreevalli-2011.github.io/birthday-album/' },
    { title: 'aarkasolutions', description:  'A comprehensive company website built for Aarka Solution, handled end-to-end. Showcases full-cycle development, delivering a polished and functional web platform.html4,css3,javascript,jquery,bootstrap4',
       link: 'https://sreevalli-2011.github.io/aarkasolutions/' },
    { title: 'corpclik', description: 'Developed the official corporate website for Corplick US.Focused on delivering a professional online presence with key business information.html4,css3,javascript,jquery,boottsrap', 
      link: 'https://corpclick.netlify.app/' },
    { title: 'Movies', description: '"Developed a dynamic movie website using PHP, featuring core Browse and display functionalities.Project partially completed due to evolving client requirements."html4,css3,javascript,jquery,bootstrap4,php and mysql', 
      link: 'https://movies-sfl.netlify.app/' },
    { title: 'Zapc', description: '"A professional website for Zapc US, which I built with active involvement in development.Contributed hands-on while mentoring junior team members on various project aspects."html4,css3,javascript,jquery,boottsrap4,php and mysql',
       link: 'https://movies-sfl.netlify.app/' },
    { title: 'todo', description: 'html4,css3,javascript,jquery,boottsrap4,Reactjs', link: 'https://github.com/sreevalli-2011/todo-react/upload' },
    { title: 'my-portfolio', description: '"A single-page portfolio website, meticulously crafted to highlight my design and development expertises project combines visual appeal with technical functionality to showcase my best work."html4,css3,javascript,jquery,boottsrap4,Reactjs', 
      link: 'https://github.com/sreevalli-2011/my-portfolio/upload' },
     { title: 'Wimbeldon', description: 'A complete single-page portfolio concept for a creative professional, designed from scratch in Figma.This project highlights UI/UX design principles learned during my Arena Animation studies."html4,css3,javascript,jquery,boottsrap4', 
      link: 'https://github.com/sreevalli-2011/my-portfolio/upload' },
       { title: 'Logistics', description: '"Currently in the initial development phase: a robust logistics management platform.Building the foundational homepage and core functionalities using React and Node.js.""html4,css3,javascript,jquery,boottsrap4', 
      link: 'https://sreevalli-2011.github.io/logistics-express/' },
  ];

  return (
    <>
      {isOpen && (
        <div className="lightbox-wrapper" id="about">
          
          <div className="container">
            <div className="lightbox-close">
              <div className="close-btn" onClick={handleClose}>
                <span className="btn-line"></span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="lightbox-content">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-heading page-heading">
                        <p className="section-description">Get to know me</p>
                        <h2 className="section-title">Projects</h2>
                        <div className="animated-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {projects.map((project, index) => (
                <div key={index} className="col-md-4">
                  <div style={{ backgroundColor: 'lightgray', color: 'black' }} className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a href={project.link} target="_blank" className="card-link">Visit Site</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;