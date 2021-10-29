import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (!loading) {
        return (
            <Route
                {...rest}
                render={({ location }) => user ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
            >
            </Route>
        );
    }
    else {
        return <LoadingScreen></LoadingScreen>
    }
};

export default PrivateRoute;