import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const NewDestination = () => {

    const [destinations, setDestinations] = useState([]);

    const [toggle, setToggle] = useState(false)

    const loadData = () => {

        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }

    useEffect(loadData, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        fetch('http://localhost:5000/destinations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('A new destination has been added with an id', data.insertedId);
                    loadData();
                    reset()
                }
            })
    };

    const handleDeletion = (id) => {

        fetch(`http://localhost:5000/destinations/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const rest = destinations.filter(destination => destination._id !== id)
                setDestinations(rest)
            })
    }

    const togglePackages = () => {

        setToggle(!toggle);
    }

    return (
        <Container className='p-5'>
            <h1 className="text-center mb-5">
                Add a new package
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" {...register("location", { required: true })} placeholder='Tour location' className='form-control mb-2' />
                {errors.location && <span className='text-danger'>This field is required</span>}
                <input defaultValue='' {...register("desc", { required: true })} placeholder='Location Description' className='form-control mb-2' />
                {errors.desc && <span className='text-danger'>This field is required</span>}
                <input defaultValue='' {...register("hotel", { required: true })} placeholder='Package included hotel name' className='form-control mb-2' />
                {errors.hotel && <span className='text-danger'>This field is required</span>}
                <input defaultValue='' {...register("package", { required: true })} placeholder='Package duration' className='form-control mb-2' />
                {errors.package && <span className='text-danger'>This field is required</span>}
                <input defaultValue='' {...register("base", { required: true })} placeholder='Package base cost' className='form-control mb-2' />
                {errors.base && <span className='text-danger'>This field is required</span>}
                <input defaultValue='' {...register("extension", { required: true })} placeholder='Extention Cost' className='form-control mb-2' />
                {errors.extension && <span className='text-danger'>This field is required</span>}
                <input defaultValue='' {...register("img", { required: true })} placeholder='Package card image url' className='form-control mb-2' />
                {errors.img && <span className='text-danger'>This field is required</span>}

                <input type="Submit" value='Add Destination' className='btn btn-success d-block' />
            </form>

            <div className="available-services mt-5">
                <h1 className='text-center'>Currently Active Packages</h1>
                <Button onClick={togglePackages}>
                    {
                        !toggle ? 'See all' : 'Collapse'
                    }
                </Button>
                {
                    !toggle ? '' :
                        destinations.map(destination => {
                            return (
                                <div key={destination._id} style={{ borderTop: '1px solid #999' }} className="destination-box py-4 d-flex justify-content-between">
                                    <h3>{destination?.location}</h3>
                                    <Button onClick={() => handleDeletion(destination._id)} variant='danger'>Remove</Button>
                                </div>
                            )
                        })
                }
            </div>
        </Container>
    );
};

export default NewDestination;