import React, { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/UserContext';


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

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
                <Navbar.Brand><Link className='text-warning font-weight-bold display-5 text-decoration-none' to='/'>Digitech School</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='font-weight-bold text-decoration-none  text-info fs-4 pe-4' to='/courses'>Courses</Link>
                        <Link className='font-weight-bold text-decoration-none  text-info fs-4 pe-4'>FAQ</Link>
                        <Link className='font-weight-bold text-decoration-none  text-info fs-4 pe-4' to='/blog'>BLOG</Link>

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
                                            placement={'bottom'}
                                            overlay={
                                                <Tooltip >
                                                    {user.displayName}
                                                </Tooltip>
                                            }>
                                            <img style={{ width: "40px", borderRadius: "50%" }} src={user.photoURL} alt="" />
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