import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { googleSignIn, setLoading } = useAuth();

    const location = useLocation();

    const history = useHistory();

    const redirectURI = location.state?.from.pathname;

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
        <Container className='d-flex justify-content-center'>
            <div className="login p-5">
                <button onClick={handleGoogleSignIn}>Google login</button>
            </div>
        </Container>
    );
};

export default Login;