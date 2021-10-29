import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <Container className='p-5 d-flex flex-column align-items-center'>
            <h1 className='text-center'>Admin Operations</h1>
            <Button as={Link} to='/allorders' variant='danger' className='my-2'>Manage all Orders</Button>
            <Button as={Link} className='my-2' to='/newdestination'>Add new Destinaton</Button>
        </Container>
    );
};

export default Admin;