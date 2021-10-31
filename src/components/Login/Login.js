import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa'

const Login = () => {

    const { googleSignIn, setLoading } = useAuth();

    const location = useLocation();

    const history = useHistory();

    const redirectURI = location.state?.from.pathname || '/home';

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                history.push(redirectURI)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <Container className='d-flex justify-content-center' style={{ height: '90vh' }}>
            <div className="login p-5">
                <Button variant='danger' onClick={handleGoogleSignIn}><FaGoogle className='me-2' />Google login</Button>
            </div>
        </Container>
    );
};

export default Login;