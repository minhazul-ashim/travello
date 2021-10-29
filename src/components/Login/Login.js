import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { googleSignIn } = useAuth();

    return (
        <Container className='d-flex justify-content-center'>
            <div className="login p-5">
                <button onClick={googleSignIn}>Google login</button>
            </div>
        </Container>
    );
};

export default Login;