import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import ecoHome from "./images/ecopantry/eco.png";
import byteBroom from "./images/bytebroom/bytebroom.png";
import me from "./images/homepage/profile.png";
import separator from "./images/homepage/separator.png";
import atlas from "./images/atlas/atlas.png";
import scarp from "./images/scarp/scarp.png";

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Hi, I’m Judy.</h1>
          <p className="bigger-text">
            A designer merging <b>technical</b> skills and <b>data science</b>{" "}
            to transform ideas into user-friendly experiences.
          </p>
          <p className="text">
            Currently working at Atlas Power Technologies. Previously at UBC
            Applied Science.
          </p>
        </div>
        <img src={me} alt="me" className="intro-pic" />
      </div>
      <img src={separator} alt="separator" className="separator-design" />

      <section className="portfolio-work">
        <h2>Selected Work</h2>
        <div className="work-grid">
          <div className="work-item">
            <NavLink to="/atlas" className="work-link">
              <img src={atlas} alt="Atlas Thumbnail" className="work-image" />
              <div className="work-details">
                <p className="project-header">
                  Atlas Power Technologies: Internship
                </p>
                <h3>Energy System Storage</h3>
                <p>🔒 This product is under an NDA.</p>
                <div className="work-tags">
                  <span>UX/UI Design</span>
                  <span>User Research</span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="work-item">
            <NavLink to="/scarp" className="work-link">
              <img src={scarp} alt="SCARP Thumbnail" className="work-image" />
              <div className="work-details">
                <p className="project-header">
                  UBC Faculty of Applied Science: Internship
                </p>
                <h3>SCARP Intranet</h3>
                <p>Elevating communication for seamless collaboration.</p>
                <div className="work-tags">
                  <span>UX/UI Design</span>
                  <span>User Research</span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="work-item">
            <NavLink to="/ecopantry" className="work-link">
              <img
                src={ecoHome}
                alt="EcoPantry Thumbnail"
                className="work-image"
              />
              <div className="work-details">
                <p className="project-header">
                  UXathon 2023: Hackathon Runner-up
                </p>
                <h3>EcoPantry</h3>
                <p>
                  Helping users reduce food waste by organizing and tracking
                  pantry items efficiently.
                </p>
                <div className="work-tags">
                  <span>UX Design</span>
                  <span>Design System</span>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="work-item">
            <NavLink to="/bytebroom" className="work-link">
              <img src={byteBroom} alt="ByteBroom" className="work-image" />
              <div className="work-details">
                <p className="project-header">Project</p>
                <h3>ByteBroom</h3>
                <p>
                  Simplifying the process of digital organization for better
                  productivity and management.
                </p>
                <div className="work-tags">
                  <span>UX Research</span>
                  <span>UX Design</span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Portfolio;
