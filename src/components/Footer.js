import React from "react"
import { Col, Container, Row } from "react-bootstrap";
// import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/Aryan-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="text-center text-sm-start pb-3">
                        <img src={logo} alt="aryan sarang" width="50px" height="50px" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/aryan-sarang-0ab44120b'><img src={navIcon1} alt="linkedIn" /></a>
                            <a href='https://github.com/AryanSarang'><img src={navIcon2} alt="github" /></a>
                            <a href='https://www.instagram.com/thearyanshow/'><img src={navIcon3} alt="instagram" /></a>
                        </div>
                        <p>Copyright {year}. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

