import React from 'react'
import {Container ,Col , Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter1 from '../assets/img/meter1-green.svg';
import meter2 from '../assets/img/meter-2-green.svg';
import meter3 from '../assets/img/meter3-green.svg';
import blackish from '../assets/img/green-shiny-background.jpg'
import "react-multi-carousel/lib/styles.css";

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum is simply dummy text of printing and typescripting industry</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5> Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5> Brand Identity</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="" />
                                <h5> Logo Design</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5> Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image' src={blackish} alt="Background" />
    </section>
  )
}

export default Skills
