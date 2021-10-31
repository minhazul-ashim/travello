import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMember from './TeamMember';


const Team = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {

        fetch('https://whispering-reaches-48420.herokuapp.com/team')
            .then(res => res.json())
            .then(data => {
                setTeam(data);
            })
    }, [])

    return (
        <Container>
            <h1 className='text-center'>Meet our team</h1>
            <Row className='my-4 g-5'>
                {
                    team.map(member => <TeamMember key={member._id} data={member}></TeamMember>)
                }
            </Row>
        </Container>
    );
};

export default Team;

