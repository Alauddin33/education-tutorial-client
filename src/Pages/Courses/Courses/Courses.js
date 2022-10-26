import React from 'react';

import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <Container className='mb-5 '>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>

                <Col lg='9'>
                    <Row xs={1} md={2} className="g-4">
                        {courses.map(course => (

                            <Col key={course.id}>
                                <Card>
                                    <h2 className='mx-auto mb-4 bg-primary bg-opacity-25 p-2' >{course.name}</h2>
                                    <Image className='mx-auto' variant="top" src={course.thumbnail} width={250} height={200} />
                                    <Card.Body>
                                        <Card.Title className='mx-auto text-success' >{course.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>


            </Row>
        </Container>
    );
};

export default Courses;