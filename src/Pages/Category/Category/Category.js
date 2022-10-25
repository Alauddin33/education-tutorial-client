import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Details from '../../Details/Details/Details';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const Category = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg='9' >
                    <Details></Details>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;