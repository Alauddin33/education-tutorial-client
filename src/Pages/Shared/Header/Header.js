import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='mb-5'>
            <Container >
                <img src={logo} alt="" />
                <Navbar.Brand><Link className='text-warning font-weight-bold display-5 text-decoration-none' to='/'>Digitech School</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='font-weight-bold text-decoration-none  text-info fs-4 pe-4' to='/courses'>Courses</Link>
                        <Link className='font-weight-bold text-decoration-none  text-info fs-4 pe-4'>FAQ</Link>
                        <Link className='font-weight-bold text-decoration-none  text-info fs-4 pe-4' to='/blog'>BLOG</Link>

                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none font-weight-bold text-light pe-4' to='/login'>Login</Link>
                        <Link className='text-decoration-none font-weight-bold pe-4 text-light' to='/Register'>Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;