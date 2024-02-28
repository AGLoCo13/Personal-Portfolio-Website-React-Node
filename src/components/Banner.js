import React from 'react'
import {ArrowRightCircle} from 'react-bootstrap-icons';
import coderImg from "../assets/img/coder.svg";
import {useState , useEffect} from "react";
import {Container , Row , Col} from "react-bootstrap";
import {Link as ScrollLink} from 'react-scroll';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { isVisible } from '@testing-library/user-event/dist/utils';
function Banner() {

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const toRotate = ["Web Developer" , "Web Designer" , "UI/UX Designer"];
    const [text , setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        } , delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevData => prevData / 3)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
  return (
      <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} >
                    <TrackVisibility>
                    {({isVisible}) =>
                    <div className= {isVisible ? "animate__animated animate__rollIn" : ""}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{"Hi i'm Anthony "}<span className="wrap">{text}</span></h1>
                    <p>Passionate about crafting seamless digital experiences and bringing creative visions to life. Combining technical expertise with a keen eye for design, I thrive in delivering innovative solutions for web development and design projects.</p>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                    <button className='btn-2'>Let's connect! <ArrowRightCircle size={25}/></button>
                    </ScrollLink>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={coderImg} alt="Coder img"  width={400} height={200}/>
                </Col>
            </Row>
        </Container>
      </section>
  )
  }


export default Banner
