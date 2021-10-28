import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Location from '../Location/Location';

const Destination = () => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {

        fetch('/destination.json')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (
        <div className="py-5">
            <Container className='d-flex flex-column align-items-center'>
                <h1 className='text-center'>Destinations</h1>
                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        destinations.map(destination => {
                            return (
                                <Location key={destination._id} data={destination}></Location>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Destination;
