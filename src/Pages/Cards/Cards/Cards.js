import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    const card = useLoaderData();
    console.log(card);
    return (
        <Card className="text-center">
            <Card.Header className='fs-1 text-success'>{card.name}</Card.Header>
            <Card.Body>
                <Card.Title className='text-primary'>Welcome to Premium  Home</Card.Title>
                <Card.Text className='text-danger fs-3'>
                    50% Mega discount on every course
                </Card.Text>
                <Button variant="primary">Enroll Now</Button>
            </Card.Body>
            <Card.Footer>Email: {card.email}</Card.Footer>
        </Card>
    );
};

export default Cards;