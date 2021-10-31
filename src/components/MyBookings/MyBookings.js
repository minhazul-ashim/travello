import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyBookings.css'

const MyBookings = () => {

    const [orders, setOrders] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [booked, setBooked] = useState([]);
    const { user } = useAuth();

    useEffect(() => {

        fetch(`https://whispering-reaches-48420.herokuapp.com/bookings/user?search=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    useEffect(() => {

        fetch(`https://whispering-reaches-48420.herokuapp.com/destinations`)
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    useEffect(() => {

        const allFound = [];

        if (destinations.length && orders.length) {
            for (const order of orders) {
                const found = destinations.find(destination => destination._id === order.packId
                )
                allFound.push(found)
            }
            setBooked(allFound)
        }
    }, [destinations, orders])

    const handleCancellation = (id) => {

        const proceed = window.confirm('Do you want to cancel?');

        if (proceed) {
            fetch(`https://whispering-reaches-48420.herokuapp.com/booking?email=${user.email}&&id=${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const rest = booked.filter(el => el._id !== id)
                    setBooked(rest)
                })
        }
    }

    return (
        <Container style={{ minHeight: '90vh' }} className='p-5'>
            {
                booked.length ?
                    <div className="d-flex flex-column align-items-center">
                        <h1 className='text-center'>{booked.length} Bookings found</h1>
                        {
                            booked.map(book => {

                                return (
                                    <div className="single-booking w-75 text-left" key={book._id}>
                                        <h1>{book.location}</h1>
                                        <h4>{book.package}</h4>
                                        <h5>${book.base}</h5>
                                        <Button onClick={() => handleCancellation(book._id)} variant='danger'>Cancel</Button>
                                    </div>
                                )
                            })
                        }
                    </div> :
                    <h2 className='text-center'>You did not confirm any bookings yet! Check out our holiday destination and book yours now.</h2>
            }
        </Container>
    );
};

export default MyBookings;