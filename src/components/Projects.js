import React from "react"
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/ProjImg1.png';
import projImg2 from '../assets/img/ProjImg2.png';
import projImg3 from '../assets/img/ProjImg3.png';
import projImg4 from '../assets/img/ProjImg4.png';
import projImg5 from '../assets/img/ProjImg5.png';
import "animate.css";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects = [
    {
      title: "Blog Page",
      description: "Developed using React.js and Bootstrap, with a Figma design as reference.",
      imgUrl: projImg1,
    },
    {
      title: "Dashboard",
      description: "Developed using React.js and Bootstrap",
      imgUrl: projImg2,
    },
    {
      title: "Workout Tracker",
      description: "Developed using React.js and Bootstrap with Rapid API integration",
      imgUrl: projImg3,
    },
    {
      title: "Online IDE",
      description: "HTML, CSS, Javasript online compiler with auto suggestion and syntax highlighting",
      imgUrl: projImg4,
    },
    {
      title: "E-commerce",
      description: "A fullstack project developed using MERN and JWT authentication",
      imgUrl: projImg5,
    }
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn " : ""}>
                  <h2>Projects</h2>
                  <p>Showcasing a range of web projects, demonstrating a versatile skill set and a knack for creating visually appealing and functional digital solutions.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >Tab three</Nav.Link>
                </Nav.Item>

              </Nav>
              <TrackVisibility>
              {({ isVisible }) =>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index} {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"><p>Will updated soon</p></Tab.Pane>
                <Tab.Pane eventKey="third"><p>Will updated soon</p></Tab.Pane>
              </Tab.Content>}
            </TrackVisibility>
            </Tab.Container>
            

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
};
