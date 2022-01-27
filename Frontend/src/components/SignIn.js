import React, { useState, useEffect } from 'react';
import './style.css';
import GoogleIcon from '../assets/google.png';
import FacebookIcon from '../assets/facebook.png';
import { Button, Form, Container, Row, Col, Card, } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { TextField, FormControl, InputAdornment, InputLabel, IconButton, Input, MenuItem, NativeSelect } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { userlogin, logout,register } from '../actions/auth';

function Login({ auth, userlogin,register, logout }) {


    const { isAuthenticated, user, token,authCategory} = auth;


    const [loginsuccess, setLoginsuccess] = useState(false);
    const [email, setEmail] = useState('');


    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });


    useEffect(()=>{
        logout();
   },[])

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignup=()=>{
        // console.log(email);
        // console.log(values.password);
        var password=values.password;
        setLoginsuccess(true);
        const userData={email,password};
        register(userData);
    }

    const handleLogin=()=>{
        // console.log(email);
        // console.log(values.password);
        setLoginsuccess(true);
        var password=values.password;
        const userData={email,password};
        userlogin(userData);
    }

      
  if(isAuthenticated){
    if (authCategory=='admin'){
      return <Redirect to='/admin-dashboard' />;
    }
    else if(authCategory=='writer'){
      return <Redirect to='/dashboard' />;
    }
  }

    return (
        <div className='page'>
            <Container style={{paddingTop: '10vh', paddingBottom: '10vh' }}>
                <Row>
                    <Col lg={1} xs={12}></Col>
                    <Col lg={5}>
                        <Card className='p-4 card-container'>
                            {
                                loginsuccess ?
                                    <div>
                                        <div className='mt-2'>
                                            <h2 className='title'>Join Us</h2>
                                            <p className='text2 m-0 mt-1'>Welcome to PI-CLUB</p>
                                        </div>
                                        <div className='mt-3'>
                                            <TextField className='my-2' id="standard-basic" label="Email" variant="standard" fullWidth />
                                            <FormControl className='my-2' variant="standard" fullWidth>
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    id="standard-adornment-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={handleChange('password')}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </div>
                                        <div className='my-4 d-flex'>
                                            <Button className='mx-2 mt-4 login-btn' variant="primary"
                                                onClick={() => handleSignup()}>Join Now</Button>
                                            <Button className='mx-2 mt-4 login-btn' variant="primary"
                                                onClick={() => handleLogin()}>Login</Button>
                                        </div>
                                        <hr />
                                        <div className='text-center pb-4'>
                                            <p className='login-terms-text m-0'>By continuing, you agree to  <a href='/' className='text-decoration-none'>terms of service</a> and</p>
                                            <p className='login-terms-text m-0'><a href='/' className='text-decoration-none'>privacy policy.</a></p>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className='mt-2'>
                                            <h2 className='title'>Let's get started</h2>
                                            <p className='text2 m-0 mt-1'>Your one step share your ideas.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <TextField id="standard-basic" label="Email" variant="standard" fullWidth 
                                            onChange={(e)=>setEmail(e.target.value)}/>
                                            <Button className='mt-4 login-btn' variant="primary"
                                                onClick={() => setLoginsuccess(true)} disabled={email.length>5?false:true}>Continue</Button>
                                        </div>
                                        <div>
                                            <h5 className='OR-text my-4'>OR</h5>
                                        </div>
                                        <div>
                                            <Button className='social-btn' variant="primary" style={{ width: '100%' }}>
                                                <img src={GoogleIcon} /><span className='mx-3'>Continue with Google</span>
                                            </Button>
                                            <Button className='my-2 social-btn' variant="primary" style={{ width: '100%' }}>
                                                <img src={FacebookIcon} /><span className='mx-3'>Continue with Facebook</span>
                                            </Button>
                                        </div>
                                        <hr />
                                        <div className='text-center pb-4'>
                                            <p className='login-terms-text m-0'>By continuing, you agree to <a href='/' className='text-decoration-none'>terms of service</a> and</p>
                                            <p className='login-terms-text m-0'><a href='/' className='text-decoration-none'>privacy policy.</a></p>
                                        </div>
                                    </div>
                            }
                        </Card>
                    </Col>
                    <Col lg={1} xs={12}></Col>
                    <Col lg={5} xs={12}>
                        <div style={{padding:'15px 0px 0px 30px'}}>
                            <div className='my-4'>
                                <h2 className='title'>Hurry to Joins </h2>
                                <h2 className='title'>Share your thoughts and Ideas.</h2>
                            </div>
                            <div className='my-3'>
                                <p className='text1 m-0'>Way to Join</p>
                                <p className='text2 m-0'>Create your account, it is easy and customizable.</p>
                            </div>
                            <div className='my-3'>
                                <p className='text1 m-0'>View Opportunity</p>
                                <p className='text2 m-0'>Browse opportunity available in PI-CLUB</p>
                            </div>
                            <div className='my-3'>
                                <p className='text1 m-0'>Read others experiences.</p>
                                <p className='text2 m-0'>Share your experiences so that other will learn from it.</p>
                                <p className='text2 m-0'>.</p>
                            </div>
                        </div>
                    </Col>
                    {/* <Col lg={1} xs={12}></Col> */}
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { userlogin, logout,register })(Login);
