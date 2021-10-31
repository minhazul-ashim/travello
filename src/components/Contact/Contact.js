import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <h1 className='text-center mt-4'>Contact us</h1>
            <p className="lead text-center w-75 mx-auto">
                Contact us for any kind of query and leave your opinions & reviews about our service to let us know how can we do better and plan better for your dream vacations.
            </p>

            <div className='contact-bg'>
                <div className="contact-overlay p-5">
                    <Container className='px-5 mx-5'>

                        <input type="text" placeholder='Your name' className='form-control mb-3' />
                        <input type="email" placeholder='Your Email' className='form-control mb-3' />
                        <label className='text-light' for='review'>
                            Your message
                        </label>
                        <textarea name='review' cols="30" rows="10" className='form-control'></textarea>

                    </Container>
                </div>
            </div>
        </>
    );
};

export default Contact;