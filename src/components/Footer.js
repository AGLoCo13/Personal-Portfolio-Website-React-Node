import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm'
import logo from '../assets/img/logo-white-cropped.png'
import linkedIn from "../assets/img/linked-in-icon.png"
import facebook from "../assets/img/facebook-icon.png"
import instagram from "../assets/img/instagram-icon.png"
function Footer(){
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <MailChimpForm />
                <Col sm={6}>
                    <img src={logo} className='footer-logo' alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href="https://www.facebook.com/antonis.georgiou.710/" target="_blank"><img src={facebook} /></a>
                        <a href="https://www.instagram.com/tony.georgioy/" target="_blank"><img src={instagram} /></a>
                        <a href="https://www.linkedin.com/in/anthony-georgiou-95b074266/" target="_blank"><img src={linkedIn} /></a>
                    </div>
                    <p>Copyright 2025.All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
export default Footer



