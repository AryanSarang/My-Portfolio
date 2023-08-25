import React from "react"
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  let openNewTab = () => {
    const urlToOpen = siteUrl;
    window.open(urlToOpen, '_blank');
  };
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={openNewTab}>
        <img src={imgUrl} alt="project-screenshot" />

        <div className="proj-txtx" >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
};


