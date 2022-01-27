import React, { useState, useEffect } from 'react';
import { Navbar, Button, Container, Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import logo from '../assets/logo2.png';

const NavStyle={
    textDecoration: 'none', fontWeight: 'bolder',color:'black'
}

function Navigation({ auth, logout }) {

    const { isAuthenticated, user, token, authCategory } = auth;

    const handleLogout = () => {
        logout();
    }

    const NoAuth = (
        <Nav className='ml-auto'>
             <Nav.Link >
                <NavLink to={`/about`} style={NavStyle}>About Us</NavLink>
            </Nav.Link >
            <Nav.Link >
                <NavLink to={`/hirings`} style={NavStyle}>Hirings</NavLink>
            </Nav.Link >
            <Nav.Link >
                <NavLink to={`/blogs`} style={NavStyle}>Blogs</NavLink>
            </Nav.Link >
            <Nav.Link >
                <NavLink to={`/gallery`} style={NavStyle}>Achievements</NavLink>
            </Nav.Link >
            <Nav.Link >
                <NavLink to={`/gallery`} style={NavStyle}>Our Projects</NavLink>
            </Nav.Link >
            <Nav.Link >
                <NavLink to={`/contact`} style={NavStyle}>Contact Us</NavLink>
            </Nav.Link >
            <NavLink to={`/signin`} style={{ textDecoration: 'none' }}>
                <Button variant='primary' className='mx-2' >Join us</Button>
            </NavLink>
        </Nav>
    )

    const UserAuth = (
        <Nav>
            <Nav.Link >
                <NavLink to={`/dashboard`} style={{ textDecoration: 'none', fontWeight: 'bolder' }}>Dashboard</NavLink>
            </Nav.Link >
            <NavLink to='/'>
               <Button variant='primary' className='mx-2' onClick={() => handleLogout()}>Logout</Button>
            </NavLink>
        </Nav>
    )

    return (
        <div>
            <Navbar  fixed="top" expand="lg" style={{ 
                // background: 'linear-gradient(to right, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', 
                // background: 'linear-gradient(to right, #051937, #004d7a, #008793, #00bf72, #a8eb12)', 
                // background: 'linear-gradient(to right, #3279dd, #00a1dd, #36bec4, #9cd3b8, #dde5cd)', 
                background: '  #dfd9ff', 
                color: 'white', 
            // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
             }}>
                <Container>
                    <NavLink to='/' style={{ textDecoration: 'none', fontWeight: 'bolder' }}>
                        <Navbar.Brand href="#home">
                            <img className='p-2' src={logo} 
                            style={{height:'100px',width:'100px',
                            marginBottom:'-50px',
                            // background:'white',
                            background: '#dfd9ff', 

                            // background: 'linear-gradient(to right, #051937, #004d7a, #008793, #00bf72, #a8eb12)', 

                            borderRadius:'50px'
                        }}></img>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">  </Nav>
                        {
                            isAuthenticated ?UserAuth: NoAuth
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
