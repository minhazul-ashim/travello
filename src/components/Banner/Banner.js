import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-overlay py-5">
                <div className="banner-text text-center text-white p-5">
                    <h1>Travello</h1>
                    <p>We take the responsibility for your vacation and joyous tours. Contact for informaions and book your tour now!</p>
                    <Button>Book now!</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;