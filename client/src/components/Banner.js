import { ArrowRightCircle } from 'react-bootstrap-icons';
import coderImg from "../assets/img/coder.svg";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link as ScrollLink } from 'react-scroll';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
function Banner() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer.", "UI/UX Designer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevData => prevData / 1.5)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period); // pause before deleting
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            setDelta(150);
        }
    }
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility partialVisibility once>
                            {({ isVisible }) => {
                                if (isVisible && !hasAnimated) {
                                    setHasAnimated(true);
                                }
                                return (
                                    <div className={hasAnimated ? "animate__animated animate__rollIn" : ""}>
                                        <span className='tagline'>Welcome to my Portfolio</span>
                                        <h1>{"Hi, I'm Anthony."}
                                            <div className='rotating-text-container'><span className="wrap">{text}</span></div></h1>
                                        <p>
                                            Passionate about crafting seamless digital experiences and bringing creative visions to life.
                                            Combining technical expertise with a keen eye for design, I thrive in delivering innovative solutions
                                            for web development and design projects.
                                        </p>
                                        <ScrollLink to="contact" smooth={true} duration={500}>
                                            <button className='btn-2'>Let's connect! <ArrowRightCircle size={25} /></button>
                                        </ScrollLink>
                                    </div>
                                );
                            }}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={coderImg} alt="Coder img" width={400} height={200} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Banner
