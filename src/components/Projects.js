import React from 'react'
import {Col , Container , Tab , Row ,Nav} from 'react-bootstrap'
import {ProjectCard} from './ProjectCard';
import backgroundImg from "../assets/img/abstract-black-green.jpg"
import projImg1 from "../assets/img/fightacademy.gr_-resized.png"
import projImg2 from "../assets/img/datsarch.com_.png"
import projImg3 from "../assets/img/geop-engineering.gr_.png"
import projImg4 from "../assets/img/simple-top.gr.png";
import projImg5 from "../assets/img/tonyincode.com_.png";
import TrackVisibility from 'react-on-screen';
 function Projects() {

    const projects = [
        {
            title: "fightacademy.gr",
            description: "Design & Development / Collaboration with Simple-top.gr",
            imgUrl: projImg1,
            projectUrl: "https://fightacademy.gr/"
        },
        {
            title: "datsarch.com",
            description: "Design & Development / Collaboration with Simple-top.gr",
            imgUrl: projImg2,
            projectUrl: "https://datsarch.com/"
        },
        {
            title: "geop-engineering.gr",
            description: "Design & Development / Solo Project",
            imgUrl: projImg3,
            projectUrl: "https://geop-engineering.gr/"
        },
        {
            title: "Simple-top.gr",
            description: "Design & Development / Solo Project",
            imgUrl: projImg4,
            projectUrl: "https://simple-top.gr/"
        },
        {
            title:"tonyincode.com",
            description: "Design & Development / Solo Project",
            imgUrl: projImg5,
            projectUrl: "https://tonyincode.com"
        },

    ]
  return (
    <section className='project' id="projects">
     <Container>
        <Row>
            <Col>
            <TrackVisibility>
                    {({isVisible}) =>
                    <div className= {isVisible ? "animate__animated animate__slideInDown" : ""}>
            <h2>
                Projects
            </h2>
            <p> From elegant and dynamic websites crafted with the power of React and the versatility of WordPress to intricate web applications pushing boundaries with React and Node.js, these projects showcase my commitment to excellence.</p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Websites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Web Applications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="third">Github Projects</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
          <Tab.Pane eventKey="first">
            <Row>
                {
                    projects.map((project,index) => {
                        return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                        )
                    })
                }
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
          <Tab.Pane eventKey="third">
            Official Github Profile :  
            <a href="https://github.com/AGLoCo13" target="_blank" rel="noopener noreferrer">
                AGLoCo13
            </a>
                
          </Tab.Pane> 
           </Tab.Content>
           </Tab.Container>
            </Col>
        </Row>
     </Container>
      <img className='background-image' src={backgroundImg} />
      </section>
  )
}

export default Projects
