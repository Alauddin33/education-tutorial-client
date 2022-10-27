import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';


const Details = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <Container className='mb-5'>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9' className='w-75 mb-5' >
                    <div>
                        <h2 className='mb-4 text-success'>{details.name}</h2>
                        <Card.Img variant="top" src={details.picture} className='h-50' />
                        <Card.Body>
                            <Card.Title className='my-3 text-primary'>{details.title}</Card.Title>
                            <Card.Text className='bg-success p-2 text-dark bg-opacity-25'>
                                {details.about}
                            </Card.Text>
                        </Card.Body>
                        <div className='d-flex justify-content-between align-items-center'>
                            <ListGroup className="list-group-flush">

                                <ListGroup.Item className='bg-warning bg-opacity-25 m-4'>Office Contact: {details.phone}</ListGroup.Item>

                            </ListGroup>
                            <Card.Body className='text-center'>

                                <Button className='text-light' variant="danger">Get Premium Access</Button>

                            </Card.Body>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


    );
};

export default Details;