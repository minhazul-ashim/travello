import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer pt-5'>
            <Container>
                <Row className='mb-3'>
                    <Col xs={12} lg={5}>
                        <h4 className='text-danger '>Travello</h4>
                        <p className='about'>Travello is a travel agency which is working day and night since 2009 to make your vacations and tours better than your imagination. We plan the best for you to make your every tour with us memorable with your family, friends and your beloved ones. Our professional guides are always there to help and guide for the whole tour.</p>
                    </Col>
                    <Col xs={6} lg={4} className='d-flex flex-column align-items-center'>
                        <h4 className='text-danger'>Connect with us</h4>
                        <div className="">
                            <GoLocation />Arizona Street, H/N: 204, New Jersey, US
                            <div className="social d-flex justify-content-evenly mt-3">
                                <FaGoogle className='mx-2' /><FaFacebook className='mx-2' /><FaInstagram className='mx-2' /><FaTwitter className='mx-2' />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={3}>
                        <div className="d-flex flex-column align-items-end">
                            <ul className='list-unstyled'>
                                <h4 className='text-danger'>Navigate</h4>
                                <li className='navlink'>Destinations</li>
                                <li className='navlink'>Admin Login</li>
                                <li className='navlink'>My Bookings</li>
                                <li className='navlink'>Contact</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: '1px solid #999' }}>
                    <Col xs={4} className='mt-3'>
                        <p>&copy; Travello || 2021</p>
                    </Col>
                    <Col xs={8} className='mt-3'>
                        <ul className='list-unstyled d-flex justify-content-around'>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Policy</li>
                            <li>Conditions</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Footer;