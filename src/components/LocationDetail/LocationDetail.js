import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LocationDetail = () => {

    const { id } = useParams();
    const history = useHistory();
    const [destination, setDestination] = useState({});
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.packId = destination._id;
        data.userEmail = user.email;
        data.status = 'Pending'
        delete data.package;

        fetch('https://whispering-reaches-48420.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/mybookings');
            })
    };

    useEffect(() => {

        fetch(`https://whispering-reaches-48420.herokuapp.com/location/${id}`)
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])

    return (
        <Container className='p-5'>
            <Row className='d-flex flex-column align-items-center align-items-md-start flex-md-row jusitfy-content-center shadow-lg g-5 my-2'>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={destination.img} />
                        <Card.Body>
                            <Card.Title>{destination.location}</Card.Title>
                            <Card.Text>
                                {destination.desc}
                            </Card.Text>
                            <Card.Text>
                                Base Package: $ {destination.base}
                            </Card.Text>
                            <Card.Text>
                                Package: {destination.package}
                            </Card.Text>
                            <Card.Text>
                                Extention: $ {destination.extension}
                            </Card.Text>
                            <Card.Text>
                                Hotel Reservation: {destination.hotel}
                            </Card.Text>
                            <Button variant='info'>Book package</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h2>Hello, <span className='text-danger'> {user.displayName}</span>, Please fill out the form for confirming your travel with us!</h2>
                    <h3 className='text-info'>Booking information</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='First name' className='form-control my-3' />
                        <input {...register("lastName", { required: true })} placeholder='Last name' className='form-control my-3' />
                        <input defaultValue={user.email} {...register("email", { required: true })} placeholder='Email' className='form-control my-3' />
                        <input {...register("phone", { required: false })} placeholder='Phone' className='form-control my-3' />
                        <input {...register("package", { required: true })} className='form-control my-3' value={`${destination?.location}, ${destination?.package}, $${destination?.base}`} readOnly />
                        <input type="submit" className='btn btn-outline-danger mb-3' value='Book' />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default LocationDetail;