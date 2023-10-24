import React from "react"
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/ProjImg1.png';
import projImg2 from '../assets/img/ProjImg2.png';
import projImg3 from '../assets/img/ProjImg3.png';
import projImg4 from '../assets/img/ProjImg4.png';
import projImg5 from '../assets/img/ProjImg5.png';
import projImg6 from '../assets/img/ProjImg6.png';
import projImg7 from '../assets/img/ProjImg7.png';
import projImg8 from '../assets/img/ProjImg8.png';
import projImg9 from '../assets/img/ProjImg9.png';
import projImg10 from '../assets/img/ProjImg10.png';
import projImg11 from '../assets/img/ProjImg11.png';

import "animate.css";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects1 = [
    {
      title: "Blog Page",
      description: "Developed using React.js and Bootstrap, with a Figma design as reference.",
      imgUrl: projImg1,
      siteUrl: "https://aryansarang.github.io/yamak.ai/"
    },
    {
      title: "Dashboard",
      description: "Developed using React.js and Bootstrap",
      imgUrl: projImg2,
      siteUrl: "https://aryansarang.github.io/SidebarUI/"
    },
    {
      title: "Workout Tracker",
      description: "Developed using React.js and Bootstrap with Rapid API integration",
      imgUrl: projImg3,
      siteUrl: projImg3
    },
    {
      title: "Online IDE",
      description: "HTML, CSS, Javasript online compiler with auto suggestion and syntax highlighting",
      imgUrl: projImg4,
      siteUrl: "https://aryansarang.github.io/Online-Compiler/"
    },
    {
      title: "E-commerce",
      description: "A fullstack project developed using MERN and JWT authentication",
      imgUrl: projImg5,
      siteUrl: projImg5,
    },
    {
      title: "Pari Course",
      description: "Frontend Course selling website build using React.js, Bootstrap",
      imgUrl: projImg6,
      siteUrl: "https://aryansarang.github.io/Pari/"
    }
  ];

  const projects2 = [
    {
      title: "Travel Home Page",
      description: "Developed using simple HTML, CSS, JavaScript and Bootstrap",
      imgUrl: projImg7,
      siteUrl: "https://aryansarang.github.io/Travel-page/"
    },
    {
      title: "HTML Canvas exercise",
      description: "Developed using HTML Canvas and some math",
      imgUrl: projImg8,
      siteUrl: "https://aryansarang.github.io/RectInCanvas/"
    },
    {
      title: "Tindog Home Page",
      description: "Developed using HTML, CSS and JavaScript",
      imgUrl: projImg9,
      siteUrl: "https://aryansarang.github.io/tindog-project/"
    },
    {
      title: "Country Search",
      description: "Using react debounce for auto API calling on typing",
      imgUrl: projImg10,
      siteUrl: "https://aryansarang.github.io/CountryAPI/"
    },
    {
      title: "Selnox",
      description: "React custom designed form, date picker and select-search dropdown",
      imgUrl: projImg11,
      siteUrl: "aryansarang.github.io/Selnox/"
    },
  ];
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
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index} {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index} {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third"><p>Coming Soon...</p></Tab.Pane>
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
