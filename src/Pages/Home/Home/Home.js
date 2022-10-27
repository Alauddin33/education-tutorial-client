import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Brand from '../../../assets/Brand.jpg';
import Brand2 from '../../../assets/Brand2.jpeg';


const Home = () => {

    return (

        <Container className='mb-5'>
            <Row>
                <Col lg='4' className=' text-center'>
                    <h1 className='text-primary text-opacity-75'>Technical Education</h1>

                    <h3 className='text-justify text-danger text-opacity-75' >The academic preparation of students for jobs involving applied science and modern technology.</h3>
                </Col>
                <Col lg='8'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Brand}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Brand2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </Container>
    );
};

export default Home;