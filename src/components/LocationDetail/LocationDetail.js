import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const LocationDetail = () => {

    const { id } = useParams();
    const [destination, setDestination] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.packId = destination._id;
        delete data.package;
        console.log(data)
    };

    useEffect(() => {

        fetch(`https://whispering-reaches-48420.herokuapp.com/location/${id}`)
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])

    return (
        <Container className='p-5'>
            <Row className='d-flex flex-column align-items-center align-items-md-start flex-md-row jusitfy-content-center shadow-lg g-5'>
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
                    <h2>Booking information</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='First name' className='form-control my-3' />
                        <input {...register("lastName", { required: true })} placeholder='Last name' className='form-control my-3' />
                        <input {...register("email", { required: true })} placeholder='Email' className='form-control my-3' />
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