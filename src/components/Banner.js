import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import "animate.css";
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";
import Badge from "./Badge";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Programming Nerd"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    }
    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div >
                                        <span className="tagline user-select-none">Building the web, one pixel at a time.</span>
                                        <h1 className="user-select-none">{"Hi I'm Aryan Sarang "}</h1>
                                        <h1 className="runningText user-select-none"><span className="wrap">{text}</span></h1>
                                        <p className="user-select-none">Experienced developer with a portfolio of 80+ websites, specializing in MERN, Shopify, WordPress, and AI-powered automation.</p>
                                        <HashLink to='#connect' className="letsConnect user-select-none">
                                            <button>Let's connect <ArrowRightCircle size={25} /></button>
                                        </HashLink>
                                    </div>}
                            </TrackVisibility>
                        </Col>

                    </Row>
                </Container>
                <div className="badge-container">
                    <Badge />
                </div>
            </section>
        </>
    )
};
