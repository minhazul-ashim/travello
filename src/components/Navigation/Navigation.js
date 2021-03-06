import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <Navbar bg="light" variant='light' expand="lg">
            <Container>
                <Navbar.Brand href="#home">Travello</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='navlink' as={Link} to='/home'>Home</Nav.Link>
                        {
                            !user ? <Button as={Link} to='/login'>Log in</Button> :
                                <>
                                    <Nav.Link className='navlink' as={Link} to='/mybookings'>My Bookings</Nav.Link>
                                    <Nav.Link className='navlink' as={Link} to='/admin'>Admin</Nav.Link>
                                    <Button onClick={logOut} variant='danger'>Logout</Button>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;