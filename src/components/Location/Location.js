import React from 'react';
import { Card, Container, Button, Col } from 'react-bootstrap';
import './Location.css';
import { useHistory } from 'react-router-dom'

const Location = (props) => {

    const { _id, location, desc, img } = props.data;

    const history = useHistory()

    const handleDetail = () => {

        history.push(`/location/${_id}`)
    }

    return (
        <Container className='d-flex justify-content-center'>
            <Col className='h-100'>
                <Card className='h-100'>
                    <Card.Img variant="top" src={img} className='h-50' />
                    <Card.Body>
                        <Card.Title>{location}</Card.Title>
                        <Card.Text>
                            {desc.slice(0, 200)}
                        </Card.Text>
                        <Button onClick={handleDetail} variant="primary">Detail</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default Location;