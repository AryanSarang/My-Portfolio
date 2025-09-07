import React from "react"
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.webp';
import projImg1 from '../assets/img/ProjImg1.webp';
import projImg2 from '../assets/img/ProjImg2.webp';
import projImg3 from '../assets/img/ProjImg3.webp';
import projImg4 from '../assets/img/ProjImg4.webp';
import projImg5 from '../assets/img/ProjImg5.webp';
import projImg6 from '../assets/img/ProjImg6.webp';
import projImg7 from '../assets/img/ProjImg7.webp';
import projImg8 from '../assets/img/ProjImg8.webp';
import projImg9 from '../assets/img/ProjImg9.webp';
import projImg10 from '../assets/img/ProjImg10.webp';
import projImg11 from '../assets/img/ProjImg11.webp';
import projImg12 from '../assets/img/ProjImg12.webp';
import projImg13 from '../assets/img/ProjImg13.webp';
import projImg14 from '../assets/img/ProjImg14.webp';
import projImg15 from '../assets/img/ProjImg15.webp';
import projImg16 from '../assets/img/ProjImg16.webp';
import projImg17 from '../assets/img/ProjImg17.webp';
import projImg18 from '../assets/img/ProjImg18.webp';


import "animate.css";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects1 = [
    {
      title: "Idaho",
      description: "Fashion brand shopify store",
      imgUrl: projImg17,
      siteUrl: "https://idaho-o.com/"
    },
    {
      title: "Fine Silver Jewels",
      description: "Jewelry brand shopify store",
      imgUrl: projImg16,
      siteUrl: "https://finesilverjewels.com/"
    },
    {
      title: "Look Mama",
      description: "Kids Care brand website using Shopify",
      imgUrl: projImg14,
      siteUrl: "https://lookmama.in/"
    },

    {
      title: "Latin Dance India",
      description: "Visually stunning WordPress dance teaching website to show immersive learning experiences and celebrate a vibrant community of dancers.",
      imgUrl: projImg13,
      siteUrl: "https://latindanceindia.com/"
    },
    {
      title: "Dazzlez",
      description: "E-commerce Jewelry website using Shopify",
      imgUrl: projImg6,
      siteUrl: "https://dazzlez.co/"
    },
    {
      title: "Jamwai Journeys",
      description: "A travel agency website using Wordpress",
      imgUrl: projImg9,
      siteUrl: "https://jamwaijourneys.com/"
    }
  ];

  const projects2 = [
    {
      title: "Marudhar Mewa",
      description: "A FMCG brand website using Shopify",
      imgUrl: projImg2,
      siteUrl: "https://marudharmewa.com/"
    },
    {
      title: "NIdhi Skincare",
      description: "Skincare brand website using Shopify",
      imgUrl: projImg3,
      siteUrl: "https://nidhiiskincare.com/"
    },
    {
      title: "Pomcha",
      description: "Fashion brand website using Shopify",
      imgUrl: projImg7,
      siteUrl: "https://www.pomchajaipur.com/"
    },
    {
      title: "Palla",
      description: "A fashion brand store using Shopify",
      imgUrl: projImg5,
      siteUrl: "https://pallajaipur.com/",
    },
    {
      title: "Your Jersey",
      description: "Shopify sports merchandise store",
      imgUrl: projImg10,
      siteUrl: "https://yourjersey.in/"
    },
    {
      title: "Agashe",
      description: "Shopify multi-designer store",
      imgUrl: projImg11,
      siteUrl: "https://www.agashestore.com/"
    },
  ];
  const projects3 = [
    {
      title: "Kuldhara Investments",
      description: "Visually appealing Wordpress investment website with custom coded features to show the insights for an engaging user experience",
      imgUrl: projImg12,
      siteUrl: "https://kuldharainvestment.com/"
    },
    {
      title: "Dubai Visa & Tours",
      description: "Visa consultancy website using Wordpress",
      imgUrl: projImg18,
      siteUrl: "https://dubaivisaandtours.com"
    },
    {
      title: "Blog Page",
      description: "Developed using React.js and Bootstrap, with a Figma design as reference.",
      imgUrl: projImg1,
      siteUrl: "https://aryansarang.github.io/yamak.ai/"
    },
    {
      title: "Online IDE",
      description: "HTML, CSS, Javasript online compiler with auto suggestion and syntax highlighting",
      imgUrl: projImg4,
      siteUrl: "https://aryansarang.github.io/Online-Compiler/"
    },
    {
      title: "HTML Canvas challenge",
      description: "Developed using HTML Canvas and some math",
      imgUrl: projImg8,
      siteUrl: "https://aryansarang.github.io/RectInCanvas/"
    },


    {
      title: "Consultation website",
      description: "MERN consultation website, consultant can register themselves and start getting orders from users",
      imgUrl: projImg15,
      siteUrl: projImg15
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
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index} {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
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
