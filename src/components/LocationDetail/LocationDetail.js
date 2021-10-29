import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LocationDetail = () => {

    const { id } = useParams();
    const [location, setLocation] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/location/${id}`)
            .then(res => res.json())
            .then(data => {
                setLocation(data);
                console.log(data)
            })
    }, [])

    return (
        <div>
            <h1>This is location detail {location.location}</h1>
        </div>
    );
};

export default LocationDetail;