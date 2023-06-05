import React, { useState,useRef } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, [category]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i6vr1tj', 'template_el8f41p', form.current, 'x5_BPyZrXx3gvF6S_')
            .then((result) => {
                console.log(result.text);
                setButtonText("Send again");
                setStatus({ succes: true, message: "Message sent successfully" })
            }, (error) => {
                console.log(error.text);
                setStatus({
                            succes: false,
                            message: "Something went wrong, please try again later.",
                          });
            });
          
            setFormDetails(formInitialDetails);
    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send again");
    //     let result = await response.json();
    //     await console.log(result);
    //     setFormDetails(formInitialDetails);
    //     if (result.code === 200) {
    //       setStatus({ succes: true, message: "Message sent successfully" });
    //     } else {
    //       setStatus({
    //         succes: false,
    //         message: "Something went wrong, please try again later.",
    //       });
    //     }
    //   };
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName}
                                        placeholder="First Name" name="firstName" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName}
                                        placeholder="Last Name" name="lastName" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email}
                                        placeholder="Email Address" name="email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone}
                                        placeholder="Phone No." name="phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" name ="message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};


