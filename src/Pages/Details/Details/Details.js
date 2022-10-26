import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';


const Details = () => {
    const details = useLoaderData();

    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9' className='w-75' >
                    <div>
                        <h2 className='mb-4 text-success'>{details.name}</h2>
                        <Card.Img variant="top" src={details.picture} className='h-50' />
                        <Card.Body>
                            <Card.Title className='my-3 text-primary'>{details.title}</Card.Title>
                            <Card.Text className='bg-success p-2 text-dark bg-opacity-25'>
                                {details.about}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
        </Container>


    );
};

export default Details;