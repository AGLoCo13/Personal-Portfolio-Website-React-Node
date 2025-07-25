import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact.svg';
import TrackVisibility from 'react-on-screen';
import axios from 'axios'; // Import Axios

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };
    const API_BASE = process.env.REACT_APP_API_URL || '';
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        try {
            const response = await axios.post(`${API_BASE}/api/contact`, formDetails, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });
            setButtonText('Send');
            setFormDetails(formInitialDetails);
            if (response.status === 200) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later' });
            }
        } catch (error) {
            console.error('Error occurred while sending message:', error);
            setStatus({ success: false, message: 'Something went wrong, please try again later' });
        }
        setFormDetails(formInitialDetails);
    };
    const [hasAnimated, setHasAnimated] = useState(false);
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <TrackVisibility partialVisibility once>
                            {({ isVisible }) => {
                                if (isVisible && !hasAnimated) {
                                    setHasAnimated(true);
                                }
                                return (
                                    <div className={isVisible ? 'animate__animated animate__tada' : ''}>
                                        <h2>Get in Touch</h2>
                                    </div>
                                )
                            }}
                        </TrackVisibility>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        row="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                    {status.message && (
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>
                                                {status.message}
                                            </p>
                                        </Col>
                                    )}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Contact