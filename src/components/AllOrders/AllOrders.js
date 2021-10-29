import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './AllOrders.css'

const AllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDeletion = (id) => {

        fetch(`http://localhost:5000/admin/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const rest = orders.filter(order => order.packId !== id)
                setOrders(rest)
            })
    }

    return (
        <Container style={{ minHeight: '90vh' }} className='p-5 d-flex flex-column align-items-center'>
            <h1 className='text-center'>Orders found ({orders.length})</h1>
            {
                orders.map(order => {
                    return (
                        <div key={order.packId} className="order-box my-5">
                            <h5>Client: {order?.firstName.toUpperCase()}
                                {order?.lastName.toUpperCase()}</h5>
                            <h6>Booking Id:  {order?.packId}</h6>
                            <h6>Email: {order?.userEmail}</h6>
                            <h6>Phone: {order?.phone}</h6>
                            <h6>Status: {order?.status}</h6>
                            <Button onClick={() => handleDeletion(order.packId)} variant='danger'>Delete</Button>
                        </div>
                    )
                })
            }
        </Container>
    );
};

export default AllOrders;