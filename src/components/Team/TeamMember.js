import React from 'react';
import {Col } from 'react-bootstrap';


const TeamMember = ({ data }) => {

    const { name, img, desig } = data;

    return (
        <Col xs={6} lg={4}>
            <div className="member-box d-flex flex-column align-items-center"
                style={{ border: '1px solid #999f3', padding: '7% 0%', boxShadow: '5px 5px 15px #999', borderRadius: '10px' }}>
                <div className="img-div">
                    <img src={img} style={{ width: '120px', height: '120px', objectFit: 'cover' }} className='rounded-circle' alt="" />
                </div>
                <h4>{name}</h4>
                <h6>{desig}</h6>
            </div>
        </Col>
    );
};

export default TeamMember;