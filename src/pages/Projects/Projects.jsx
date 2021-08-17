import React from "react";
import Project from "./Project";
import { dlData } from "./dockerLocalData";
import { gngData } from "./giveNGoData";
import { timelineData } from "./timelineData";
import FadeIn from "react-fade-in";

const Projects = () => {
  return (
    <FadeIn>
      <div className="projects-container">
        <div className="projects-title">Projects</div>
        <div className="projects">
          <Project {...timelineData} />
        </div>
        <div className="projects">
          <Project {...dlData} />
        </div>
        <div className="projects">
          <Project {...gngData} />
        </div>
        <div style={{ paddingTop: "4rem" }}>
          More projects to be documented...
        </div>
      </div>
    </FadeIn>
  );
};

export default Projects;
