import React, { useEffect, useState } from "react"
import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import "animate.css";
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Programming Nerd"];
    const [text, setText]= useState('');
    const [delta, setDelta] = useState(150-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker =setInterval(()=>{
            tick();
        },delta)
        return () =>{clearInterval(ticker)};
    }, [text])

    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if( isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    }
    return (
        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn animate__slow":""}>
                        <span className="tagline">Building the web, one pixel at a time.</span>
                        <h1>{"Hi I'm Aryan Sarang "}<span className="wrap">{text}</span></h1>
                        <p>Experienced web developer with a passion for crafting user-friendly and visually stunning websites, utilizing cutting-edge technologies to deliver seamless digital experiences.</p>
                        <HashLink to='#connect'>
                        <button  onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                        </HashLink>
                        </div>}
                        </TrackVisibility>
                        </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>
    )
};
