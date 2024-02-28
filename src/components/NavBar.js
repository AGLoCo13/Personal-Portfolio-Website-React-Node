import React, { useEffect} from 'react'
import {Navbar , Container , Nav } from "react-bootstrap";
import {useState} from "react";
import {Link as ScrollLink } from 'react-scroll';
import logo from "../assets/img/logo_white.png"
import linkedIn from "../assets/img/linked-in-icon.png"
import facebook from "../assets/img/facebook-icon.png"
import instagram from "../assets/img/instagram-icon.png"
function NavBar() {
    const [activeLink , setActiveLink] = useState("home");
    const [scrolled , setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
        if(window.scrollY >50 ){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll" , onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <div>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
    <Navbar.Brand href="#home" className="d-flex align-items-center justify-content-center" >
        <img src={logo} alt="Logo" className='logo-img'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className="social-icon">
                <a href="#"><img src={facebook} alt=""/></a>
                <a href="#"><img src={instagram} alt=""/></a>
                <a href="#"><img src={linkedIn} alt=""/></a>
            </div>
            <ScrollLink to="contact" smooth={true} duration={500}>
            <button className='vvd'><span>Let's Connect</span>
            </button>
            </ScrollLink>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar
