import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/Aryan-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled user-select-none" : "user-select-none"}>
        <Container>
          <Navbar.Brand href="#home" className='m-2 mx-sm-0'>
            <img src={logo} alt='aryan sarang' width="50px" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="mx-auto">

              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("Projects")}>Projects</Nav.Link>
            </Nav> */}
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/aryan-sarang-0ab44120b'><img src={navIcon1} alt="linkedIn" /></a>
                <a href='https://github.com/AryanSarang'><img src={navIcon2} alt="github" /></a>
                <a href='https://www.instagram.com/thearyanshow/'><img src={navIcon3} alt="instagram" /></a>
              </div>
              <HashLink to='#connect' className='connectBtnLink'>
                <button className='vvd' onClick={() => console.log('connect')}><span>
                  Let's Connect
                </span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar></>
  )
}

