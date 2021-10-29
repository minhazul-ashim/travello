import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
    return (
        <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="">
                <Spinner animation="border" variant="dark" />
            </div>
        </div>
    );
};

export default LoadingScreen;