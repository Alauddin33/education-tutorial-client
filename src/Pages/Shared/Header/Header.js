import React, { useContext, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/UserContext';
import { FaUser } from "react-icons/fa";


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);


    const [active, setActive] = useState(false)
    const buttonHandle = () => {
        setActive(!active);
    }


    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error('error', error);
            })
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='mb-5'>
            <Container >
                <img src={logo} alt="" />
                <Navbar.Brand><Link className='text-warning font-weight-bold display-5 text-decoration-none' to='/'>Digitech</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Button className='me-2' variant="outline-primary"><Link className='font-weight-bold text-decoration-none  text-info fs-4' to='/courses'>Courses</Link></Button>
                        <Button className='me-2' variant="outline-primary"><Link className='font-weight-bold text-decoration-none  text-info fs-4'>FAQ</Link></Button>
                        <Button className='me-2' variant="outline-primary"><Link className='font-weight-bold text-decoration-none  text-info fs-4' to='/blog'>BLOG</Link>
                        </Button>
                        <Button variant="outline-dark" className='me-2' onClick={buttonHandle}>{active ? 'Light ' : 'Dark'} Mode</Button>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Link to='/'>
                                        <button onClick={handleSignOut} className="btn btn-md font-weight-bold text-light pe-4">Log out</button>
                                    </Link>
                                    {user?.uid && <span className="btn btn-md font-weight-bold text-light pe-4">Welcome,

                                        <OverlayTrigger
                                            placement={''}
                                            overlay={
                                                <Tooltip className='position' >
                                                    {user.displayName}
                                                </Tooltip>
                                            }>


                                            {
                                                user.photoURL ? <img style={{ width: "40px", borderRadius: "50%" }} src={user.photoURL} alt="" /> : <FaUser></FaUser>
                                            }

                                        </OverlayTrigger>

                                    </span>}
                                </>
                                :
                                <>
                                    <Link className='text-decoration-none font-weight-bold text-light pe-4' to='/login'>Login</Link>
                                    <Link className='text-decoration-none font-weight-bold pe-4 text-light' to='/Register'>Register</Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>



        </Navbar>

    );
};

export default Header;