import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer pt-5'>
            <Container>
                <Row className='mb-3'>
                    <Col>
                        <h4>Travello</h4>
                        <p>Travello is a travel agency which is working day and night since 2009 to make your vacations and tours better than your imagination.</p>
                    </Col>
                    <Col>
                        <h4>Connect with us</h4>
                    </Col>
                    <Col>
                        <h4>Navigate</h4>
                        <ul className='list-unstyled'>
                            <li>Services</li>
                            <li>Destinations</li>
                            <li>Hotel</li>
                            <li>Travel</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        &copy; Travello || 2021
                    </Col>
                    <Col xs={8}>
                        <ul className='list-unstyled d-flex justify-content-around'>
                            <li>Terms of Services</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;