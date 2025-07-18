import { useEffect, useState } from 'react'
import { Alert, Row, Col } from 'react-bootstrap'

function Newsletter({ onValidated, status, message }) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        console.log("STATUS:", status);
        console.log("MESSAGE:", message);
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf('@') > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFields = () => {
        setEmail("");
    }
    return (
        <Col lg={12}>
            <div className='newsletter-bx'>
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to my Newsletter</h3>
                        {status === 'sending' && <Alert>Sending</Alert>}
                        {status === 'error' && <Alert variant="danger">{message?.toString()}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className='new-email-bx'>
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export { Newsletter }

