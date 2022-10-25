import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../../Card/Card/Card';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9' >
                    <Card></Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;