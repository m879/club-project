import React,{useState,useEffect} from 'react';
import {
    ListGroup, Navbar, Button, Form, Offcanvas, Table,
    Container, Row, Col, Card, Tab, Tabs, Nav
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import {register} from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


function Signup({ auth, register}) {

    const { isAuthenticated, user, token,authCategory,isSignup } = auth;

    
    const [formData ,setFormdata]=useState({
        email:'',
        password:'',
        re_password:'',
    });

    const {email,password,re_password}=formData;

    const onChange = e => setFormdata({ ...formData, [e.target.name]: e.target.value });


    const handleSubmit=()=>{
        const userData={email,password};
        register(userData);
    }

    


    return (
        <>
            <Container>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <Card style={{width: '100%' }}>
                            <div className='px-4'>
                                <Form className='my-4'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" 
                                        name='email' value={email} 
                                          onChange={e => onChange(e)}/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" 
                                        onChange={e => onChange(e)} value={password} name='password'/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Repeat Password</Form.Label>
                                        <Form.Control type="password" placeholder="Repeat Password" value={re_password} name='re_password' 
                                        onChange={e => onChange(e)}/>
                                    </Form.Group>
                                 
                                    <div  className="py-4">
                                        <Button className="my-4" style={{float:'right'}} onClick={()=>handleSubmit()}>Create An Account</Button>
                                    </div>
                                </Form>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={1}></Col>
                </Row>

            </Container>
        </>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    // isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, { register})(Signup);
  